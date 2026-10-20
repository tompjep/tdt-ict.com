/**
 * ============================================================================
 *  TDT-ICT – centraal contentbestand
 * ============================================================================
 *  Alle teksten, diensten, doelgroepen, teamleden, cijfers en contactgegevens
 *  staan hier. Pas dit bestand aan; componenten hoef je niet aan te raken.
 *
 *  - Alles wat nog ingevuld of bevestigd moet worden, is gemarkeerd met
 *    [PLACEHOLDER: ...]. Zoek ze op met:  npm run placeholders
 *  - Aanspreekvorm: overal je/jij.
 *  - Iconen: gebruik een naam uit `IconName` (zie src/components/icon.tsx).
 * ============================================================================
 */

import type { IconName } from "@/components/icon";

/* ----------------------------------------------------------------------------
 * Types
 * ------------------------------------------------------------------------- */

export type Faq = { question: string; answer: string };
export type Feature = { icon: IconName; title: string; text: string };
export type Step = { title: string; text: string };
export type PartnerId = "microsoft" | "kpn" | "fortinet" | "ubiquiti" | "alta-labs";

export type Package = {
  name: string;
  description: string;
  price: string;
  priceNote: string;
  features: string[];
  highlighted?: boolean;
};

export type Service = {
  slug: string;
  title: string;
  /** Korte naam voor menu's en tegels */
  shortTitle: string;
  icon: IconName;
  /** Eén zin voor tegels en overzichten */
  summary: string;
  /** Korte omschrijving in het megamenu */
  menuDescription: string;
  seo: { title: string; description: string };
  hero: { title: string; promise: string };
  problems: string[];
  solution: { title: string; paragraphs: string[] };
  features: Feature[];
  steps: Step[];
  partners: PartnerId[];
  faqs: Faq[];
  packages?: { title: string; intro: string; items: Package[] };
  /** Optionele afbeelding, getoond in de grote tegel op de homepage. width/height = grootste bestand */
  image?: { src: string; srcSet?: string; width: number; height: number; alt: string };
};

export type Audience = {
  slug: "zakelijk" | "verenigingen" | "particulier";
  href: string;
  title: string;
  menuDescription: string;
  icon: IconName;
  /** Drie bullets voor de kaart op de homepage */
  bullets: [string, string, string];
  seo: { title: string; description: string };
  hero: { eyebrow: string; title: string; intro: string };
  needs: { title: string; items: string[] };
  highlights: { title: string; intro: string; items: Feature[] };
  serviceSlugs: string[];
  faqs: Faq[];
  cta: { title: string; text: string };
};

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  bio: string;
  /** Pad in /public: vierkante foto, WebP, 800×800 px (bijv. "/team/thijs-geene.webp"). null = placeholder met initialen */
  photo: string | null;
  photoAlt: string;
};

export type Review = {
  author: string;
  /** Bijv. "Eigenaar, Bedrijfsnaam" – alleen met toestemming */
  context?: string;
  /** Aantal sterren, alleen invullen als de klant die zelf gaf (bijv. op Google) */
  rating?: 1 | 2 | 3 | 4 | 5;
  text: string;
  date?: string;
};

/* ----------------------------------------------------------------------------
 * Bedrijf & contact
 * ------------------------------------------------------------------------- */

export const company = {
  name: "TDT-ICT",
  legalName: "TDT-ICT",
  tagline: "Jouw cloud IT-partner",
  promise: "Slim, veilig & altijd online",
  mission: "Samen zoeken wij naar jouw digitale oplossing",
  description:
    "TDT-ICT uit Aarle-Rixtel is jouw IT-partner voor cloud, netwerk en web. Eén aanspreekpunt, korte lijnen en een vaste maandprijs voor bedrijven, stichtingen, verenigingen en particulieren.",
  foundedYear: 2021,
  founders: ["Thijs Geene", "Tom Ruis"],
  kvk: "83227660",
  /** Live-URL, ook te zetten via NEXT_PUBLIC_SITE_URL */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tdt-ict.com",
  contact: {
    phoneDisplay: "+31 6 36 32 04 68",
    phoneHref: "tel:+31636320468",
    email: "info@tdt-ict.com",
    emailHref: "mailto:info@tdt-ict.com",
    /** [PLACEHOLDER: WhatsApp-nummer bevestigen of op null zetten] */
    whatsappHref: null as string | null,
    address: {
      street: "Broekelingstraat 28",
      postalCode: "5735 HC",
      city: "Aarle-Rixtel",
      region: "Noord-Brabant",
      country: "NL",
    },
    /** [PLACEHOLDER: kantoortijden bevestigen] */
    openingHours: "Maandag t/m vrijdag, [PLACEHOLDER: kantoortijden]",
    /** Gebruikt in structured data (schema.org). [PLACEHOLDER: bevestigen] */
    openingHoursSpec: [] as { days: string[]; opens: string; closes: string }[],
  },
  /** [PLACEHOLDER: werkgebied bevestigen] */
  serviceArea: ["Laarbeek", "Aarle-Rixtel", "Helmond", "Eindhoven"],
  serviceAreaLabel: "Laarbeek, Helmond, Eindhoven en omgeving",
  /** [PLACEHOLDER: links naar social media / Google Bedrijfsprofiel] */
  sameAs: [] as string[],
  /** [PLACEHOLDER: link naar Google-reviews] */
  googleReviewsUrl: null as string | null,
  /** Klantenportaal voor bestaande klanten */
  portal: {
    label: "Klantenportaal",
    url: "https://orders.tdt-ict.com",
    text: "Al klant? Log in op het klantenportaal.",
  },
} as const;

/* ----------------------------------------------------------------------------
 * Cijfers – één bron voor de hele site (geen tegenstrijdige waarden meer)
 * ------------------------------------------------------------------------- */

export const stats = {
  /** [PLACEHOLDER: aantal websites bevestigen] */
  websites: { value: 60, suffix: "+", label: "websites gebouwd en actief" },
  uptime: { value: 99, suffix: "%+", label: "uptime" },
  responseHours: 24,
  founded: { value: company.foundedYear, label: "opgericht" },
  support: { value: "24/7", label: "calamiteitenlijn voor vaste klanten" },
} as const;

export const websitesLabel = `${stats.websites.value}${stats.websites.suffix}`;

/* ----------------------------------------------------------------------------
 * Partners / merken
 * ------------------------------------------------------------------------- */

/**
 * Logo's: `width`/`height` zijn de echte afmetingen van het bestand, `displayHeight` is de
 * weergavehoogte in px. Die verschilt per logo, zodat ze optisch even groot ogen.
 */
export type Partner = {
  name: string;
  logo: { src: string; width: number; height: number; displayHeight: number };
  description: string;
};

export const partners: Record<PartnerId, Partner> = {
  microsoft: {
    name: "Microsoft",
    logo: { src: "/partners/microsoft.webp", width: 284, height: 62, displayHeight: 26 },
    description: "Microsoft 365: mail, Teams, OneDrive en SharePoint.",
  },
  kpn: {
    name: "KPN",
    logo: { src: "/partners/kpn.webp", width: 218, height: 84, displayHeight: 34 },
    description: "Zakelijke internetverbindingen.",
  },
  fortinet: {
    name: "Fortinet",
    logo: { src: "/partners/fortinet.webp", width: 300, height: 35, displayHeight: 17 },
    description: "Firewalls en netwerkbeveiliging.",
  },
  ubiquiti: {
    name: "Ubiquiti (UniFi)",
    // [PLACEHOLDER: officieel Ubiquiti/UniFi-logo aanleveren]
    logo: { src: "/partners/ubiquiti.svg", width: 150, height: 32, displayHeight: 26 },
    description: "Wifi, switches en netwerkbeheer met UniFi.",
  },
  "alta-labs": {
    name: "Alta Labs",
    logo: { src: "/partners/alta-labs.webp", width: 296, height: 86, displayHeight: 32 },
    description: "Wifi- en netwerkapparatuur.",
  },
};

