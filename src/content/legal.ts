/**
 * Juridische pagina's. De URL's zijn gelijk aan die van de oude site.
 *
 * [PLACEHOLDER: neem hier de bestaande teksten van de huidige site letterlijk over]
 * De huidige site was tijdens de bouw niet bereikbaar, daarom staan hieronder
 * alleen de structuur en placeholders. Elke sectie heeft een kop en een of meer
 * alinea's; gebruik `list` voor opsommingen.
 */

export type LegalSection = { heading: string; paragraphs?: string[]; list?: string[] };
export type LegalPage = {
  slug: "voorwaarden" | "acceptable-use-policy-aup" | "privacy-policy";
  title: string;
  seo: { title: string; description: string };
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export const legalPages: LegalPage[] = [
  {
    slug: "voorwaarden",
    title: "Algemene voorwaarden",
    seo: {
      title: "Algemene voorwaarden",
      description: "De algemene voorwaarden van TDT-ICT voor IT-diensten, hosting en websites.",
    },
    updated: "[PLACEHOLDER: datum laatste wijziging]",
    intro: "Op alle diensten en overeenkomsten van TDT-ICT zijn deze algemene voorwaarden van toepassing.",
    sections: [
      { heading: "Artikel 1 – Definities", paragraphs: ["[PLACEHOLDER: bestaande tekst overnemen]"] },
      { heading: "Artikel 2 – Toepasselijkheid", paragraphs: ["[PLACEHOLDER: bestaande tekst overnemen]"] },
      { heading: "Artikel 3 – Offertes en totstandkoming", paragraphs: ["[PLACEHOLDER: bestaande tekst overnemen]"] },
      { heading: "Artikel 4 – Prijzen en betaling", paragraphs: ["[PLACEHOLDER: bestaande tekst overnemen]"] },
      { heading: "Artikel 5 – Duur en opzegging", paragraphs: ["[PLACEHOLDER: bestaande tekst overnemen]"] },
      { heading: "Artikel 6 – Aansprakelijkheid", paragraphs: ["[PLACEHOLDER: bestaande tekst overnemen]"] },
      { heading: "Overige artikelen", paragraphs: ["[PLACEHOLDER: overige artikelen uit de bestaande voorwaarden]"] },
    ],
  },
  {
    slug: "acceptable-use-policy-aup",
    title: "Acceptable Use Policy (AUP)",
    seo: {
      title: "Acceptable Use Policy (AUP)",
      description: "De Acceptable Use Policy van TDT-ICT: regels voor het gebruik van onze hosting-, mail- en netwerkdiensten.",
    },
    updated: "[PLACEHOLDER: datum laatste wijziging]",
    intro: "Deze Acceptable Use Policy beschrijft wat wel en niet is toegestaan bij het gebruik van de diensten van TDT-ICT.",
    sections: [
      { heading: "Doel van deze policy", paragraphs: ["[PLACEHOLDER: bestaande tekst overnemen]"] },
      { heading: "Niet toegestaan gebruik", paragraphs: ["[PLACEHOLDER: bestaande tekst overnemen]"] },
      { heading: "Maatregelen bij overtreding", paragraphs: ["[PLACEHOLDER: bestaande tekst overnemen]"] },
      { heading: "Melden van misbruik", paragraphs: ["[PLACEHOLDER: bestaande tekst overnemen]"] },
    ],
  },
  {
    slug: "privacy-policy",
    title: "Privacybeleid",
    seo: {
      title: "Privacybeleid",
      description: "Hoe TDT-ICT omgaat met je persoonsgegevens. Deze website gebruikt geen tracking-cookies.",
    },
    updated: "[PLACEHOLDER: datum laatste wijziging]",
    intro: "TDT-ICT gaat zorgvuldig om met je persoonsgegevens. In dit privacybeleid lees je welke gegevens we verwerken en waarom.",
    sections: [
      { heading: "Wie zijn wij", paragraphs: ["TDT-ICT, Broekelingstraat 28, 5735 HC Aarle-Rixtel, KvK 83227660, info@tdt-ict.com. [PLACEHOLDER: bestaande tekst overnemen]"] },
      { heading: "Welke gegevens we verwerken", paragraphs: ["[PLACEHOLDER: bestaande tekst overnemen]"] },
      {
        heading: "Contactformulier",
        paragraphs: [
          "Als je het contactformulier invult, gebruiken we je naam, contactgegevens en bericht alleen om je vraag te beantwoorden. [PLACEHOLDER: bewaartermijn en verwerker van het formulier, bijv. Formspree of Resend]",
        ],
      },
      {
        heading: "Cookies en statistieken",
        paragraphs: [
          "Deze website plaatst geen tracking-cookies. [PLACEHOLDER: als je privacyvriendelijke statistieken gebruikt (Plausible of Umami), vermeld dat hier. Die werken zonder cookies en zonder persoonsgegevens op te slaan.]",
          "De kaart op de contactpagina wordt pas geladen als je daar zelf op klikt. Vanaf dat moment kan Google gegevens verwerken volgens het privacybeleid van Google.",
          "Om spam via het contactformulier te voorkomen, gebruiken we Cloudflare Turnstile. Turnstile controleert of het formulier door een mens wordt ingevuld en verwerkt daarvoor technische gegevens zoals je IP-adres en browsergegevens. Er worden geen tracking-cookies geplaatst. [PLACEHOLDER: controleren en afstemmen op het verwerkersbeleid van Cloudflare]",
        ],
      },
      { heading: "Bewaartermijnen", paragraphs: ["[PLACEHOLDER: bestaande tekst overnemen]"] },
      { heading: "Je rechten", paragraphs: ["[PLACEHOLDER: bestaande tekst overnemen]"] },
    ],
  },
];

export const getLegalPage = (slug: LegalPage["slug"]) => legalPages.find((p) => p.slug === slug)!;
