<?php
/**
 * Configuratie voor public/api/contact.php (contactformulier op Plesk).
 *
 * Zet een kopie van dit bestand BUITEN de webroot, in de map "private" van het domein:
 *   /var/www/vhosts/tdt-ict.com/private/tdt-contact-config.php
 * In Plesk: Bestandsbeheer → map "private". Die map is niet via het web bereikbaar.
 * Zet dit bestand nooit in Git: het bevat de geheime Turnstile-sleutel.
 */

return [
    // Ontvanger van de berichten
    'to' => 'info@tdt-ict.com',

    // Afzender: een adres op jullie eigen domein (anders belandt de mail vaak in spam).
    // Het mailadres hoeft niet echt te bestaan, het domein moet wel via deze server mailen.
    'from' => 'Website TDT-ICT <website@tdt-ict.com>',

    // Geheime sleutel van Cloudflare Turnstile (Cloudflare-dashboard → Turnstile → widget → Secret key)
    'turnstile_secret' => '',

    // true = weiger berichten als turnstile_secret ontbreekt (aanbevolen zodra Turnstile aan staat)
    // false = werkt ook zonder Turnstile (alleen honeypot en rate limit)
    'require_turnstile' => true,
];