export const partnerOrder: PartnerId[] = ["microsoft", "kpn", "fortinet", "ubiquiti", "alta-labs"];

/* ----------------------------------------------------------------------------
 * Team
 * ------------------------------------------------------------------------- */

export const team: TeamMember[] = [
  {
    name: "Thijs Geene",
    role: "Directeur",
    initials: "TG",
    bio: "Thijs richtte TDT-ICT in 2021 op. [PLACEHOLDER: korte persoonlijke bio, 1–2 zinnen]",
    photo: "/team/thijs-geene.webp",
    photoAlt: "Portret van Thijs Geene, directeur van TDT-ICT",
  },
  {
    name: "Tom Ruis",
    role: "Cloud- en netwerkbeheerder",
    initials: "TR",
    bio: "Tom is mede-oprichter en houdt de netwerken van klanten stabiel en veilig. [PLACEHOLDER: korte persoonlijke bio]",
    photo: "/team/tom-ruis.webp",
    photoAlt: "Portret van Tom Ruis, cloud- en netwerkbeheerder bij TDT-ICT",
  },
  {
    name: "Daan Bruinsma",
    role: "Systeembeheerder",
    initials: "DB",
    bio: "Daan zorgt dat werkplekken, accounts en systemen gewoon werken. [PLACEHOLDER: korte persoonlijke bio]",
    photo: "/team/daan-bruinsma.webp",
    photoAlt: "Portret van Daan Bruinsma, systeembeheerder bij TDT-ICT",
  },
];

/* ----------------------------------------------------------------------------
 * Reviews
 * Verzin geen reviews. Voeg hier alleen echte Google-reviews toe (met toestemming).
 * Zolang de lijst leeg is, toont de site duidelijke placeholders.
 * ------------------------------------------------------------------------- */

export const reviews: Review[] = [
  {
    author: "Kouros",
    context: "Celtx Logistics",
    // Letterlijk overgenomen. [PLACEHOLDER: aantal sterren toevoegen als de review van Google komt]
    text: "Een jaar geleden een samenwerking aangegaan met TDT-ICT. Diverse abbonementen genomen waarbij het vrijwel snel was geregeld en er werd/wordt (tot op heden) duidelijk gecommuniceerd! Is er een probleem staan zij direct voor je klaar en denken meteen in oplossingen. Klasse werk dus!",
  },
  // [PLACEHOLDER: meer echte reviews toevoegen]
  // { author: "Voornaam A.", context: "Eigenaar, Bedrijf", rating: 5, text: "…", date: "2026-01" },
];

/* ----------------------------------------------------------------------------
 * CTA's
 * ------------------------------------------------------------------------- */

export const cta = {
  primary: { label: "Plan een gratis adviesgesprek", short: "Gratis adviesgesprek", href: "/contact/?onderwerp=adviesgesprek#formulier" },
  services: { label: "Bekijk onze diensten", href: "/diensten/" },
  band: {
    title: "Benieuwd wat we voor jouw bedrijf kunnen doen?",
    text: "Plan een gratis en vrijblijvend adviesgesprek. We kijken samen naar je huidige situatie en wat er beter, veiliger of eenvoudiger kan.",
  },
} as const;

/* ----------------------------------------------------------------------------
 * Diensten
 * ------------------------------------------------------------------------- */

