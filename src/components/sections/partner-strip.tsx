import { partnerOrder, partners, type PartnerId } from "@/content/site";
import { cn } from "@/lib/utils";

type PartnerStripProps = { ids?: PartnerId[]; label?: string; className?: string; variant?: "strip" | "cards" };

/** Partnerlogo's: grijstinten, kleur bij hover. Elk logo één keer. */
export function PartnerStrip({ ids = partnerOrder, label, className, variant = "strip" }: PartnerStripProps) {
  const unique = Array.from(new Set(ids));
  if (!unique.length) return null;

  if (variant === "cards") {
    return (
      <ul className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
        {unique.map((id) => {
          const p = partners[id];
          return (
            <li key={id} className="card group flex flex-col gap-4 p-6">
              {/* eslint-disable-next-line @next/next/no-img-element -- statische SVG, geen optimalisatie nodig */}
              <img
                src={p.logo}
                alt={`Logo van ${p.name}`}
                width={p.width}
                height={32}
                loading="lazy"
                className="h-8 w-auto self-start opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              />
              <p className="text-[0.9375rem] leading-relaxed">{p.description}</p>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className={className}>
      {label && <p className="text-center text-sm font-medium text-body">{label}</p>}
      <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
        {unique.map((id) => {
          const p = partners[id];
          return (
            <li key={id}>
              {/* eslint-disable-next-line @next/next/no-img-element -- statische SVG, geen optimalisatie nodig */}
              <img
                src={p.logo}
                alt={`Logo van ${p.name}`}
                width={p.width}
                height={32}
                loading="lazy"
                className="h-7 w-auto opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-8"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
