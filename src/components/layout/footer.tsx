import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { audiences, company, navigation, services } from "@/content/site";
import { Logo } from "@/components/logo";
import { NetworkMesh } from "@/components/visuals/network-mesh";

export function Footer() {
  const { contact } = company;
  const year = new Date().getFullYear();
  const columns = [
    { title: "Diensten", links: services.map((s) => ({ label: s.shortTitle, href: `/diensten/${s.slug}/` })) },
    { title: "Voor wie", links: audiences.map((a) => ({ label: a.title, href: a.href })) },
    { title: "Bedrijf", links: navigation.footer.company },
    { title: "Juridisch", links: navigation.footer.legal },
  ];

  return (
    <footer className="dark-section relative overflow-hidden bg-navy-deep pb-24 text-on-dark lg:pb-0">
      <NetworkMesh tone="dark" seed={21} density={30} animated={false} className="opacity-50" />
      <div className="container-site relative">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.2fr_2fr] lg:gap-16 lg:py-20">
          <div className="max-w-sm">
            <Link href="/" className="inline-block rounded-lg">
              <Logo tone="dark" />
              <span className="sr-only">, naar de homepage</span>
            </Link>
            <p className="mt-5 leading-relaxed">{company.description}</p>
            <ul className="mt-6 space-y-2 text-[0.9375rem]">
              <li>
                <a href={contact.phoneHref} className="inline-flex min-h-6 items-center gap-3 py-0.5 hover:text-white">
                  <Phone aria-hidden="true" className="size-4 text-accent-soft" />
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={contact.emailHref} className="inline-flex min-h-6 items-center gap-3 py-0.5 hover:text-white">
                  <Mail aria-hidden="true" className="size-4 text-accent-soft" />
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent-soft" />
                <address className="not-italic">
                  {contact.address.street}
                  <br />
                  {contact.address.postalCode} {contact.address.city}
                </address>
              </li>
            </ul>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h2 className="text-sm font-semibold tracking-wide text-white">{col.title}</h2>
                <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="hover:text-white hover:underline hover:underline-offset-4">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-sm text-on-dark-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. Alle rechten voorbehouden.
          </p>
          <p>
            KvK {company.kvk} · {company.contact.address.city}, {company.contact.address.region}
          </p>
        </div>
      </div>
    </footer>
  );
}
