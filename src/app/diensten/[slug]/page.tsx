import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Phone } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/motion/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq-section";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Packages } from "@/components/sections/packages";
import { PageHero } from "@/components/sections/page-hero";
import { PartnerStrip } from "@/components/sections/partner-strip";
import { ProblemList } from "@/components/sections/problem-list";
import { SectionHeading } from "@/components/sections/section-heading";
import { ServiceLinks } from "@/components/sections/service-links";
import { Steps } from "@/components/sections/steps";
import { Button } from "@/components/ui/button";
import { company, getService, services } from "@/content/site";
import { pageMetadata, serviceSchema } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({ ...service.seo, path: `/diensten/${service.slug}/` });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const path = `/diensten/${service.slug}/`;

  return (
    <>
      <PageHero
        eyebrow="Diensten"
        icon={service.icon}
        title={service.hero.title}
        intro={service.hero.promise}
        crumbs={[
          { label: "Diensten", href: "/diensten/" },
          { label: service.shortTitle, href: path },
        ]}
        aside={
          <div className="card hidden p-7 lg:block">
            <p className="text-sm font-semibold text-heading">In het kort</p>
            <ul className="mt-4 space-y-3">
              {service.features.slice(0, 5).map((f) => (
                <li key={f.title} className="flex gap-3 leading-snug">
                  <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent-strong" strokeWidth={3} />
                  <span>
                    <span className="font-medium text-heading">{f.title}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-xl bg-surface px-4 py-3 text-sm">
              <span className="font-semibold text-heading">Vaste maandprijs</span> en één aanspreekpunt.
            </p>
          </div>
        }
      >
        <Button asChild size="lg">
          <Link href={`/contact/?onderwerp=${service.slug}#formulier`}>
            Plan een gratis adviesgesprek <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href={company.contact.phoneHref}>
            <Phone aria-hidden="true" /> {company.contact.phoneDisplay}
          </a>
        </Button>
      </PageHero>

      <section className="section pt-10 sm:pt-12 lg:pt-14">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ProblemList items={service.problems} />
          <Reveal>
            <div className="dark-section relative h-full overflow-hidden rounded-card bg-navy p-8 text-on-dark sm:p-10">
              <p className="eyebrow">Onze oplossing</p>
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{service.solution.title}</h2>
              <div className="mt-5 space-y-4 text-[1.0625rem] leading-relaxed">
                {service.solution.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-surface" aria-labelledby="features-title">
        <div className="container-site">
          <SectionHeading id="features-title" eyebrow="Wat je krijgt" title={`Dit regelen we voor je`} />
          <div className="mt-12">
            <FeatureGrid items={service.features} columns={service.features.length % 4 === 0 ? 4 : 3} />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="steps-title">
        <div className="container-site">
          <SectionHeading id="steps-title" eyebrow="Hoe het werkt" title="In vier stappen geregeld" align="center" />
          <div className="mt-14">
            <Steps steps={service.steps} />
          </div>
        </div>
      </section>

      {service.partners.length > 0 && (
        <section className="section border-t border-line pt-16 sm:pt-20" aria-labelledby="brands-title">
          <div className="container-site">
            <SectionHeading
              id="brands-title"
              eyebrow="Merken"
              title="Met betrouwbare merken"
              text="We werken met apparatuur en software die we goed kennen en centraal kunnen beheren."
            />
            <PartnerStrip ids={service.partners} variant="cards" className="mt-10" />
          </div>
        </section>
      )}

      {service.packages && <Packages {...service.packages} />}

      <FaqSection items={service.faqs} title={`Vragen over ${service.shortTitle.toLowerCase()}`} />

      <section className="pb-20 sm:pb-24" aria-labelledby="related-title">
        <div className="container-site">
          <h2 id="related-title" className="text-2xl font-semibold">
            Andere diensten
          </h2>
          <ServiceLinks slugs={services.filter((s) => s.slug !== service.slug).map((s) => s.slug)} className="mt-6" />
        </div>
      </section>

      <CtaBand />
      <JsonLd data={serviceSchema({ name: service.title, description: service.seo.description, path })} />
    </>
  );
}
