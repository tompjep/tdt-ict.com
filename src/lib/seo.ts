import type { Metadata } from "next";
import { company, type Faq } from "@/content/site";

export const siteUrl = company.url.replace(/\/$/, "");

/** Absolute URL met trailing slash (gelijk aan de URL-structuur van de site) */
export function absoluteUrl(path = "/") {
  const clean = path.startsWith("/") ? path : `/${path}`;
  const withSlash = clean.endsWith("/") || clean.includes("#") || clean.includes("?") ? clean : `${clean}/`;
  return `${siteUrl}${withSlash}`;
}

/** Unieke title, description, canonical en Open Graph per pagina */
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "nl_NL",
      siteName: company.name,
      url,
      title,
      description,
      images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: `${company.name} – ${company.tagline}` }],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

/* ---------------------------------------------------------------------------
 * Structured data (schema.org)
 * ------------------------------------------------------------------------ */

export const organizationId = `${siteUrl}/#organization`;

export function localBusinessSchema() {
  const { contact } = company;
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": organizationId,
    name: company.name,
    legalName: company.legalName,
    slogan: company.tagline,
    description: company.description,
    url: `${siteUrl}/`,
    logo: `${siteUrl}/logo.svg`,
    image: `${siteUrl}/og-image.png`,
    telephone: contact.phoneHref.replace("tel:", ""),
    email: contact.email,
    foundingDate: String(company.foundedYear),
    founder: company.founders.map((name) => ({ "@type": "Person", name })),
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.street,
      postalCode: contact.address.postalCode,
      addressLocality: contact.address.city,
      addressRegion: contact.address.region,
      addressCountry: contact.address.country,
    },
    areaServed: company.serviceArea.map((name) => ({ "@type": "City", name })),
    identifier: { "@type": "PropertyValue", propertyID: "KvK", value: company.kvk },
    ...(contact.openingHoursSpec.length
      ? {
          openingHoursSpecification: contact.openingHoursSpec.map((o) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: o.days,
            opens: o.opens,
            closes: o.closes,
          })),
        }
      : {}),
    ...(company.sameAs.length ? { sameAs: company.sameAs } : {}),
  };
}

/** Haalt [PLACEHOLDER: ...] uit teksten voor structured data */
export const stripPlaceholders = (text: string) => text.replace(/\s*\[PLACEHOLDER:[^\]]*\]/g, "").trim();

export function faqSchema(faqs: Faq[]) {
  const items = faqs
    .map((f) => ({ question: f.question, answer: stripPlaceholders(f.answer) }))
    .filter((f) => f.answer.length > 0);
  if (!items.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export type Crumb = { label: string; href: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ label: "Home", href: "/" }, ...crumbs].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: absoluteUrl(c.href),
    })),
  };
}

export function serviceSchema({ name, description, path }: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": organizationId },
    areaServed: company.serviceArea.map((n) => ({ "@type": "City", name: n })),
  };
}
