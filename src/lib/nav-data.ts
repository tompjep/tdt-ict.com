import { audiences, company, cta, navigation, services } from "@/content/site";

/**
 * Alleen de gegevens die de (client-side) header en het mobiele menu nodig hebben.
 * Zo komt niet het hele contentbestand in de JavaScript-bundle terecht.
 */
export function getNavData() {
  return {
    name: company.name,
    phoneHref: company.contact.phoneHref,
    phoneDisplay: company.contact.phoneDisplay,
    emailHref: company.contact.emailHref,
    portal: { label: company.portal.label, url: company.portal.url },
    cta: { href: cta.primary.href, label: cta.primary.label, short: cta.primary.short },
    main: navigation.main.map((item) => ({ label: item.label, href: item.href, menu: "menu" in item ? item.menu : undefined })),
    services: services.map((s) => ({ slug: s.slug, icon: s.icon, shortTitle: s.shortTitle, menuDescription: s.menuDescription })),
    audiences: audiences.map((a) => ({ slug: a.slug, href: a.href, icon: a.icon, title: a.title, menuDescription: a.menuDescription })),
  };
}

export type NavData = ReturnType<typeof getNavData>;
