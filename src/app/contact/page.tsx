import type { Metadata } from "next";
import { Building2, Mail, MapPin, MessageCircle, Phone, Siren } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { MapEmbed } from "@/components/map-embed";
import { PageHero } from "@/components/sections/page-hero";
import { company, contactPage, stats } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ ...contactPage.seo, path: "/contact/" });

export default function ContactPage() {
  const { contact } = company;
  const options = [
    { icon: Phone, label: "Bellen", value: contact.phoneDisplay, href: contact.phoneHref },
    { icon: Mail, label: "Mailen", value: contact.email, href: contact.emailHref },
    ...(contact.whatsappHref ? [{ icon: MessageCircle, label: "WhatsApp", value: "Stuur een appje", href: contact.whatsappHref }] : []),
  ];

  return (
    <>
      <PageHero
        eyebrow={contactPage.hero.eyebrow}
        title={contactPage.hero.title}
        intro={contactPage.hero.intro}
        crumbs={[{ label: "Contact", href: "/contact/" }]}
        className="[&>div]:pb-10 sm:[&>div]:pb-12 lg:[&>div]:pb-14"
      />

      <section className="pb-20 sm:pb-24">
        <div className="container-site grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:gap-12">
          <div id="formulier" className="card scroll-mt-28 self-start p-6 sm:p-10">
            <ContactForm
              form={contactPage.form}
              contact={{ phoneHref: contact.phoneHref, phoneDisplay: contact.phoneDisplay, email: contact.email, emailHref: contact.emailHref }}
              turnstileSiteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || undefined}
            />
          </div>

          <aside className="space-y-6" aria-label="Directe contactgegevens">
            <div className="dark-section rounded-card bg-navy p-7 text-on-dark">
              <p className="flex items-center gap-2 text-sm font-semibold text-accent-soft">
                <Siren aria-hidden="true" className="size-4" /> {stats.support.value} voor vaste klanten
              </p>
              <h2 className="mt-3 text-xl font-semibold text-white">Storing? Bel de calamiteitenlijn</h2>
              <p className="mt-2 leading-relaxed">Urgente problemen streven we binnen {stats.responseHours} uur op te lossen.</p>
              <a
                href={contact.phoneHref}
                className="mt-5 flex items-center gap-3 rounded-xl bg-white px-4 py-3.5 text-lg font-bold tracking-tight text-heading hover:bg-surface"
              >
                <Phone aria-hidden="true" className="size-5 text-accent-strong" />
                {contact.phoneDisplay}
              </a>
            </div>

            <div className="card p-7">
              <h2 className="text-lg font-semibold">Direct contact</h2>
              <ul className="mt-4 space-y-2">
                {options.map((o) => (
                  <li key={o.label}>
                    <a href={o.href} className="group flex items-center gap-4 rounded-xl p-2 -mx-2 hover:bg-surface">
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-tint text-accent-strong">
                        <o.icon aria-hidden="true" className="size-5" />
                      </span>
                      <span>
                        <span className="block text-sm">{o.label}</span>
                        <span className="block font-semibold text-heading group-hover:text-accent-strong">{o.value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <dl className="mt-6 space-y-4 border-t border-line pt-6 text-[0.9375rem]">
                <div className="flex gap-4">
                  <dt>
                    <MapPin aria-hidden="true" className="mt-0.5 size-5 text-accent-strong" />
                    <span className="sr-only">Adres</span>
                  </dt>
                  <dd>
                    <address className="not-italic text-heading">
                      {company.name}
                      <br />
                      {contact.address.street}
                      <br />
                      {contact.address.postalCode} {contact.address.city}
                    </address>
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt>
                    <Building2 aria-hidden="true" className="mt-0.5 size-5 text-accent-strong" />
                    <span className="sr-only">KvK-nummer</span>
                  </dt>
                  <dd className="text-heading">KvK {company.kvk}</dd>
                </div>
              </dl>
            </div>

            <div>
              <h2 className="sr-only">{contactPage.map.title}</h2>
              <MapEmbed name={company.name} address={contact.address} consent={contactPage.map.consent} button={contactPage.map.button} />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