export const services: Service[] = [
  {
    slug: "online-werkplek",
    title: "Online werkplek & Microsoft 365",
    shortTitle: "Online werkplek",
    icon: "cloud",
    summary: "Werk overal veilig met Microsoft 365: mail, Teams, OneDrive en SharePoint, inclusief back-up en beheer.",
    menuDescription: "Microsoft 365, mail, Teams en back-up",
    image: {
      src: "/images/microsoft-365-apps-1400.webp",
      srcSet: "/images/microsoft-365-apps-800.webp 800w, /images/microsoft-365-apps-1400.webp 1400w",
      width: 1400,
      height: 370,
      alt: "Microsoft 365 met de apps Outlook, Word, Excel, PowerPoint, OneNote, OneDrive, Teams, SharePoint en Clipchamp",
    },
    seo: {
      title: "Online werkplek & Microsoft 365 voor het MKB",
      description:
        "Werk overal veilig met Microsoft 365: zakelijke mail, Teams, OneDrive, SharePoint en back-up. Ingericht en beheerd door TDT-ICT, voor een vaste maandprijs.",
    },
    hero: {
      title: "Online werkplek & Microsoft 365",
      promise: "Werk waar en wanneer je wilt, met veilige toegang tot al je bestanden en een werkplek die gewoon werkt.",
    },
    problems: [
      "Bestanden staan verspreid over laptops, USB-sticks en mailbijlagen.",
      "Thuis of onderweg werken betekent gedoe, of ‘even naar jezelf mailen’.",
      "Je weet niet zeker of er een back-up is van je mail en documenten.",
      "Een nieuwe collega inrichten kost elke keer weer een halve dag.",
      "Licenties en abonnementen zijn een wirwar geworden.",
    ],
    solution: {
      title: "Eén veilige werkplek in de cloud",
      paragraphs: [
        "We richten je online werkplek in op basis van Microsoft 365. Mail, agenda, bestanden en Teams staan veilig in de cloud en zijn bereikbaar vanaf je laptop, telefoon of tablet.",
        "Wij regelen de inrichting, de beveiliging, de licenties en het beheer. Jij en je collega’s kunnen gewoon aan het werk, op kantoor, thuis of onderweg.",
      ],
    },
    features: [
      { icon: "mail", title: "Zakelijke mail & agenda", text: "Professionele mail op je eigen domeinnaam, met gedeelde agenda’s en contacten." },
      { icon: "messages", title: "Microsoft Teams", text: "Chatten, bellen en vergaderen met je team en met klanten, vanaf elk apparaat." },
      { icon: "folder", title: "OneDrive & SharePoint", text: "Bestanden centraal opslaan, delen en tegelijk bewerken, met versiebeheer." },
      { icon: "database", title: "Back-up", text: "Een aparte back-up van je mail en bestanden, zodat je niets kwijtraakt." },
      { icon: "lock", title: "Veilige toegang", text: "Inloggen met multi-factor authenticatie en duidelijke rechten per gebruiker." },
      { icon: "badge", title: "Licentiebeheer", text: "De juiste licenties per gebruiker, zonder te veel te betalen." },
      { icon: "transfer", title: "Overstap & migratie", text: "We zetten je bestaande mail en bestanden zorgvuldig over." },
      { icon: "lifebuoy", title: "Beheer & support", text: "Eén aanspreekpunt voor vragen, nieuwe collega’s en wijzigingen." },
    ],
    steps: [
      { title: "Inventarisatie", text: "We brengen in kaart hoe je nu werkt: accounts, bestanden, apparaten en licenties." },
      { title: "Advies & plan", text: "Je krijgt een helder voorstel met de inrichting, de planning en een vaste maandprijs." },
      { title: "Overstap & inrichting", text: "We richten alles in en zetten je gegevens over, met zo min mogelijk onderbreking." },
      { title: "Beheer & support", text: "We houden alles up-to-date en helpen je collega’s als ze een vraag hebben." },
    ],
    partners: ["microsoft"],
    faqs: [
      {
        question: "Moet ik al Microsoft 365 hebben?",
        answer:
          "Nee. Heb je al Microsoft 365, dan kijken we naar de huidige inrichting en nemen we het beheer over. Heb je het nog niet, dan zoeken we samen uit welke licenties bij jouw bedrijf passen.",
      },
      {
        question: "Heb ik een aparte back-up nodig als alles in de cloud staat?",
        answer:
          "Ja, dat raden we aan. Microsoft zorgt dat de dienst beschikbaar blijft, maar jij blijft verantwoordelijk voor je eigen data. Verwijdert iemand per ongeluk iets, of worden bestanden versleuteld door ransomware, dan wil je kunnen terugvallen op een aparte back-up. Die nemen we mee in de inrichting.",
      },
      {
        question: "Kunnen jullie mijn bestaande mail en bestanden overzetten?",
        answer:
          "We zetten je bestaande mailboxen en bestanden over naar Microsoft 365 en plannen de overstap zo dat je er zo min mogelijk last van hebt. [PLACEHOLDER: bevestigen vanaf welke systemen/providers jullie migreren]",
      },
      {
        question: "Wat kost een online werkplek?",
        answer:
          "Je betaalt een vaste maandprijs per gebruiker, afhankelijk van de licenties en het beheer dat je nodig hebt. [PLACEHOLDER: indicatieprijs, bijv. vanaf € .. per gebruiker per maand]",
      },
    ],
  },
  {
    slug: "netwerk",
    title: "Netwerk & wifi",
    shortTitle: "Netwerk & wifi",
    icon: "network",
    summary: "Een stabiel en veilig netwerk met wifi die overal in je pand goed werkt, beheerd op afstand.",
    menuDescription: "Wifi, firewall en netwerkbeheer",
    seo: {
      title: "Netwerkbeheer & zakelijke wifi",
      description:
        "Een stabiel, veilig bedrijfsnetwerk met dekkende wifi, firewall en segmentatie. Ontworpen en op afstand beheerd door TDT-ICT uit Laarbeek.",
    },
    hero: {
      title: "Netwerk & wifi",
      promise: "Een stabiel en veilig netwerk op maat, met wifi die overal in je pand gewoon werkt.",
    },
    problems: [
      "De wifi valt weg in de vergaderruimte, het magazijn of de kantine.",
      "Gasten en medewerkers zitten op hetzelfde netwerk als je printers en systemen.",
      "Niemand weet nog precies hoe het netwerk ooit is aangelegd.",
      "Bij een storing moet er eerst iemand langskomen om te kijken wat er mis is.",
    ],
    solution: {
      title: "Een netwerk dat je niet merkt, omdat het gewoon werkt",
      paragraphs: [
        "We ontwerpen je netwerk op basis van je pand en hoe je werkt. Met goed geplaatste access points, een degelijke firewall en een slimme indeling van het netwerk.",
        "Omdat we je netwerk centraal en op afstand beheren, zien we problemen snel en lossen we veel op zonder dat er iemand langs hoeft te komen.",
      ],
    },
    features: [
      { icon: "wifi", title: "Dekkende wifi", text: "Access points op de juiste plekken, voor goede dekking in je hele pand." },
      { icon: "shield", title: "Firewall", text: "Een zakelijke firewall die ongewenst verkeer tegenhoudt." },
      { icon: "layers", title: "Segmentatie", text: "Aparte netwerken voor medewerkers, gasten en apparaten zoals printers en camera’s." },
      { icon: "users", title: "Gastenwifi", text: "Gasten online, zonder toegang tot je interne netwerk." },
      { icon: "activity", title: "Monitoring", text: "We houden de status van je netwerk continu in de gaten." },
      { icon: "remote", title: "Beheer op afstand", text: "Instellingen, updates en storingen pakken we vaak op afstand op." },
    ],
    steps: [
      { title: "Opname op locatie", text: "We bekijken je pand, de huidige apparatuur en waar het nu misgaat." },
      { title: "Ontwerp & advies", text: "Je krijgt een netwerkontwerp met een duidelijke offerte." },
      { title: "Installatie", text: "We installeren en configureren alles, en testen de dekking." },
      { title: "Beheer & monitoring", text: "We houden je netwerk up-to-date, veilig en in de gaten." },
    ],
    partners: ["ubiquiti", "alta-labs", "fortinet"],
    faqs: [
      {
        question: "Met welke merken werken jullie?",
        answer:
          "We werken onder meer met Ubiquiti (UniFi), Alta Labs en Fortinet. Die apparatuur kunnen we centraal en op afstand beheren. Per situatie kiezen we wat het beste past bij je pand en je budget.",
      },
      {
        question: "Kunnen jullie ons bestaande netwerk overnemen?",
        answer:
          "We beginnen met een opname van wat er nu staat. Daarna adviseren we wat je kunt houden en wat beter vervangen kan worden. [PLACEHOLDER: antwoord bevestigen]",
      },
      {
        question: "Waarom zou ik mijn netwerk opdelen in segmenten?",
        answer:
          "Door gasten, medewerkers en apparaten zoals printers of camera’s op aparte netwerken te zetten, kan een probleem op het ene deel zich niet zomaar verspreiden naar de rest. Dat maakt je netwerk veiliger en overzichtelijker.",
      },
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    shortTitle: "Cybersecurity",
    icon: "shield",
    summary: "Bescherming van je accounts, apparaten en data met MFA, firewall, updates en continue monitoring.",
    menuDescription: "MFA, monitoring, updates en firewall",
    seo: {
      title: "Cybersecurity voor het MKB",
      description:
        "Bescherm je accounts, apparaten en data met MFA, versleutelde opslag, firewall, updates en continue monitoring. Nuchter advies van TDT-ICT.",
    },
    hero: {
      title: "Cybersecurity",
      promise: "Met een gerust hart werken, omdat je accounts, apparaten en data goed beschermd zijn.",
    },
    problems: [
      "Medewerkers loggen nog in met alleen een wachtwoord.",
      "Je weet niet zeker of alle laptops en systemen up-to-date zijn.",
      "Een phishingmail is zo aangeklikt.",
      "Als er iets misgaat, weet niemand wat de eerste stap is.",
    ],
    solution: {
      title: "Degelijke basis, standaard goed ingesteld",
      paragraphs: [
        "Goede beveiliging begint bij de basis: sterke aanmeldmethoden, up-to-date systemen, een goede firewall en een back-up waarop je kunt terugvallen.",
        "We zorgen dat die maatregelen standaard goed staan en houden je omgeving continu in de gaten. Zonder ingewikkelde verhalen, met heldere afspraken.",
      ],
    },
    features: [
      { icon: "key", title: "Multi-factor authenticatie", text: "Inloggen met een extra stap, zodat een gelekt wachtwoord niet genoeg is." },
      { icon: "lock", title: "Versleutelde opslag", text: "Je data wordt versleuteld opgeslagen en verstuurd." },
      { icon: "shield", title: "Firewall", text: "Netwerkbeveiliging die ongewenst verkeer buiten de deur houdt." },
      { icon: "refresh", title: "Updates & patches", text: "Systemen en apparaten blijven up-to-date, zodat bekende lekken gedicht zijn." },
      { icon: "activity", title: "Continue monitoring", text: "We houden je systemen in de gaten en grijpen in als er iets afwijkt." },
      { icon: "database", title: "Back-up & herstel", text: "Een back-up waarmee je terug kunt als het toch misgaat." },
    ],
    steps: [
      { title: "Check", text: "We kijken waar je nu staat: accounts, apparaten, netwerk en back-ups." },
      { title: "Advies", text: "Je krijgt een overzicht van wat goed is en wat beter kan, in gewone taal." },
      { title: "Maatregelen", text: "We voeren de afgesproken maatregelen door, stap voor stap." },
      { title: "Bewaken", text: "We blijven monitoren en houden alles up-to-date." },
    ],
    partners: ["fortinet", "microsoft"],
    faqs: [
      {
        question: "Is mijn bedrijf niet te klein om interessant te zijn voor hackers?",
        answer:
          "Veel aanvallen zijn geautomatiseerd. Ze zoeken niet naar een specifiek bedrijf, maar naar zwakke plekken, zoals een account zonder MFA of een systeem zonder updates. Met een paar goede basismaatregelen verklein je dat risico flink.",
      },
      {
        question: "Wat is MFA en is dat lastig in gebruik?",
        answer:
          "Bij multi-factor authenticatie log je in met je wachtwoord én een tweede stap, bijvoorbeeld een melding in een app op je telefoon. Dat kost een paar seconden extra, maar een gestolen wachtwoord alleen is dan niet meer genoeg om in te loggen.",
      },
      {
        question: "Wat doe ik als ik denk dat er iets mis is?",
        answer:
          "Neem direct contact op. Vaste klanten kunnen bij een urgent probleem 24/7 de calamiteitenlijn bellen. Klik niet verder, zet niets uit en verwijder niets: dan kunnen we het beste zien wat er is gebeurd.",
      },
    ],
  },
  {
    slug: "voip",
    title: "VoIP-telefonie",
    shortTitle: "VoIP-telefonie",
    icon: "phone",
    summary: "Bellen via internet met je vaste nummer, op kantoor, thuis en onderweg.",
    menuDescription: "Bellen via internet, overal bereikbaar",
    seo: {
      title: "Zakelijke VoIP-telefonie",
      description:
        "Bellen via internet met je vaste bedrijfsnummer, op kantoor, thuis en onderweg. Met keuzemenu, doorschakelen en voicemail. Geregeld door TDT-ICT.",
    },
    hero: {
      title: "VoIP-telefonie",
      promise: "Flexibel bellen via internet, met je vaste nummer op kantoor, thuis en onderweg.",
    },
    problems: [
      "Je bent alleen goed bereikbaar als je achter je bureau zit.",
      "Een oude telefooncentrale is duur en lastig aan te passen.",
      "Doorschakelen bij afwezigheid of drukte is een gedoe.",
      "Klanten bellen het mobiele nummer van medewerkers in plaats van het bedrijfsnummer.",
    ],
    solution: {
      title: "Je bedrijfsnummer, overal bij de hand",
      paragraphs: [
        "Met VoIP bel je via internet. Je vaste bedrijfsnummer werkt op een toestel op kantoor, maar ook in een app op je telefoon of laptop.",
        "Keuzemenu’s, openingstijden en doorschakelingen stellen we met je af en passen we eenvoudig aan als er iets verandert.",
      ],
    },
    features: [
      { icon: "smartphone", title: "Overal bereikbaar", text: "Bel met je vaste nummer via een toestel, app of laptop." },
      { icon: "list", title: "Keuzemenu & wachtrij", text: "Bellers komen direct bij de juiste persoon of afdeling." },
      { icon: "clock", title: "Openingstijden", text: "Buiten kantoortijd automatisch een melding of doorschakeling." },
      { icon: "forward", title: "Doorschakelen", text: "Bij afwezigheid of drukte schakel je eenvoudig door naar een collega." },
      { icon: "voicemail", title: "Voicemail naar mail", text: "Ingesproken berichten ontvang je ook in je mailbox." },
      { icon: "settings", title: "Beheer", text: "Wijzigingen in je telefonie regelen wij voor je." },
    ],
    steps: [
      { title: "Wensen", text: "We bespreken hoe je bereikbaar wilt zijn en wie welke gesprekken aanneemt." },
      { title: "Voorstel", text: "Je krijgt een voorstel met toestellen, apps en een vaste maandprijs." },
      { title: "Overstap", text: "We richten alles in en regelen de overstap van je nummers." },
      { title: "Beheer", text: "Wijzigingen en vragen lopen via ons, je vaste aanspreekpunt." },
    ],
    partners: [],
    faqs: [
      {
        question: "Kan ik mijn huidige telefoonnummer houden?",
        answer:
          "In de meeste gevallen kun je je huidige nummers meenemen. We regelen de overstap voor je. [PLACEHOLDER: bevestigen]",
      },
      {
        question: "Wat heb ik nodig om via internet te bellen?",
        answer:
          "Een stabiele internetverbinding en een toestel, app of headset. We adviseren wat bij je situatie past. [PLACEHOLDER: welke toestellen/platform jullie gebruiken]",
      },
    ],
  },
  {
    slug: "internet",
    title: "Internetverbindingen",
    shortTitle: "Internet",
    icon: "router",
    summary: "Een snelle, betrouwbare zakelijke internetverbinding, van advies en aanvraag tot installatie.",
    menuDescription: "Zakelijk internet via KPN",
    seo: {
      title: "Zakelijke internetverbindingen",
      description:
        "Snel en betrouwbaar zakelijk internet, zonder zelf met providers te bellen. TDT-ICT regelt advies, aanvraag en installatie, en helpt bij storingen.",
    },
    hero: {
      title: "Internetverbindingen",
      promise: "Een snelle en betrouwbare zakelijke verbinding, zonder dat je zelf met providers hoeft te bellen.",
    },
    problems: [
      "Je verbinding is traag zodra iedereen tegelijk aan het werk is.",
      "Bij een storing hang je zelf in de wacht bij de provider.",
      "Je weet niet welk abonnement echt bij je bedrijf past.",
      "Alles hangt af van één verbinding.",
    ],
    solution: {
      title: "Wij regelen je verbinding, van aanvraag tot storing",
      paragraphs: [
        "We kijken naar het aantal gebruikers, hoe je werkt en wat je in de toekomst nodig hebt. Op basis daarvan adviseren we een verbinding die past.",
        "Wij regelen de aanvraag en installatie en sluiten de verbinding aan op je netwerk. Bij een storing schakelen wij met de provider, zodat jij dat niet hoeft te doen.",
      ],
    },
    features: [
      { icon: "gauge", title: "Advies op maat", text: "Een verbinding die past bij je gebruikers en je manier van werken." },
      { icon: "clipboard", title: "Aanvraag & installatie", text: "Wij regelen de aanvraag, planning en installatie." },
      { icon: "headset", title: "Eén aanspreekpunt", text: "Bij een storing schakelen wij met de provider." },
      { icon: "network", title: "Aangesloten op je netwerk", text: "Je verbinding, netwerk, wifi en telefonie sluiten naadloos op elkaar aan." },
      { icon: "split", title: "Uitwijkmogelijkheid", text: "Advies over een back-upverbinding, zodat je niet stilvalt als de hoofdverbinding uitvalt." },
    ],
    steps: [
      { title: "Behoefte", text: "We bekijken wat je nodig hebt en wat er op je adres mogelijk is." },
      { title: "Advies", text: "Je krijgt een helder advies met de kosten per maand." },
      { title: "Aanvraag & installatie", text: "Wij regelen de aanvraag en sluiten alles aan." },
      { title: "Support", text: "Bij vragen of storingen ben je bij ons aan het juiste adres." },
    ],
    partners: ["kpn"],
    faqs: [
      {
        question: "Welke snelheid heb ik nodig?",
        answer:
          "Dat hangt af van het aantal gebruikers en wat je doet. Veel videobellen en werken in de cloud vraagt meer dan alleen mailen. We kijken samen naar je situatie en adviseren een verbinding die nu en straks past.",
      },
      {
        question: "Wat als mijn internet uitvalt?",
        answer:
          "Meld het bij ons. Wij schakelen met de provider, zodat jij niet in de wacht hoeft. Vaste klanten kunnen bij urgente storingen ook buiten kantoortijd de calamiteitenlijn bellen.",
      },
      {
        question: "Moet ik overstappen van provider?",
        answer: "[PLACEHOLDER: antwoord over overstappen/bestaande contracten]",
      },
    ],
  },
  {
    slug: "websites-hosting",
    title: "Websites & WordPress-hosting",
    shortTitle: "Websites & hosting",
    icon: "globe",
    summary: "Ontwerp, bouw, hosting en onderhoud van je website, op snelle en veilige WordPress-hosting.",
    menuDescription: "Ontwerp, bouw, hosting en onderhoud",
    seo: {
      title: "Website laten maken & WordPress-hosting",
      description:
        "Website laten maken, hosten en onderhouden door TDT-ICT. Snelle, veilige WordPress-hosting met updates, back-ups en monitoring. Ook ledenportalen.",
    },
    hero: {
      title: "Websites & WordPress-hosting",
      promise: "Een snelle, veilige website die we voor je ontwerpen, bouwen, hosten én onderhouden.",
    },
    problems: [
      "Je website is traag, verouderd of werkt niet goed op mobiel.",
      "Niemand voert de updates uit, en dat voelt niet veilig.",
      "Je weet niet of er een recente back-up van je website is.",
      "Voor elke kleine wijziging moet je weer iemand zoeken.",
    ],
    solution: {
      title: "Van ontwerp tot onderhoud, alles op één plek",
      paragraphs: [
        "We ontwerpen en bouwen een website die past bij je organisatie: snel, toegankelijk en goed te gebruiken op elk scherm. Je kunt de inhoud daarna eenvoudig zelf aanpassen.",
        "Je website draait op onze WordPress-hosting, gericht op snelheid en betrouwbaarheid. Wij zorgen voor updates, back-ups en monitoring, zodat jij er geen omkijken naar hebt.",
      ],
    },
    features: [
      { icon: "pen", title: "Ontwerp & bouw", text: "Een website op maat, responsive en toegankelijk." },
      { icon: "zap", title: "Snelle WordPress-hosting", text: "Hosting gericht op snelheid en betrouwbaarheid." },
      { icon: "refresh", title: "Updates & beveiliging", text: "WordPress, thema en plug-ins blijven up-to-date." },
      { icon: "database", title: "Back-ups", text: "Regelmatige back-ups, zodat je altijd terug kunt. [PLACEHOLDER: frequentie]" },
      { icon: "activity", title: "Monitoring", text: "We houden in de gaten of je website online en snel is." },
      { icon: "lockKeyhole", title: "Ledenportaal", text: "Een afgeschermd deel voor leden, ideaal voor verenigingen en stichtingen." },
      { icon: "globe", title: "Domeinnaam & SSL", text: "Je domeinnaam en een beveiligde verbinding (https) geregeld." },
      { icon: "search", title: "Goed vindbaar", text: "Een technisch nette basis, zodat Google je website goed kan lezen." },
    ],
    steps: [
      { title: "Kennismaking", text: "We bespreken je doelen, je doelgroep en wat de website moet kunnen." },
      { title: "Ontwerp", text: "Je krijgt een ontwerp om op te reageren voordat we gaan bouwen." },
      { title: "Bouw & feedback", text: "We bouwen de website en stemmen tussentijds met je af." },
      { title: "Live & onderhoud", text: "We zetten de site live en houden hem daarna snel, veilig en up-to-date." },
    ],
    partners: [],
    packages: {
      title: "Een vaste maandprijs, zonder verrassingen",
      intro: "Kies het pakket dat bij je past. Je betaalt een vast bedrag per maand en weet precies waar je aan toe bent.",
      items: [
        {
          name: "Hosting",
          description: "Voor een bestaande WordPress-website.",
          price: "vanaf € [PLACEHOLDER]",
          priceNote: "per maand",
          features: ["Snelle WordPress-hosting", "SSL-certificaat (https)", "Back-ups", "Uptime-monitoring"],
        },
        {
          name: "Hosting & onderhoud",
          description: "Hosting plus onderhoud, zodat je er geen omkijken naar hebt.",
          price: "vanaf € [PLACEHOLDER]",
          priceNote: "per maand",
          features: ["Alles uit Hosting", "Updates van WordPress en plug-ins", "Beveiligingscontrole", "Kleine wijzigingen [PLACEHOLDER: aantal]"],
          highlighted: true,
        },
        {
          name: "Website compleet",
          description: "Ontwerp, bouw, hosting en onderhoud in één.",
          price: "vanaf € [PLACEHOLDER]",
          priceNote: "per maand [PLACEHOLDER: of eenmalig + per maand]",
          features: ["Ontwerp en bouw op maat", "Alles uit Hosting & onderhoud", "Optioneel ledenportaal", "Vast aanspreekpunt"],
        },
      ],
    },
    faqs: [
      {
        question: "Kan ik alleen hosting afnemen voor mijn bestaande website?",
        answer:
          "Ja. Je kunt je bestaande WordPress-website bij ons laten hosten en onderhouden. [PLACEHOLDER: voorwaarden voor het overzetten van een bestaande website]",
      },
      {
        question: "Kan ik de teksten op mijn website zelf aanpassen?",
        answer:
          "Ja. Met WordPress pas je zelf eenvoudig teksten en afbeeldingen aan. We leggen je uit hoe het werkt. Heb je daar liever geen omkijken naar, dan doen wij het voor je.",
      },
      {
        question: "Wat is een ledenportaal?",
        answer:
          "Een afgeschermd deel van je website waar alleen leden na het inloggen bij kunnen. Bijvoorbeeld voor nieuwsbrieven, notulen, documenten of een ledenlijst.",
      },
      {
        question: "Hoe lang duurt het om een website te maken?",
        answer: "[PLACEHOLDER: indicatie doorlooptijd, bijv. ‘gemiddeld .. weken, afhankelijk van de omvang’]",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

/* ----------------------------------------------------------------------------
 * Doelgroepen
 * ------------------------------------------------------------------------- */

export const audiences: Audience[] = [
  {
    slug: "zakelijk",
    href: "/zakelijk/",
    title: "Zakelijk / MKB",
    menuDescription: "Eén IT-partner voor je hele bedrijf",
    icon: "building",
    bullets: ["Eén aanspreekpunt voor al je IT", "Vaste maandprijs, geen verrassingen", "Werkplek, netwerk en security geregeld"],
    seo: {
      title: "IT-beheer MKB in Laarbeek, Helmond & Eindhoven",
      description:
        "IT-beheer voor het MKB: Microsoft 365, netwerk, cybersecurity, VoIP en internet. Eén aanspreekpunt en een vaste maandprijs. TDT-ICT uit Aarle-Rixtel.",
    },
    hero: {
      eyebrow: "Zakelijk / MKB",
      title: "IT voor het MKB, zonder gedoe",
      intro:
        "Je wilt dat je IT gewoon werkt. Wij zorgen voor je werkplek, netwerk, beveiliging, telefonie en internet. Met vaste gezichten, korte lijnen en een vaste maandprijs.",
    },
    needs: {
      title: "Herken je dit?",
      items: [
        "IT is ‘erbij gekomen’ en niemand heeft echt het overzicht.",
        "Voor mail, internet, telefonie en de website heb je allemaal een ander aanspreekpunt.",
        "Bij een storing weet je niet wie je moet bellen.",
        "De IT-kosten zijn elke maand weer anders.",
      ],
    },
    highlights: {
      title: "Wat je van ons kunt verwachten",
      intro: "Eén partner die je bedrijf kent en vooruitdenkt.",
      items: [
        { icon: "user", title: "Eén aanspreekpunt", text: "Vaste gezichten die je situatie kennen. Geen ticketnummer, maar een naam." },
        { icon: "receipt", title: "Vaste maandtarieven", text: "Transparante prijzen, zodat je weet waar je aan toe bent." },
        { icon: "siren", title: "24/7 calamiteitenlijn", text: "Voor vaste klanten, ook buiten kantoortijd." },
        { icon: "timer", title: "Snel opgelost", text: "Urgente problemen streven we binnen 24 uur op te lossen." },
        { icon: "activity", title: "Proactief beheer", text: "Monitoring en updates, zodat we problemen vaak voor zijn." },
        { icon: "layers", title: "Alles onder één dak", text: "Werkplek, netwerk, security, telefonie, internet en web." },
      ],
    },
    serviceSlugs: ["online-werkplek", "netwerk", "cybersecurity", "voip", "internet", "websites-hosting"],
    faqs: [],
    cta: {
      title: "Klaar voor IT waar je niet meer over na hoeft te denken?",
      text: "Plan een gratis adviesgesprek. We brengen je huidige IT in kaart en laten zien wat er beter kan.",
    },
  },
  {
    slug: "verenigingen",
    href: "/verenigingen/",
    title: "Stichtingen & verenigingen",
    menuDescription: "Websites en een afgeschermd ledenportaal",
    icon: "heartHandshake",
    bullets: ["Toegankelijke, goed vindbare website", "Afgeschermd ledenportaal", "Hosting en onderhoud uit handen"],
    seo: {
      title: "Websites voor stichtingen & verenigingen",
      description:
        "Een toegankelijke website met afgeschermd ledenportaal voor je stichting of vereniging, inclusief hosting en onderhoud. Door TDT-ICT uit Laarbeek.",
    },
    hero: {
      eyebrow: "Stichtingen & verenigingen",
      title: "Een website waar je leden en vrijwilligers blij van worden",
      intro:
        "Een vereniging of stichting draait op vrijwilligers. Wij zorgen voor een toegankelijke website met een afgeschermd ledenportaal, zodat bestuur en leden makkelijk bij de juiste informatie kunnen.",
    },
    needs: {
      title: "Herken je dit?",
      items: [
        "De website is ooit gebouwd door een vrijwilliger die er nu niet meer is.",
        "Niemand weet hoe je iets aanpast of wie de inloggegevens heeft.",
        "Documenten voor leden gaan rond via mail en losse WhatsApp-groepen.",
        "Je wilt dat de site voor iedereen goed te gebruiken is, ook voor oudere leden.",
      ],
    },
    highlights: {
      title: "Wat we voor je regelen",
      intro: "Een website die blijft werken, ook als het bestuur wisselt.",
      items: [
        { icon: "accessibility", title: "Toegankelijke website", text: "Goed leesbaar en makkelijk te gebruiken, ook op mobiel en voor oudere leden." },
        { icon: "lockKeyhole", title: "Afgeschermd ledenportaal", text: "Nieuws, documenten en informatie alleen voor leden, na inloggen." },
        { icon: "pen", title: "Zelf bij te werken", text: "Vrijwilligers passen eenvoudig zelf teksten en nieuws aan." },
        { icon: "server", title: "Hosting & onderhoud", text: "Snelle, veilige hosting met updates en back-ups." },
        { icon: "user", title: "Vast aanspreekpunt", text: "Ook als het bestuur wisselt, weet je bij wie je terechtkunt." },
        { icon: "mail", title: "Mail voor het bestuur", text: "Mailadressen op de domeinnaam van je vereniging, bijvoorbeeld via Microsoft 365." },
      ],
    },
    serviceSlugs: ["websites-hosting", "online-werkplek"],
    faqs: [
      {
        question: "Kunnen vrijwilligers de website zelf bijwerken?",
        answer:
          "Ja. We bouwen de website zo dat je zonder technische kennis nieuws, teksten en foto’s kunt aanpassen. We leggen het uit aan de mensen die ermee gaan werken.",
      },
      {
        question: "Wat gebeurt er als ons bestuur wisselt?",
        answer:
          "Omdat wij de hosting en het onderhoud doen, blijft de kennis bij één vast aanspreekpunt. Nieuwe bestuursleden geven we eenvoudig toegang.",
      },
      {
        question: "Hebben jullie een speciaal tarief voor verenigingen?",
        answer: "[PLACEHOLDER: antwoord over tarieven voor stichtingen en verenigingen]",
      },
    ],
    cta: {
      title: "Een nieuwe website voor je vereniging?",
      text: "Vertel ons wat je nodig hebt. We denken graag met je mee, gratis en vrijblijvend.",
    },
  },
  {
    slug: "particulier",
    href: "/particulier/",
    title: "Particulier",
    menuDescription: "Hulp bij laptop, printer en wifi thuis",
    icon: "home",
    bullets: ["Advies bij een nieuwe laptop of printer", "Wifi die in je hele huis werkt", "Hulp bij instellen en problemen"],
    seo: {
      title: "IT-hulp voor thuis: laptop, printer & wifi",
      description:
        "Hulp en eerlijk advies bij je laptop, printer en wifi-netwerk thuis. Zonder vakjargon, van TDT-ICT uit Aarle-Rixtel.",
    },
    hero: {
      eyebrow: "Particulier",
      title: "IT-hulp voor thuis, zonder vakjargon",
      intro:
        "Ook thuis wil je dat je laptop, printer en wifi gewoon werken. We helpen je met eerlijk advies en praktische hulp, in gewone taal.",
    },
    needs: {
      title: "Herken je dit?",
      items: [
        "De wifi werkt prima in de woonkamer, maar niet op zolder of in de tuin.",
        "De printer doet het weer eens niet.",
        "Je wilt een nieuwe laptop, maar weet niet welke je nodig hebt.",
        "Je wilt je foto’s en bestanden veilig bewaren.",
      ],
    },
    highlights: {
      title: "Waar we je mee helpen",
      intro: "Praktische hulp bij de apparaten die je elke dag gebruikt.",
      items: [
        { icon: "laptop", title: "Laptop & computer", text: "Advies bij aanschaf, instellen en je gegevens overzetten." },
        { icon: "printer", title: "Printers", text: "Installeren, koppelen aan je wifi en problemen oplossen." },
        { icon: "wifi", title: "Wifi thuis", text: "Goede dekking in je hele huis, van de meterkast tot de zolder." },
        { icon: "messages", title: "Eerlijk advies", text: "Je krijgt advies over wat je nodig hebt, niet meer dan dat." },
      ],
    },
    serviceSlugs: [],
    faqs: [
      {
        question: "Komen jullie ook bij mij thuis?",
        answer: "[PLACEHOLDER: antwoord over hulp aan huis en het werkgebied]",
      },
      {
        question: "Wat kost hulp voor particulieren?",
        answer: "[PLACEHOLDER: tarief of werkwijze voor particulieren]",
      },
    ],
    cta: {
      title: "Hulp nodig met je laptop, printer of wifi?",
      text: "Neem contact op en vertel wat er speelt. We kijken samen wat de beste oplossing is.",
    },
  },
];

export const getAudience = (slug: Audience["slug"]) => audiences.find((a) => a.slug === slug)!;

/* ----------------------------------------------------------------------------
 * Homepage
 * ------------------------------------------------------------------------- */

export const home = {
  seo: {
    title: "TDT-ICT | Jouw cloud IT-partner in Aarle-Rixtel",
    description:
      "IT-beheer, Microsoft 365, netwerk, security, VoIP en websites voor MKB, verenigingen en particulieren. Eén aanspreekpunt, vaste maandprijs. Uit Aarle-Rixtel.",
  },
  topbar: { label: "Storing? Bel de calamiteitenlijn:" },
  hero: {
    eyebrow: "Jouw cloud IT-partner",
    title: "Slim, veilig & altijd online",
    text: "Jouw IT-partner voor cloud, netwerk en web. Eén aanspreekpunt, korte lijnen en een vaste maandprijs, zodat jij je kunt richten op je bedrijf.",
    chips: [
      `${stats.uptime.value}${stats.uptime.suffix} uptime`,
      `Urgente storing? Binnen ${stats.responseHours} uur opgelost`,
      "Vaste maandtarieven",
      `Sinds ${company.foundedYear}`,
    ],
  },
  partners: { label: "We werken met" },
  services: {
    eyebrow: "Diensten",
    title: "Alles voor je IT, onder één dak",
    text: "Van je werkplek en netwerk tot je website. We regelen het, zodat het gewoon werkt.",
    /** Deze diensten krijgen een grote tegel in het bento-grid */
    featured: ["online-werkplek", "websites-hosting"],
  },
  audiences: {
    eyebrow: "Voor wie",
    title: "IT-hulp die past bij wie je bent",
    text: "Of je nu een bedrijf runt, een vereniging draaiende houdt of thuis hulp nodig hebt.",
  },
  security: {
    eyebrow: "Veilig werken",
    title: "Veilig werken in de cloud",
    text: "Goede beveiliging hoort er bij ons gewoon bij. Geen ingewikkelde verhalen, maar degelijke maatregelen die standaard goed staan. Zo werk jij met een gerust hart.",
    items: [
      { icon: "lock", title: "Versleutelde dataopslag", text: "Je data wordt versleuteld opgeslagen en verstuurd, zodat alleen de juiste mensen erbij kunnen." },
      { icon: "key", title: "Multi-factor authenticatie", text: "Inloggen met een extra stap, zodat een gelekt wachtwoord niet genoeg is." },
      { icon: "activity", title: "Continue monitoring", text: "We houden je systemen in de gaten en grijpen in als er iets afwijkt." },
      { icon: "refresh", title: "Updates", text: "Software en apparaten blijven up-to-date, zodat bekende lekken snel gedicht zijn." },
    ] satisfies Feature[],
    link: { label: "Meer over cybersecurity", href: "/diensten/cybersecurity/" },
  },
  why: {
    eyebrow: "Waarom TDT-ICT",
    title: "Een IT-partner die je kent",
    text: "Geen callcenter, maar een klein team met vaste gezichten dat je bedrijf kent.",
    usps: [
      { icon: "user", title: "Persoonlijk contact", text: "Vaste gezichten die je situatie kennen. Je belt gewoon met iemand die je kent." },
      { icon: "layers", title: "Alles onder één dak", text: "Werkplek, netwerk, security, telefonie, internet en web bij één partij." },
      { icon: "receipt", title: "Transparante prijzen", text: "Vaste maandtarieven, zonder kleine lettertjes of verrassingen achteraf." },
    ] satisfies Feature[],
  },
  process: {
    eyebrow: "Werkwijze",
    title: "Zo werken we samen",
    text: "Helder en persoonlijk, van het eerste gesprek tot het resultaat.",
    steps: [
      { title: "Kies een dienst", text: "Weet je al wat je zoekt, of wil je eerst advies? Allebei prima." },
      { title: "Kennismakingsgesprek", text: "We horen wat er speelt en kijken naar je huidige situatie. Gratis en vrijblijvend." },
      { title: "Plan van aanpak op maat", text: "Je krijgt een helder voorstel: wat we doen, wanneer en wat het kost." },
      { title: "Resultaat", text: "We voeren het plan uit en stemmen tussentijds met je af. Daarna blijven we je vaste aanspreekpunt." },
    ] satisfies Step[],
  },
  team: {
    eyebrow: "Het team",
    title: "Bij ons heb je geen ticketnummer, maar een naam.",
    text: "Een klein team met korte lijnen. Je weet altijd wie je aan de lijn hebt.",
  },
  reviews: {
    eyebrow: "Reviews",
    title: "Wat klanten over ons zeggen",
    text: "Echte ervaringen van klanten.",
  },
  faq: {
    eyebrow: "Veelgestelde vragen",
    title: "Goed om te weten",
    items: [
      {
        question: "Wat kost IT-beheer bij jullie?",
        answer:
          "Je betaalt een vaste, transparante maandprijs. Die hangt af van het aantal gebruikers en de diensten die je afneemt. In een gratis adviesgesprek brengen we je situatie in kaart en krijg je een helder voorstel. [PLACEHOLDER: eventueel indicatieprijs, bijv. vanaf € .. per gebruiker per maand]",
      },
      {
        question: "Kunnen jullie onze bestaande IT overnemen?",
        answer:
          "We beginnen met een inventarisatie van je huidige systemen, accounts en apparatuur. Daarna maken we een plan om het beheer zorgvuldig over te nemen. [PLACEHOLDER: antwoord bevestigen]",
      },
      {
        question: "Wat gebeurt er als er buiten kantoortijd iets uitvalt?",
        answer: `Vaste klanten kunnen 24/7 de calamiteitenlijn bellen: ${company.contact.phoneDisplay}. Urgente problemen streven we binnen ${stats.responseHours} uur op te lossen. Niet-urgente vragen kun je mailen naar ${company.contact.email}; die pakken we tijdens kantoortijd op.`,
      },
      {
        question: "Helpen jullie ook particulieren?",
        answer:
          "Ja. We helpen particulieren met advies en hulp bij laptops, printers en wifi-netwerken thuis. [PLACEHOLDER: tarief of werkwijze voor particulieren]",
      },
      {
        question: "Kan ik alleen een website of hosting afnemen?",
        answer:
          "Ja. Je kunt bij ons ook alleen een website laten maken, of je website laten hosten en onderhouden op onze snelle WordPress-hosting. [PLACEHOLDER: controleren]",
      },
    ] satisfies Faq[],
  },
};

/* ----------------------------------------------------------------------------
 * Over ons
 * ------------------------------------------------------------------------- */

export const about = {
  seo: {
    title: "Over ons",
    description:
      "Maak kennis met TDT-ICT uit Aarle-Rixtel: opgericht in 2021 door Thijs Geene en Tom Ruis. Een klein team met vaste gezichten voor IT, netwerk en websites.",
  },
  hero: {
    eyebrow: "Over ons",
    title: "Samen zoeken wij naar jouw digitale oplossing",
    intro: "Een klein, persoonlijk team uit Aarle-Rixtel dat ervoor zorgt dat jouw IT slim, veilig en altijd online is.",
  },
  story: {
    title: "Ons verhaal",
    paragraphs: [
      `TDT-ICT is in ${company.foundedYear} opgericht door Thijs Geene, samen met Tom Ruis. Vanuit Aarle-Rixtel helpen we bedrijven, stichtingen, verenigingen en particulieren met hun IT.`,
      `Sindsdien zijn we gegroeid naar meer dan ${stats.websites.value} websites en IT-diensten zoals online werkplekken, netwerken, cybersecurity, telefonie en internetverbindingen.`,
      "Wat niet is veranderd: je hebt bij ons altijd een vast aanspreekpunt. Korte lijnen, heldere afspraken en een vaste maandprijs. [PLACEHOLDER: eventueel persoonlijke aanvulling op het verhaal]",
    ],
  },
  values: {
    title: "Waar we voor staan",
    items: [
      { icon: "user", title: "Persoonlijk", text: "Vaste gezichten en korte lijnen. Je weet altijd wie je aan de lijn hebt." },
      { icon: "shield", title: "Betrouwbaar", text: "Degelijke oplossingen die gewoon werken, met 99%+ uptime." },
      { icon: "receipt", title: "Transparant", text: "Heldere afspraken en vaste maandtarieven, zonder verrassingen." },
    ] satisfies Feature[],
  },
  team: {
    title: "Het team",
    text: "Bij ons heb je geen ticketnummer, maar een naam.",
  },
};

/* ----------------------------------------------------------------------------
 * Support
 * ------------------------------------------------------------------------- */

export const support = {
  seo: {
    title: "Support & storing melden",
    description:
      "Storing? Vaste klanten bellen 24/7 de calamiteitenlijn van TDT-ICT: +31 6 36 32 04 68. Urgente problemen streven we binnen 24 uur op te lossen.",
  },
  hero: {
    eyebrow: "Support",
    title: "Hulp nodig? We staan voor je klaar",
    intro: "Meld een storing, stel een vraag of laat ons op afstand meekijken.",
  },
  emergency: {
    title: "Storing? Bel de calamiteitenlijn",
    text: `Voor vaste klanten zijn we bij urgente storingen 24/7 bereikbaar. Urgente problemen streven we binnen ${stats.responseHours} uur op te lossen.`,
  },
  urgentExamples: {
    title: "Wanneer is het urgent?",
    items: [
      "Niemand kan werken, bijvoorbeeld door een storing in internet, netwerk of mail.",
      "Je vermoedt een hack, virus of datalek.",
      "Je website is offline.",
      "Een systeem waar je bedrijf van afhankelijk is, ligt eruit.",
    ],
  },
  report: {
    title: "Niet urgent? Meld het per mail",
    text: "Stuur een mail naar info@tdt-ict.com. Hoe beter je het probleem beschrijft, hoe sneller we kunnen helpen. Vermeld in elk geval:",
    checklist: [
      "Je naam, bedrijf en telefoonnummer",
      "Wat er niet werkt en sinds wanneer",
      "Welke foutmelding je ziet (een screenshot helpt)",
      "Of het bij één persoon speelt of bij meerdere collega’s",
    ],
  },
  remote: {
    title: "Hulp op afstand",
    text: "Vraagt een van onze medewerkers je om op afstand mee te kijken? Download dan via de knop hieronder de supporttool en geef de code door aan je contactpersoon.",
    /** [PLACEHOLDER: link naar de remote-supporttool, bijv. TeamViewer QuickSupport of AnyDesk. null = knop wordt niet getoond] */
    url: null as string | null,
    label: "Download de supporttool",
    note: "Geef alleen toegang aan iemand van TDT-ICT die je zelf hebt gebeld of die jou net heeft gebeld.",
  },
  faqs: [
    {
      question: "Wie kan de calamiteitenlijn bellen?",
      answer: "De 24/7 calamiteitenlijn is bedoeld voor vaste klanten met een urgente storing. Voor andere vragen kun je tijdens kantoortijd bellen of mailen.",
    },
    {
      question: "Hoe snel lossen jullie een storing op?",
      answer: `Urgente problemen streven we binnen ${stats.responseHours} uur op te lossen. Niet-urgente vragen pakken we zo snel mogelijk op tijdens kantoortijd. [PLACEHOLDER: eventuele afspraken uit je SLA]`,
    },
    {
      question: "Wat zijn jullie kantoortijden?",
      answer: "[PLACEHOLDER: kantoortijden]",
    },
  ] satisfies Faq[],
};

/* ----------------------------------------------------------------------------
 * Contact
 * ------------------------------------------------------------------------- */

export const contactPage = {
  seo: {
    title: "Contact & gratis adviesgesprek",
    description:
      "Plan een gratis adviesgesprek met TDT-ICT of neem direct contact op: +31 6 36 32 04 68, info@tdt-ict.com. Broekelingstraat 28, 5735 HC Aarle-Rixtel.",
  },
  hero: {
    eyebrow: "Contact",
    title: "Laten we kennismaken",
    intro: "Plan een gratis adviesgesprek of stel je vraag. We reageren zo snel mogelijk, meestal binnen één werkdag. [PLACEHOLDER: reactietijd bevestigen]",
  },
  form: {
    title: "Stuur ons een bericht",
    /** Opties voor "Ik ben…" */
    roles: [
      { value: "zakelijk", label: "Zakelijk" },
      { value: "vereniging", label: "Stichting of vereniging" },
      { value: "particulier", label: "Particulier" },
    ],
    /** Opties voor het onderwerp. De waarde kan ook via ?onderwerp=... in de URL worden voorgeselecteerd */
    subjects: [
      { value: "adviesgesprek", label: "Gratis adviesgesprek" },
      ...services.map((s) => ({ value: s.slug, label: s.shortTitle })),
      { value: "particulier", label: "Hulp voor thuis" },
      { value: "anders", label: "Iets anders" },
    ],
    privacyLabel: "Ik ga akkoord dat TDT-ICT mijn gegevens gebruikt om contact met me op te nemen, zoals beschreven in de",
    success: {
      title: "Bedankt, je bericht is verstuurd!",
      text: "We nemen zo snel mogelijk contact met je op. Is het urgent? Bel dan direct.",
    },
    error: {
      title: "Er ging iets mis bij het versturen",
      text: "Probeer het nog een keer, of mail of bel ons direct.",
    },
  },
  map: {
    title: "Ons kantoor",
    consent:
      "De kaart wordt geladen via Google Maps. Daarbij kan Google gegevens zoals je IP-adres verwerken. Daarom laden we de kaart pas als je erom vraagt.",
    button: "Kaart laden",
  },
};

/* ----------------------------------------------------------------------------
 * Navigatie
 * ------------------------------------------------------------------------- */

export const navigation = {
  main: [
    { label: "Diensten", href: "/diensten/", menu: "services" as const },
    { label: "Voor wie", href: "/zakelijk/", menu: "audiences" as const },
    { label: "Over ons", href: "/over-ons/" },
    { label: "Support", href: "/support/" },
    { label: "Contact", href: "/contact/" },
  ],
  footer: {
    company: [
      { label: "Over ons", href: "/over-ons/" },
      { label: "Support", href: "/support/" },
      { label: "Contact", href: "/contact/" },
      { label: "Gratis adviesgesprek", href: cta.primary.href },
      { label: company.portal.label, href: company.portal.url },
    ],
    legal: [
      { label: "Algemene voorwaarden", href: "/voorwaarden/" },
      { label: "Acceptable Use Policy", href: "/acceptable-use-policy-aup/" },
      { label: "Privacybeleid", href: "/privacy-policy/" },
    ],
  },
};

export const servicesOverview = {
  seo: {
    title: "Diensten: IT-beheer, Microsoft 365, netwerk & websites",
    description:
      "Alle diensten van TDT-ICT: Microsoft 365, netwerk en wifi, cybersecurity, VoIP-telefonie, zakelijk internet en websites met WordPress-hosting.",
  },
  hero: {
    eyebrow: "Diensten",
    title: "Alles voor je IT, onder één dak",
    intro: "Van je werkplek tot je website. Kies één dienst of laat ons alles regelen, met één aanspreekpunt en een vaste maandprijs.",
  },
};
