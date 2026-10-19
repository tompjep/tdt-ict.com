/**
 * Voorbeeld: contactformulier via Resend (https://resend.com) als Netlify Function.
 *
 * Gebruik:
 *  1. Kopieer dit bestand naar netlify/functions/contact.mjs
 *  2. Stel in Netlify de environment variables in:
 *       RESEND_API_KEY   – API-sleutel van Resend
 *       CONTACT_TO       – ontvanger, bijv. info@tdt-ict.com
 *       CONTACT_FROM     – geverifieerde afzender, bijv. "Website TDT-ICT <website@tdt-ict.com>"
 *       TURNSTILE_SECRET_KEY – geheime sleutel van Cloudflare Turnstile (alleen hier, nooit in de site zelf)
 *       NEXT_PUBLIC_FORM_ENDPOINT=/.netlify/functions/contact
 *  3. Opnieuw deployen.
 *
 * Voor Vercel: plaats de logica in api/contact.js en exporteer `POST(request)`.
 */

const escape = (value) =>
  String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

async function handler(request) {
  if (request.method !== "POST") return new Response("Method not allowed", { status: 405 });

  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Ongeldige aanvraag" }, { status: 400 });
  }

  const { name, company, email, phone, role, subject, message, privacy } = data;
  if (!name || !email || !phone || !message || privacy !== true) {
    return Response.json({ ok: false, error: "Verplichte velden ontbreken" }, { status: 422 });
  }

  // Cloudflare Turnstile: token controleren voordat er iets verstuurd wordt
  if (process.env.TURNSTILE_SECRET_KEY) {
    const token = data["cf-turnstile-response"];
    if (!token) return Response.json({ ok: false, error: "Beveiligingscheck ontbreekt" }, { status: 403 });
    const verify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
        remoteip: request.headers.get("x-nf-client-connection-ip") ?? "",
      }),
    });
    const outcome = await verify.json();
    if (!outcome.success || (outcome.action && outcome.action !== "contact")) {
      return Response.json({ ok: false, error: "Beveiligingscheck mislukt" }, { status: 403 });
    }
  }

  const html = `
    <h2>Nieuw bericht via tdt-ict.com</h2>
    <p><strong>Naam:</strong> ${escape(name)}<br>
    <strong>Bedrijf:</strong> ${escape(company) || "–"}<br>
    <strong>E-mail:</strong> ${escape(email)}<br>
    <strong>Telefoon:</strong> ${escape(phone)}<br>
    <strong>Ik ben:</strong> ${escape(role)}<br>
    <strong>Onderwerp:</strong> ${escape(subject)}</p>
    <p>${escape(message).replace(/\n/g, "<br>")}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM,
      to: process.env.CONTACT_TO,
      reply_to: email,
      subject: `Nieuw bericht via tdt-ict.com: ${subject}`,
      html,
    }),
  });

  if (!res.ok) return Response.json({ ok: false }, { status: 502 });
  return Response.json({ ok: true });
}

export default handler;
