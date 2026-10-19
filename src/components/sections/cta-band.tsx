import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { company, cta } from "@/content/site";
import { Button } from "@/components/ui/button";
import { NetworkMesh } from "@/components/visuals/network-mesh";

type CtaBandProps = { title?: string; text?: string };

export function CtaBand({ title = cta.band.title, text = cta.band.text }: CtaBandProps) {
  return (
    <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8" aria-labelledby="cta-title">
      <div className="dark-section relative mx-auto max-w-[1240px] overflow-hidden rounded-[24px] bg-navy px-6 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
        <NetworkMesh animated tone="dark" seed={99} density={36} />
        <div aria-hidden="true" className="absolute -top-24 -right-24 size-72 rounded-full bg-accent/25 blur-3xl" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 id="cta-title" className="text-3xl font-semibold text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-on-dark">{text}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Button asChild size="lg">
              <Link href={cta.primary.href}>
                {cta.primary.label} <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline-dark">
              <a href={company.contact.phoneHref}>
                <Phone aria-hidden="true" /> {company.contact.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
