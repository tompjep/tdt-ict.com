import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq-section";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { PageHero } from "@/components/sections/page-hero";
import { ProblemList } from "@/components/sections/problem-list";
import { SectionHeading } from "@/components/sections/section-heading";
import { ServiceLinks } from "@/components/sections/service-links";
import { Steps } from "@/components/sections/steps";
import { StatsRow } from "@/components/sections/why-us";
import { Button } from "@/components/ui/button";
import { company, cta, getAudience, home, type Audience } from "@/content/site";

/** Gedeeld template voor /zakelijk, /verenigingen en /particulier */
export function AudiencePage({ slug }: { slug: Audience["slug"] }) {
  const audience = getAudience(slug);
  const faqs = audience.faqs.length ? audience.faqs : home.faq.items.slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={audience.hero.eyebrow}
        icon={audience.icon}
        title={audience.hero.title}
        intro={audience.hero.intro}
        crumbs={[{ label: audience.title, href: audience.href }]}
      >
        <Button asChild size="lg">
          <Link href={slug === "particulier" ? "/contact/?onderwerp=particulier#formulier" : cta.primary.href}>
            {slug === "particulier" ? "Vraag hulp aan" : cta.primary.label} <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href={company.contact.phoneHref}>
            <Phone aria-hidden="true" /> {company.contact.phoneDisplay}
          </a>
        </Button>
      </PageHero>

      <section className="section pt-10 sm:pt-12 lg:pt-14">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <ProblemList title={audience.needs.title} items={audience.needs.items} />
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">{audience.highlights.title}</h2>
            <p className="mt-3 text-lg">{audience.highlights.intro}</p>
            <div className="mt-6">
              <FeatureGrid items={audience.highlights.items} columns={2} />
            </div>
          </div>
        </div>
      </section>

      {slug === "zakelijk" && (
        <section className="pb-20 sm:pb-24" aria-label="TDT-ICT in cijfers">
          <div className="container-site">
            <StatsRow />
          </div>
        </section>
      )}

      {audience.serviceSlugs.length > 0 && (
        <section className="section bg-surface" aria-labelledby="audience-services-title">
          <div className="container-site">
            <SectionHeading
              id="audience-services-title"
              eyebrow="Diensten"
              title={slug === "zakelijk" ? "Alles voor je IT, onder één dak" : "Hier helpen we je mee"}
            />
            <ServiceLinks slugs={audience.serviceSlugs} className="mt-10" />
          </div>
        </section>
      )}

      {slug === "particulier" && (
        <section className="section bg-surface" aria-labelledby="particulier-contact-title">
          <div className="container-site grid gap-8 lg:grid-cols-2 lg:items-center">
            <SectionHeading
              id="particulier-contact-title"
              eyebrow="Contact"
              title="Vertel ons wat er speelt"
              text="Bel of mail ons met je vraag. We denken mee en vertellen eerlijk wat de beste oplossing is."
            />
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button asChild size="lg" variant="navy">
                <a href={company.contact.phoneHref}>
                  <Phone aria-hidden="true" /> {company.contact.phoneDisplay}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={company.contact.emailHref}>
                  <Mail aria-hidden="true" /> {company.contact.email}
                </a>
              </Button>
            </div>
          </div>
        </section>
      )}

      <section className="section" aria-labelledby="audience-process-title">
        <div className="container-site">
          <SectionHeading id="audience-process-title" eyebrow={home.process.eyebrow} title={home.process.title} text={home.process.text} align="center" />
          <div className="mt-14">
            <Steps steps={home.process.steps} />
          </div>
        </div>
      </section>

      <FaqSection items={faqs} className="section border-t border-line" />

      <CtaBand title={audience.cta.title} text={audience.cta.text} />
    </>
  );
}
