import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { PageHero } from "@/components/sections/page-hero";
import { PartnerStrip } from "@/components/sections/partner-strip";
import { SectionHeading } from "@/components/sections/section-heading";
import { Steps } from "@/components/sections/steps";
import { TeamGrid } from "@/components/sections/team-grid";
import { StatsRow } from "@/components/sections/why-us";
import { Button } from "@/components/ui/button";
import { NetworkMesh } from "@/components/visuals/network-mesh";
import { about, company, cta, home } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ ...about.seo, path: "/over-ons/" });

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={about.hero.eyebrow}
        title={about.hero.title}
        intro={about.hero.intro}
        crumbs={[{ label: "Over ons", href: "/over-ons/" }]}
      >
        <Button asChild size="lg">
          <Link href={cta.primary.href}>
            {cta.primary.label} <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </PageHero>

      <section className="section pt-8 sm:pt-10" aria-labelledby="story-title">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <h2 id="story-title" className="text-3xl font-semibold sm:text-4xl">
              {about.story.title}
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed">
              {about.story.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <Reveal>
            <figure className="dark-section relative overflow-hidden rounded-card bg-navy p-8 sm:p-12">
              <NetworkMesh tone="dark" seed={8} density={24} />
              <p className="relative eyebrow">Onze missie</p>
              <blockquote className="relative mt-4 text-3xl leading-tight font-semibold tracking-tight text-white sm:text-4xl">
                “{company.mission}”
              </blockquote>
              <figcaption className="relative mt-6 text-on-dark">
                Het team van {company.name}
              </figcaption>
            </figure>
          </Reveal>
        </div>
        <div className="container-site mt-16">
          <StatsRow />
        </div>
      </section>

      <section className="section bg-surface" aria-labelledby="values-title">
        <div className="container-site">
          <SectionHeading id="values-title" eyebrow="Waarden" title={about.values.title} />
          <div className="mt-12">
            <FeatureGrid items={about.values.items} />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="team-title">
        <div className="container-site">
          <SectionHeading id="team-title" eyebrow="Team" title={about.team.title} text={about.team.text} />
          <TeamGrid showBio className="mt-12" />
        </div>
      </section>

      <section className="section border-t border-line" aria-labelledby="process-title">
        <div className="container-site">
          <SectionHeading id="process-title" eyebrow={home.process.eyebrow} title={home.process.title} text={home.process.text} align="center" />
          <div className="mt-14">
            <Steps steps={home.process.steps} />
          </div>
          <div className="mt-20">
            <PartnerStrip label={home.partners.label} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
