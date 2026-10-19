import { partnerOrder, partners, type Partner, type PartnerId } from "@/content/site";
import { cn } from "@/lib/utils";

type PartnerStripProps = { ids?: PartnerId[]; label?: string; className?: string; variant?: "strip" | "cards" };

function PartnerLogo({ partner, className }: { partner: Partner; className?: string }) {
  const { src, width, height, displayHeight } = partner.logo;
  return (
    // eslint-disable-next-line @next/next/no-img-element -- statische export, logo's zijn al geoptimaliseerd
    <img
      src={src}
      alt={`Logo van ${partner.name}`}
      width={Math.round((width / height) * displayHeight)}
      height={displayHeight}
      loading="lazy"
      decoding="async"
      style={{ height: displayHeight }}
      className={cn("w-auto max-w-none opacity-60 grayscale transition duration-300", className)}
    />
  );
}

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
              <div className="flex h-9 items-center">
                <PartnerLogo partner={p} className="group-hover:opacity-100 group-hover:grayscale-0" />
              </div>
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
            <li key={id} className="flex h-9 items-center">
              <PartnerLogo partner={p} className="hover:opacity-100 hover:grayscale-0" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
