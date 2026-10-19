# tdt-ict.com

De website van **TDT-ICT**, gebouwd met Next.js (App Router, statische export), React, TypeScript, Tailwind CSS v4, shadcn/ui (Radix), lucide-react en Framer Motion.

- Volledig statisch: `npm run build` levert een map `out/` op die op elke host draait (Vercel, Netlify, Apache/Nginx).
- Geen tracking-cookies en dus geen cookiebanner nodig. Er is ruimte voor privacyvriendelijke analytics (Plausible of Umami).
- Alle content staat in **één bestand**: `src/content/site.ts`.

## Snel starten

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # statische export naar ./out
npm start          # bekijk ./out lokaal
npm run lint
npm run typecheck
npm run placeholders   # toon alle [PLACEHOLDER: ...] die nog ingevuld moeten worden
```

Benodigd: Node.js 20 of hoger (getest met Node 22).

## Content aanpassen

| Wat | Waar |
| --- | --- |
| Bedrijfsgegevens, contact, KvK, werkgebied | `company` in `src/content/site.ts` |
| Cijfers (websites, uptime, 24 uur, 24/7) | `stats` in `src/content/site.ts`: één bron voor de hele site |
| Diensten en dienstpagina's | `services` in `src/content/site.ts` (één object per pagina `/diensten/<slug>/`) |
| Doelgroepen (`/zakelijk`, `/verenigingen`, `/particulier`) | `audiences` in `src/content/site.ts` |
| Homepage-teksten en FAQ | `home` in `src/content/site.ts` |
| Team (naam, rol, bio, foto) | `team` in `src/content/site.ts` |
| Reviews | `reviews` in `src/content/site.ts`. **Alleen echte Google-reviews.** Zolang de lijst leeg is, staan er placeholders. |
| Over ons, support, contact | `about`, `support`, `contactPage` in `src/content/site.ts` |
| Navigatie en footerlinks | `navigation` in `src/content/site.ts` |
| Juridische teksten | `src/content/legal.ts` |
| Partnerlogo's | `public/partners/` + `partners` in `src/content/site.ts` (incl. weergavehoogte per logo) |
| Logo en favicons | `public/logo.webp` (licht), `public/logo-light.webp` (op navy), `favicon.ico`, `icon-192.png`, `apple-touch-icon.png` |

Iconen kies je met een naam uit `src/components/icon.tsx` (bijv. `"cloud"`, `"shield"`, `"wifi"`). Een nieuw icoon voeg je daar toe vanuit [lucide.dev](https://lucide.dev/icons).

Een **nieuwe dienst** voeg je toe als extra object in `services`. De pagina, het megamenu, de footer, de bento-grid, de sitemap en het formulier pakken hem automatisch op.

### Placeholders

Alles wat nog ingevuld of bevestigd moet worden, is gemarkeerd met `[PLACEHOLDER: ...]`. Een overzicht krijg je met `npm run placeholders`. De belangrijkste:

- **Logo als SVG**: het logo staat er nu in als WebP/PNG. Met een SVG-versie wordt het scherper en kleiner (`src/components/logo.tsx`)
- **Teambio's**: korte persoonlijke tekst per teamlid (`bio` bij `team`). Nieuwe teamfoto's: vierkant, WebP, 800×800 px in `public/team/`
- **Reviews**: echte Google-reviews in `reviews`, en `googleReviewsUrl`
- **Juridische teksten**: bestaande teksten overnemen in `src/content/legal.ts` (de oude site was tijdens de bouw niet bereikbaar)
- **Cijfers**: aantal websites (nu 60+) en werkgebied bevestigen
- **FAQ-antwoorden en prijzen**: waar het antwoord niet in de briefing stond
- **Kantoortijden, WhatsApp, remote-supporttool**
- **Ubiquiti-logo**: Microsoft, KPN, Fortinet en Alta Labs zijn de officiële logo's; Ubiquiti is nog een tijdelijke versie
- **OG-afbeelding**: `public/og-image.png` (1200×630) is gegenereerd met het logo en de hero-tekst; vervang hem gerust door een eigen ontwerp

Placeholders in FAQ-antwoorden worden automatisch uit de structured data (FAQPage) gefilterd, maar zijn op de pagina wel zichtbaar. Zo vergeet je ze niet.

## Contactformulier koppelen

Het formulier (`src/components/contact-form.tsx`) valideert in de browser en stuurt de gegevens als JSON naar het endpoint in `NEXT_PUBLIC_FORM_ENDPOINT`. Zonder endpoint toont het formulier een nette foutmelding met de directe contactgegevens. Er zit een honeypot-veld tegen spam in.

Payload:

```json
{ "name": "", "company": "", "email": "", "phone": "", "role": "zakelijk|vereniging|particulier",
  "subject": "adviesgesprek|online-werkplek|...", "message": "", "privacy": true, "_subject": "..." }
```

**Optie 1: Formspree (snelst)**
1. Maak een formulier aan op formspree.io.
2. Zet `NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/<jouw-id>` (lokaal in `.env.local`, of als environment variable bij je host).
3. Opnieuw builden.

**Optie 2: eigen serverless functie met Resend**
Zie `examples/netlify-function-contact.mjs`. Zet de functie in `netlify/functions/contact.mjs`, stel `RESEND_API_KEY` in en gebruik `NEXT_PUBLIC_FORM_ENDPOINT=/.netlify/functions/contact`. Voor Vercel werkt dezelfde code als Vercel Function.

Het onderwerp is voor te selecteren via de URL, bijvoorbeeld `/contact/?onderwerp=netwerk#formulier`. Alle CTA's op de dienstpagina's doen dat al.

