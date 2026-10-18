import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/motion/reveal";
import { audiences } from "@/content/site";

export function AudienceCards() {
  return (
    <ul className="grid gap-5 md:grid-cols-3">
      {audiences.map((a, i) => (
        <Reveal as="li" key={a.slug} delay={i * 0.08}>
          <Link
            href={a.href}
            className="group flex h-full flex-col rounded-card border border-line bg-white p-7 shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-navy/15 hover:shadow-lift"
          >
            <span className="grid size-12 place-items-center rounded-xl bg-navy text-white transition-colors group-hover:bg-accent-strong">
              <Icon name={a.icon} className="size-6" />
            </span>
            <h3 className="mt-6 text-xl font-semibold">{a.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {a.bullets.map((b) => (
                <li key={b} className="flex gap-2.5 leading-snug">
                  <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent-strong" strokeWidth={3} />
                  {b}
                </li>
              ))}
            </ul>
            <span className="mt-auto inline-flex items-center gap-1.5 pt-7 text-sm font-semibold text-accent-strong">
              Meer informatie
              <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
