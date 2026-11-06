import Link from "next/link";
import type { ComponentProps } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { cta, type Package, type PackageExtra } from "@/content/site";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./section-heading";

/** Externe links (zoals het klantenportaal) als gewone <a>, interne via next/link */
function SmartLink({ href, ...props }: ComponentProps<"a"> & { href: string }) {
  return href.startsWith("http") ? <a href={href} rel="noopener" {...props} /> : <Link href={href} {...props} />;
}

type PackagesProps = { title: string; intro: string; items: Package[]; extras?: PackageExtra[] };

export function Packages({ title, intro, items, extras }: PackagesProps) {
  return (
    <section className="section bg-surface" aria-labelledby="packages-title">
      <div className="container-site">
        <SectionHeading id="packages-title" eyebrow="Pakketten" title={title} text={intro} align="center" />
        <ul className={cn("mt-12 grid gap-5", items.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "lg:grid-cols-3")}>
          {items.map((pkg, i) => (
            <Reveal as="li" key={pkg.name} delay={i * 0.08}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-card border bg-white p-7 shadow-soft",
                  pkg.highlighted ? "border-accent-strong ring-4 ring-accent/10" : "border-line",
                )}
              >
                {pkg.highlighted && (
                  <span className="absolute -top-3 left-7 rounded-full bg-accent-strong px-3 py-1 text-xs font-semibold text-white">
                    Aanbevolen
                  </span>
                )}
                <h3 className="text-xl font-semibold">{pkg.name}</h3>
                <p className="mt-2 leading-relaxed">{pkg.description}</p>
                <p className="mt-6">
                  <span className="text-2xl font-bold tracking-tight text-heading">{pkg.price}</span>{" "}
                  <span className="text-sm">{pkg.priceNote}</span>
                </p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-2.5 leading-snug">
                      <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent-strong" strokeWidth={3} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild variant={pkg.highlighted ? "primary" : "outline"} className="mt-8 w-full">
                  <SmartLink href={pkg.href ?? cta.primary.href}>{pkg.ctaLabel ?? "Vraag een voorstel aan"}</SmartLink>
                </Button>
              </div>
            </Reveal>
          ))}
        </ul>

        {extras && extras.length > 0 && (
          <ul className="mt-5 grid gap-5 lg:grid-cols-3">
            {extras.map((extra, i) => (
              <Reveal as="li" key={extra.title} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-soft">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-lg font-semibold">{extra.title}</h3>
                    <p className="shrink-0 text-right">
                      <span className="font-bold text-heading">{extra.price}</span>
                      {extra.priceNote && <span className="text-sm"> {extra.priceNote}</span>}
                    </p>
                  </div>
                  <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed">{extra.text}</p>
                  <Button asChild variant="link" className="mt-4 h-auto self-start px-0">
                    <SmartLink href={extra.href}>{extra.ctaLabel} →</SmartLink>
                  </Button>
                </div>
              </Reveal>
            ))}
          </ul>
        )}

        <p className="mt-8 text-center text-sm">Alle prijzen zijn exclusief btw.</p>
      </div>
    </section>
  );
}
