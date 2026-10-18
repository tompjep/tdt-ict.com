import type { Metadata } from "next";
import Link from "next/link";
import { CircleCheck, Download, Mail, MonitorSmartphone, Phone, Siren, TriangleAlert } from "lucide-react";
import { FaqSection } from "@/components/sections/faq-section";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { NetworkMesh } from "@/components/visuals/network-mesh";
import { company, support } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ ...support.seo, path: "/support/" });

export default function SupportPage() {
  const { contact } = company;
  return (
    <>
      <PageHero
        eyebrow={support.hero.eyebrow}
        icon="lifebuoy"
        title={support.hero.title}
        intro={support.hero.intro}
        crumbs={[{ label: "Support", href: "/support/" }]}
      />

      <section className="pb-20 sm:pb-24" aria-labelledby="emergency-title">
        <div className="container-site">
          <div className="dark-section relative overflow-hidden rounded-[24px] bg-navy p-8 sm:p-12 lg:p-14">
            <NetworkMesh tone="dark" seed={31} density={30} />
            <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-sm font-semibold text-accent-soft">
                  <Siren aria-hidden="true" className="size-4" /> 24/7 voor vaste klanten
                </span>
                <h2 id="emergency-title" className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
                  {support.emergency.title}
                </h2>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-on-dark">{support.emergency.text}</p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={contact.phoneHref}
                  className="group flex items-center gap-4 rounded-2xl bg-white p-5 text-heading shadow-lift transition-transform hover:-translate-y-0.5"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent-strong text-white">
                    <Phone aria-hidden="true" className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-body">Calamiteitenlijn</span>
                    <span className="block text-2xl font-bold tracking-tight">{contact.phoneDisplay}</span>
                  </span>
                </a>
                <a
                  href={contact.emailHref}
                  className="flex items-center gap-4 rounded-2xl border border-white/15 p-5 text-white hover:bg-white/5"
                >
                  <Mail aria-hidden="true" className="size-5 text-accent-soft" />
                  <span>
                    <span className="block text-sm text-on-dark">Niet urgent</span>
                    <span className="block font-semibold">{contact.email}</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="container-site grid gap-6 lg:grid-cols-3">
          <div className="card p-7">
            <span className="grid size-11 place-items-center rounded-xl bg-accent-tint text-accent-strong">
              <TriangleAlert aria-hidden="true" className="size-5" />
            </span>
            <h2 className="mt-5 text-xl font-semibold">{support.urgentExamples.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {support.urgentExamples.items.map((item) => (
                <li key={item} className="flex gap-2.5 leading-snug">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-7">
            <span className="grid size-11 place-items-center rounded-xl bg-accent-tint text-accent-strong">
              <Mail aria-hidden="true" className="size-5" />
            </span>
            <h2 className="mt-5 text-xl font-semibold">{support.report.title}</h2>
            <p className="mt-3 leading-relaxed">{support.report.text}</p>
            <ul className="mt-4 space-y-2.5">
              {support.report.checklist.map((item) => (
                <li key={item} className="flex gap-2.5 leading-snug">
                  <CircleCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent-strong" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" className="mt-6">
              <a href={`${contact.emailHref}?subject=${encodeURIComponent("Storing melden")}`}>Mail een storing</a>
            </Button>
          </div>
          <div className="card p-7">
            <span className="grid size-11 place-items-center rounded-xl bg-accent-tint text-accent-strong">
              <MonitorSmartphone aria-hidden="true" className="size-5" />
            </span>
            <h2 className="mt-5 text-xl font-semibold">{support.remote.title}</h2>
            <p className="mt-3 leading-relaxed">{support.remote.text}</p>
            {support.remote.url ? (
              <Button asChild className="mt-6">
                <a href={support.remote.url} rel="noopener">
                  <Download aria-hidden="true" /> {support.remote.label}
                </a>
              </Button>
            ) : (
              <p className="mt-6 rounded-xl border-2 border-dashed border-navy/15 p-4 font-mono text-sm">
                [PLACEHOLDER: link naar remote-supporttool in src/content/site.ts]
              </p>
            )}
            <p className="mt-4 text-sm leading-relaxed">{support.remote.note}</p>
          </div>
        </div>
      </section>

      <FaqSection items={support.faqs} className="section border-t border-line" />

      <section className="pb-20 sm:pb-24">
        <div className="container-site text-center">
          <p className="text-lg">
            Geen storing, maar een vraag of wens?{" "}
            <Link href="/contact/" className="font-semibold text-accent-strong underline-offset-4 hover:underline">
              Neem contact op
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
