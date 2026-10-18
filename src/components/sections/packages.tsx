import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { cta, type Package } from "@/content/site";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./section-heading";

export function Packages({ title, intro, items }: { title: string; intro: string; items: Package[] }) {
  return (
    <section className="section bg-surface" aria-labelledby="packages-title">
      <div className="container-site">
        <SectionHeading id="packages-title" eyebrow="Pakketten" title={title} text={intro} align="center" />
        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
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
                  <Link href={cta.primary.href}>Vraag een voorstel aan</Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </ul>
        <p className="mt-8 text-center text-sm">Alle prijzen zijn exclusief btw. [PLACEHOLDER: bevestigen]</p>
      </div>
    </section>
  );
}