## Spambeveiliging: Cloudflare Turnstile

Het contactformulier kan Cloudflare Turnstile gebruiken, een privacyvriendelijk alternatief voor reCAPTCHA zonder tracking-cookies. Naast Turnstile zit er altijd een honeypot-veld in het formulier.

1. Maak in het Cloudflare-dashboard onder **Turnstile** een widget aan voor `tdt-ict.com`. Je krijgt een **site key** (publiek) en een **secret key** (geheim).
2. Zet bij de site: `NEXT_PUBLIC_TURNSTILE_SITE_KEY=<site key>` en build opnieuw. Het formulier toont dan de check en stuurt het token mee als `cf-turnstile-response`.
3. **Controleer het token aan de serverkant.** Zonder deze stap houdt Turnstile niets tegen. In `examples/netlify-function-contact.mjs` gebeurt dat al: zet bij de functie `TURNSTILE_SECRET_KEY=<secret key>`. De functie weigert dan elk bericht zonder geldig token.
   - Gebruik je Formspree in plaats van een eigen functie, controleer dan of je Formspree-abonnement Turnstile-tokens verifieert. Anders werkt de check alleen schijnbaar.
4. Zet de secret key nooit in een `NEXT_PUBLIC_`-variabele: alles met dat voorvoegsel komt in de JavaScript van de site terecht.

Testen kan met de testsleutels van Cloudflare: site key `1x00000000000000000000AA` en secret `1x0000000000000000000000000000000AA` (slaagt altijd).

## Analytics (optioneel, zonder cookies)

Zet één van deze variabelen en build opnieuw:

- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=tdt-ict.com`
- `NEXT_PUBLIC_UMAMI_WEBSITE_ID=<id>` (en eventueel `NEXT_PUBLIC_UMAMI_SRC`)

Vermeld het daarna in het privacybeleid.

## Deployen

Zet bij je host minstens `NEXT_PUBLIC_SITE_URL=https://tdt-ict.com`. Die waarde wordt gebruikt voor canonical-URL's, de sitemap en Open Graph.

**Vercel**: importeer de repository. Framework: Next.js; output wordt automatisch `out/`. `vercel.json` regelt de trailing slashes, redirects en security-headers.

**Netlify**: importeer de repository. `netlify.toml` stelt `npm run build` en de publish-map `out` in. Redirects staan in `public/_redirects`.

**Eigen webserver**: upload de inhoud van `out/`. Zorg dat `/pad/` naar `/pad/index.html` verwijst (standaard bij Apache en Nginx).

### URL's en redirects

De bestaande URL's blijven gelijk (met trailing slash): `/over-ons/`, `/contact/`, `/voorwaarden/`, `/acceptable-use-policy-aup/` en `/privacy-policy/`. 301-redirects voor oude of foutieve URL's (zoals de kapotte link `/contac`) staan in `public/_redirects` (Netlify) en `vercel.json` (Vercel). Voeg daar eventuele andere oude WordPress-URL's aan toe.

## SEO en structured data

- Unieke title en description per pagina (`seo` in het contentbestand), canonical, Open Graph en `lang="nl"`
- `sitemap.xml` en `robots.txt` worden bij de build gegenereerd (`src/app/sitemap.ts`, `src/app/robots.ts`)
- JSON-LD: `ProfessionalService`/`LocalBusiness` (adres, telefoon, KvK) op elke pagina, `FAQPage` op pagina's met een FAQ, `BreadcrumbList` op subpagina's en `Service` op dienstpagina's (`src/lib/seo.ts`)

## Toegankelijkheid en performance

- Getest met axe-core (WCAG 2.2 AA + best practices): geen meldingen op alle pagina's, op 375 en 1280 px
- Contrast: het merkoranje `#E94E19` haalt met witte tekst geen AA (3,77:1). Voor knoppen en kleine tekst gebruiken we `accent-strong` `#C93F12` (5,0:1), op navy `accent-soft` `#F2703F` (5,0:1). Het merkoranje zelf blijft voor iconen, lijnen en accenten.
- Skip-link, zichtbare focus-states, één H1 per pagina, toetsenbordbediening van megamenu, mobiel menu en FAQ
- Animaties respecteren `prefers-reduced-motion`; de inhoud is ook zonder JavaScript zichtbaar
- Lighthouse (lokaal gemeten): desktop 100 op alle vier de categorieën. Mobiel scoorde 100 op toegankelijkheid, best practices en SEO, en 92 tot 98 op performance. Die laatste meting was op een trage testmachine en schommelde flink; controleer na livegang met PageSpeed Insights.
- Inter (variabel) is self-hosted via `next/font/local`. Er worden geen externe fonts of scripts geladen, behalve analytics als je die aanzet en de kaart (pas na een klik).

## Projectstructuur

```
src/
  app/                 pagina's (App Router), layout, sitemap, robots, globals.css (design tokens)
  components/
    layout/            topbalk, header + megamenu, mobiel menu, belbalk, footer
    sections/          herbruikbare secties (hero, bento, FAQ, CTA-band, stappen, team, ...)
    ui/                shadcn/ui-componenten (button, accordion, sheet, navigation-menu, input)
    motion/            scroll-reveal en tellers (Framer Motion)
    visuals/           netwerkmotief en dashboard-mockup
  content/             site.ts (alle content) en legal.ts
  lib/                 SEO-helpers, formulierlogica, utils
public/                logo, favicon, OG-afbeelding, partnerlogo's, _redirects
```
