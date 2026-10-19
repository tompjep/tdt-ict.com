import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AudienceCards } from "@/components/sections/audience-cards";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq-section";
import { HomeHero } from "@/components/sections/home-hero";
import { PartnerStrip } from "@/components/sections/partner-strip";
import { Reviews } from "@/components/sections/reviews";
import { SecuritySection } from "@/components/sections/security-section";
import { SectionHeading } from "@/components/sections/section-heading";
import { ServiceBento } from "@/components/sections/service-bento";
import { Steps } from "@/components/sections/steps";
import { TeamGrid } from "@/components/sections/team-grid";
import { WhyUs } from "@/components/sections/why-us";
import { Button } from "@/components/ui/button";
import { cta, home } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({ ...home.seo, path: "/" }),
  title: { absolute: home.seo.title },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section aria-label="Merken waarmee we werken" className="border-b border-line pt-4 pb-14">
        <div className="container-site">
          <PartnerStrip label={home.partners.label} />
        </div>
      </section>

      <section className="section" aria-labelledby="services-title">
        <div className="container-site">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading id="services-title" eyebrow={home.services.eyebrow} title={home.services.title} text={home.services.text} />
            <Button asChild variant="outline" className="self-start lg:self-auto">
              <Link href={cta.services.href}>
                Alle diensten <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <div className="mt-12">
            <ServiceBento />
          </div>
        </div>
      </section>

      <section className="section bg-surface" aria-labelledby="audiences-title">
        <div className="container-site">
          <SectionHeading id="audiences-title" eyebrow={home.audiences.eyebrow} title={home.audiences.title} text={home.audiences.text} align="center" />
          <div className="mt-12">
            <AudienceCards />
          </div>
        </div>
      </section>

      <SecuritySection />

      <WhyUs />

      <section className="section border-t border-line bg-gradient-to-b from-surface/60 to-white" aria-labelledby="process-title">
        <div className="container-site">
          <SectionHeading id="process-title" eyebrow={home.process.eyebrow} title={home.process.title} text={home.process.text} align="center" />
          <div className="mt-14">
            <Steps steps={home.process.steps} />
          </div>
        </div>
      </section>

      <section className="section pt-4 sm:pt-6 lg:pt-8" aria-labelledby="team-title">
        <div className="container-site">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading id="team-title" eyebrow={home.team.eyebrow} title={home.team.title} text={home.team.text} />
            <Button asChild variant="outline" className="self-start lg:self-auto">
              <Link href="/over-ons/">
                Over ons <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <div className="mt-12">
            <TeamGrid />
          </div>
        </div>
      </section>

      <Reviews />

      <FaqSection items={home.faq.items} eyebrow={home.faq.eyebrow} title={home.faq.title} />

      <CtaBand />
    </>
  );
}
