import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { cta, home } from "@/content/site";
import { Button } from "@/components/ui/button";
import { NetworkMesh } from "@/components/visuals/network-mesh";
import { DashboardMockup } from "@/components/visuals/dashboard-mockup";

export function HomeHero() {
  const { hero } = home;
  return (
    <section className="relative -mt-18 overflow-hidden bg-gradient-to-b from-surface via-surface to-white pt-18" aria-labelledby="hero-title">
      <NetworkMesh animated seed={3} density={48} className="[mask-image:radial-gradient(ellipse_at_70%_40%,black_20%,transparent_75%)]" />
      <div className="container-site relative grid items-center gap-14 pt-12 pb-20 sm:pt-16 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:pt-20 lg:pb-28">
        <div className="hero-enter">
          <p className="eyebrow">
            <span className="h-px w-6 bg-accent" aria-hidden="true" />
            {hero.eyebrow}
          </p>
          <h1 id="hero-title" className="mt-5 text-[2.75rem] leading-[1.02] font-bold sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]">
            Slim, veilig &amp; <span className="relative whitespace-nowrap text-accent-strong">altijd online</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed sm:text-xl">{hero.text}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href={cta.primary.href}>
                {cta.primary.label} <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={cta.services.href}>{cta.services.label}</Link>
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap gap-2.5" aria-label="Waarom TDT-ICT">
            {hero.chips.map((chip) => (
              <li
                key={chip}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium text-heading shadow-[0_1px_2px_rgb(16_24_40/0.04)]"
              >
                <Check aria-hidden="true" className="size-3.5 text-accent-strong" strokeWidth={3} />
                {chip}
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-enter [animation-delay:120ms]">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
