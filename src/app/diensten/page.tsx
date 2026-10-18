import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { PartnerStrip } from "@/components/sections/partner-strip";
import { SectionHeading } from "@/components/sections/section-heading";
import { ServiceBento } from "@/components/sections/service-bento";
import { Steps } from "@/components/sections/steps";
import { Button } from "@/components/ui/button";
import { cta, home, servicesOverview } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ ...servicesOverview.seo, path: "/diensten/" });

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow={servicesOverview.hero.eyebrow}
        title={servicesOverview.hero.title}
        intro={servicesOverview.hero.intro}
        crumbs={[{ label: "Diensten", href: "/diensten/" }]}
      >
        <Button asChild size="lg">
          <Link href={cta.primary.href}>
            {cta.primary.label} <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </PageHero>

      <section className="pb-20 sm:pb-24" aria-label="Alle diensten">
        <div className="container-site">
          <ServiceBento />
        </div>
      </section>

      <section className="border-y border-line py-14" aria-label="Merken waarmee we werken">
        <div className="container-site">
          <PartnerStrip label={home.partners.label} />
        </div>
      </section>

      <section className="section" aria-labelledby="process-title">
        <div className="container-site">
          <SectionHeading id="process-title" eyebrow={home.process.eyebrow} title={home.process.title} text={home.process.text} align="center" />
          <div className="mt-14">
            <Steps steps={home.process.steps} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
