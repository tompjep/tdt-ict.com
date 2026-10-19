import { Icon } from "@/components/icon";
import { Reveal } from "@/components/motion/reveal";
import type { Feature } from "@/content/site";
import { cn } from "@/lib/utils";

export function FeatureGrid({ items, columns = 3, tone = "light" }: { items: Feature[]; columns?: 2 | 3 | 4; tone?: "light" | "dark" }) {
  return (
    <ul
      className={cn(
        "grid gap-4 sm:grid-cols-2 sm:gap-5",
        columns === 3 && "lg:grid-cols-3",
        columns === 4 && "lg:grid-cols-4",
      )}
    >
      {items.map((item, i) => (
        <Reveal as="li" key={item.title} delay={Math.min(i, 6) * 0.05}>
          <div
            className={cn(
              "group h-full rounded-card p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5",
              tone === "light"
                ? "border border-line bg-white shadow-soft hover:border-navy/15 hover:shadow-lift"
                : "border border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07]",
            )}
          >
            <span
              className={cn(
                "grid size-11 place-items-center rounded-xl transition-colors",
                tone === "light"
                  ? "bg-accent-tint text-accent-strong group-hover:bg-accent-strong group-hover:text-white"
                  : "bg-accent/15 text-accent-soft",
              )}
            >
              <Icon name={item.icon} className="size-5" />
            </span>
            <h3 className={cn("mt-5 text-lg font-semibold", tone === "dark" && "text-white")}>{item.title}</h3>
            <p className="mt-2 leading-relaxed">{item.text}</p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
