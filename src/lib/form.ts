/**
 * Contactformulier: validatie en verzending.
 *
 * Koppelen: zet NEXT_PUBLIC_FORM_ENDPOINT op een endpoint dat JSON accepteert, bijvoorbeeld
 *  - Formspree:  https://formspree.io/f/<id>
 *  - een eigen serverless functie (Netlify/Vercel) die via Resend mailt, zie /examples
 * De payload is een plat JSON-object met de velden uit `ContactValues`.
 * Met Cloudflare Turnstile ingeschakeld (NEXT_PUBLIC_TURNSTILE_SITE_KEY) gaat het token mee als
 * `cf-turnstile-response`. Het endpoint moet dat token controleren met de geheime sleutel.
 */

export type ContactValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  role: string;
  subject: string;
  message: string;
  privacy: boolean;
  /** Honeypot tegen spam: moet leeg blijven */
  website: string;
  /** Cloudflare Turnstile-token (leeg als Turnstile niet is ingeschakeld) */
  captcha: string;
};

export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

export const emptyContact: ContactValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  role: "",
  subject: "",
  message: "",
  privacy: false,
  website: "",
  captcha: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(v: ContactValues, opts: { captchaRequired?: boolean } = {}): ContactErrors {
  const errors: ContactErrors = {};
  if (v.name.trim().length < 2) errors.name = "Vul je naam in.";
  if (!emailPattern.test(v.email.trim())) errors.email = "Vul een geldig e-mailadres in, bijvoorbeeld naam@bedrijf.nl.";
  const digits = v.phone.replace(/\D/g, "");
  if (!/^[+\d\s()-]+$/.test(v.phone.trim()) || digits.length < 10 || digits.length > 15)
    errors.phone = "Vul een geldig telefoonnummer in, bijvoorbeeld 06 12345678.";
  if (!v.role) errors.role = "Kies wie je bent.";
  if (!v.subject) errors.subject = "Kies een onderwerp.";
  if (v.message.trim().length < 10) errors.message = "Vertel ons in een paar woorden waar we je mee kunnen helpen (minimaal 10 tekens).";
  if (!v.privacy) errors.privacy = "Geef toestemming om je gegevens te gebruiken, anders kunnen we geen contact opnemen.";
  if (opts.captchaRequired && !v.captcha)
    errors.captcha = "Wacht even tot de beveiligingscheck klaar is, of klik op het vakje om te bevestigen dat je geen robot bent.";
  return errors;
}

export async function submitContact(values: ContactValues): Promise<void> {
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
  if (!endpoint) throw new Error("NEXT_PUBLIC_FORM_ENDPOINT is niet ingesteld");
  // Spam-bot gevuld: doe alsof het gelukt is
  if (values.website) return;

  const { website: _honeypot, captcha, ...payload } = values;
  void _honeypot;
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      ...payload,
      ...(captcha ? { "cf-turnstile-response": captcha } : {}),
      _subject: `Nieuw bericht via tdt-ict.com: ${payload.subject}`,
    }),
  });
  if (!res.ok) throw new Error(`Formulier gaf status ${res.status}`);
}
