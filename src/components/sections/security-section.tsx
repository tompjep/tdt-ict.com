import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NetworkMesh } from "@/components/visuals/network-mesh";
import { home } from "@/content/site";
import { FeatureGrid } from "./feature-grid";

export function SecuritySection() {
  const { security } = home;
  return (
    <section className="dark-section section relative overflow-hidden bg-navy text-on-dark" aria-labelledby="security-title">
      <NetworkMesh tone="dark" seed={12} density={44} className="[mask-image:linear-gradient(to_right,transparent,black_60%)]" />
      <div className="container-site relative grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow">{security.eyebrow}</p>
          <h2 id="security-title" className="mt-3 text-3xl font-semibold text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            {security.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed">{security.text}</p>
          <div className="mt-8 flex items-center gap-4">
            <span className="grid size-14 place-items-center rounded-2xl border border-white/10 bg-white/5">
              <ShieldCheck aria-hidden="true" className="size-7 text-accent-soft" />
            </span>
            <Button asChild variant="outline-dark">
              <Link href={security.link.href}>
                {security.link.label} <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
        <FeatureGrid items={security.items} columns={2} tone="dark" />
      </div>
    </section>
  );
}
