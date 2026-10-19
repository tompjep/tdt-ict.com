import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/icon";
import { services } from "@/content/site";
import { cn } from "@/lib/utils";

/** Compacte lijst met (gerelateerde) diensten */
export function ServiceLinks({ slugs, className }: { slugs: string[]; className?: string }) {
  const items = services.filter((s) => slugs.includes(s.slug));
  return (
    <ul className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((s) => (
        <li key={s.slug}>
          <Link
            href={`/diensten/${s.slug}/`}
            className="group flex h-full items-start gap-4 rounded-card border border-line bg-white p-5 shadow-soft transition-[box-shadow,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-navy/15 hover:shadow-lift"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-tint text-accent-strong transition-colors group-hover:bg-accent-strong group-hover:text-white">
              <Icon name={s.icon} className="size-5" />
            </span>
            <span className="min-w-0">
              <span className="flex items-center gap-1.5 font-semibold text-heading">
                {s.shortTitle}
                <ArrowRight aria-hidden="true" className="size-4 text-body transition-transform group-hover:translate-x-1" />
              </span>
              <span className="mt-1 block text-[0.9375rem] leading-relaxed">{s.summary}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
