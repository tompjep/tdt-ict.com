<?php
/**
 * Contactformulier van tdt-ict.com: ontvangt het formulier (JSON), controleert
 * Cloudflare Turnstile en mailt het bericht. Bedoeld voor Plesk/Apache met PHP 8.
 *
 * Gebruik in de site:  NEXT_PUBLIC_FORM_ENDPOINT=/api/contact.php
 *
 * Instellingen staan NIET in dit bestand maar in een configbestand buiten de webroot,
 * standaard: <domeinmap>/private/tdt-contact-config.php (zie examples/tdt-contact-config.example.php).
 * Een ander pad kan via de omgevingsvariabele TDT_CONTACT_CONFIG.
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function respond(int $status, array $body): never
{
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['ok' => false, 'error' => 'Alleen POST is toegestaan']);
}

/* ---------------------------------------------------------------------------
 * Configuratie
 * ------------------------------------------------------------------------ */

$configPath = getenv('TDT_CONTACT_CONFIG') ?: dirname(__DIR__, 2) . '/private/tdt-contact-config.php';
if (!is_file($configPath)) {
    error_log("contact.php: configbestand ontbreekt ($configPath)");
    respond(500, ['ok' => false, 'error' => 'Formulier is niet geconfigureerd']);
}
$config = require $configPath;
$to = (string) ($config['to'] ?? '');
$from = (string) ($config['from'] ?? '');
$turnstileSecret = (string) ($config['turnstile_secret'] ?? '');
$requireTurnstile = (bool) ($config['require_turnstile'] ?? true);
if ($to === '' || $from === '') {
    respond(500, ['ok' => false, 'error' => 'Formulier is niet geconfigureerd']);
}

/* ---------------------------------------------------------------------------
 * Alleen aanvragen vanaf de eigen site
 * ------------------------------------------------------------------------ */

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$host = $_SERVER['HTTP_HOST'] ?? '';
if ($origin !== '' && parse_url($origin, PHP_URL_HOST) !== parse_url('//' . $host, PHP_URL_HOST)) {
    respond(403, ['ok' => false, 'error' => 'Niet toegestaan']);
}

/* ---------------------------------------------------------------------------
 * Eenvoudige rate limit: max. 5 berichten per IP per 10 minuten
 * ------------------------------------------------------------------------ */

$ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
$rateFile = sys_get_temp_dir() . '/tdt-contact-' . hash('sha256', $ip);
$now = time();
$recent = [];
if (is_file($rateFile)) {
    $recent = array_filter(
        array_map('intval', explode(',', (string) file_get_contents($rateFile))),
        fn(int $t) => $t > $now - 600,
    );
}
if (count($recent) >= 5) {
    respond(429, ['ok' => false, 'error' => 'Te veel berichten, probeer het later opnieuw']);
}

/* ---------------------------------------------------------------------------
 * Invoer controleren (dezelfde regels als in de browser)
 * ------------------------------------------------------------------------ */

$raw = file_get_contents('php://input', false, null, 0, 20000);
$data = json_decode((string) $raw, true);
if (!is_array($data)) {
    respond(400, ['ok' => false, 'error' => 'Ongeldige aanvraag']);
}

$field = fn(string $key, int $max = 200): string => mb_substr(trim((string) ($data[$key] ?? '')), 0, $max);
$name = $field('name');
$company = $field('company');
$email = $field('email');
$phone = $field('phone', 40);
$role = $field('role', 40);
$subject = $field('subject', 80);
$message = $field('message', 5000);

$errors = [];
if (mb_strlen($name) < 2) $errors[] = 'name';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'email';
$digits = preg_replace('/\D/', '', $phone);
if (!preg_match('/^[+\d\s()-]+$/', $phone) || strlen($digits) < 10 || strlen($digits) > 15) $errors[] = 'phone';
if (!in_array($role, ['zakelijk', 'vereniging', 'particulier'], true)) $errors[] = 'role';
if ($subject === '') $errors[] = 'subject';
if (mb_strlen($message) < 10) $errors[] = 'message';
if (($data['privacy'] ?? false) !== true) $errors[] = 'privacy';
if ($errors) {
    respond(422, ['ok' => false, 'error' => 'Ongeldige velden', 'fields' => $errors]);
}

/* ---------------------------------------------------------------------------
 * Cloudflare Turnstile
 * ------------------------------------------------------------------------ */

if ($turnstileSecret !== '') {
    $token = (string) ($data['cf-turnstile-response'] ?? '');
    if ($token === '') {
        respond(403, ['ok' => false, 'error' => 'Beveiligingscheck ontbreekt']);
    }
    $ch = curl_init('https://challenges.cloudflare.com/turnstile/v0/siteverify');
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => http_build_query(['secret' => $turnstileSecret, 'response' => $token, 'remoteip' => $ip]),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 10,
    ]);
    $result = json_decode((string) curl_exec($ch), true);
    curl_close($ch);
    // Bij een netwerkfout of afwijzing: niet versturen (fail closed)
    if (!is_array($result) || ($result['success'] ?? false) !== true || (isset($result['action']) && $result['action'] !== 'contact')) {
        respond(403, ['ok' => false, 'error' => 'Beveiligingscheck mislukt']);
    }
} elseif ($requireTurnstile) {
    error_log('contact.php: turnstile_secret ontbreekt terwijl require_turnstile aan staat');
    respond(500, ['ok' => false, 'error' => 'Formulier is niet geconfigureerd']);
}

/* ---------------------------------------------------------------------------
 * Mail versturen
 * ------------------------------------------------------------------------ */

$roles = ['zakelijk' => 'Zakelijk', 'vereniging' => 'Stichting of vereniging', 'particulier' => 'Particulier'];
$body = implode("\n", [
    'Nieuw bericht via het contactformulier op tdt-ict.com',
    '',
    "Naam:       $name",
    'Bedrijf:    ' . ($company !== '' ? $company : '-'),
    "E-mail:     $email",
    "Telefoon:   $phone",
    'Ik ben:     ' . $roles[$role],
    "Onderwerp:  $subject",
    '',
    'Bericht:',
    $message,
    '',
    '--',
    'Verstuurd op ' . date('d-m-Y H:i') . " vanaf IP $ip",
]);

// $email is gevalideerd met FILTER_VALIDATE_EMAIL, dus bevat geen regeleinden (geen header-injectie)
$headers = [
    'From' => $from,
    'Reply-To' => $email,
    'MIME-Version' => '1.0',
    'Content-Type' => 'text/plain; charset=UTF-8',
    'Content-Transfer-Encoding' => '8bit',
    'X-Mailer' => 'tdt-ict.com contactformulier',
];
$mailSubject = mb_encode_mimeheader("Nieuw bericht via tdt-ict.com: $subject", 'UTF-8');
$envelopeFrom = filter_var(preg_replace('/^.*<|>.*$/', '', $from), FILTER_VALIDATE_EMAIL);

$sent = mail($to, $mailSubject, $body, $headers, $envelopeFrom ? "-f$envelopeFrom" : '');
if (!$sent) {
    error_log('contact.php: mail() mislukt');
    respond(502, ['ok' => false, 'error' => 'Versturen mislukt']);
}

$recent[] = $now;
@file_put_contents($rateFile, implode(',', $recent), LOCK_EX);

respond(200, ['ok' => true]);
