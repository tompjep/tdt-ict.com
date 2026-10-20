import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/motion/reveal";
import { NetworkMesh } from "@/components/visuals/network-mesh";
import { home, services } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Bento-grid (4 kolommen × 3 rijen op desktop):
 *   [ A A ][ s ][ s ]
 *   [ A A ][ B   B ]
 *   [ s ][ s ][ B   B ]
 * A en B zijn de 'featured' diensten uit het contentbestand.
 */
const featuredPlacement = [
  "md:col-span-2 lg:col-start-1 lg:row-start-1 lg:row-span-2",
  "md:col-span-2 lg:col-start-3 lg:row-start-2 lg:row-span-2",
];

export function ServiceBento() {
  const featured = home.services.featured as readonly string[];
  return (
    <ul className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-flow-dense lg:grid-cols-4 lg:grid-rows-[repeat(3,minmax(0,1fr))]">
      {services.map((service, i) => {
        const featuredIndex = featured.indexOf(service.slug);
        const isFeatured = featuredIndex !== -1;
        return (
          <Reveal as="li" key={service.slug} delay={i * 0.05} className={cn(isFeatured && featuredPlacement[featuredIndex])}>
            <Link
              href={`/diensten/${service.slug}/`}
              className={cn(
                "group relative flex h-full flex-col overflow-hidden rounded-card border p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 sm:p-7",
                isFeatured
                  ? featuredIndex === 0
                    ? "dark-section border-navy bg-navy text-on-dark hover:shadow-lift"
                    : "border-line bg-gradient-to-br from-white to-surface shadow-soft hover:border-navy/15 hover:shadow-lift"
                  : "border-line bg-white shadow-soft hover:border-navy/15 hover:shadow-lift",
              )}
            >
              {isFeatured && (
                <NetworkMesh
                  tone={featuredIndex === 0 ? "dark" : "light"}
                  seed={featuredIndex + 40}
                  density={26}
                  className="[mask-image:linear-gradient(to_top_left,black,transparent_65%)]"
                />
              )}
              <div className="relative flex items-start justify-between gap-4">
                <span
                  className={cn(
                    "grid place-items-center rounded-xl transition-colors",
                    isFeatured ? "size-12" : "size-11",
                    featuredIndex === 0
                      ? "bg-accent text-white"
                      : "bg-accent-tint text-accent-strong group-hover:bg-accent-strong group-hover:text-white",
                  )}
                >
                  <Icon name={service.icon} className={isFeatured ? "size-6" : "size-5"} />
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className={cn(
                    "size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                    featuredIndex === 0 ? "text-on-dark" : "text-body",
                  )}
                />
              </div>
              {isFeatured && service.image && (
                // Loopt door tot de rechterrand van de tegel en wordt daar afgesneden ("peek")
                <div className="relative mt-6 -mr-6 overflow-hidden rounded-l-xl border-y border-l border-white/10 shadow-lift sm:mt-8 sm:-mr-7">
                  {/* eslint-disable-next-line @next/next/no-img-element -- statische export; afbeelding is al geoptimaliseerd (WebP) */}
                  <img
                    src={service.image.src}
                    srcSet={service.image.srcSet}
                    sizes="(min-width: 1024px) 900px, 160vw"
                    width={service.image.width}
                    height={service.image.height}
                    alt={service.image.alt}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-[165%] max-w-none"
                  />
                </div>
              )}
              <div className={cn("relative mt-auto pt-8", isFeatured && !service.image && "lg:pt-16")}>
                <h3 className={cn("font-semibold", isFeatured ? "text-2xl sm:text-[1.75rem]" : "text-lg", featuredIndex === 0 && "text-white")}>
                  {service.title}
                </h3>
                <p className={cn("mt-2 leading-relaxed", isFeatured && "max-w-md text-[1.0625rem]")}>{service.summary}</p>
                {isFeatured && (
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Onderdelen van ${service.shortTitle}`}>
                    {service.features.slice(0, 4).map((f) => (
                      <li
                        key={f.title}
                        className={cn(
                          "rounded-full px-3 py-1 text-[0.8125rem] font-medium",
                          featuredIndex === 0 ? "bg-white/10 text-white" : "border border-line bg-white text-heading",
                        )}
                      >
                        {f.title}
                      </li>
                    ))}
                  </ul>
                )}
                <span
                  className={cn(
                    "mt-5 inline-flex text-sm font-semibold",
                    featuredIndex === 0 ? "text-accent-soft" : "text-accent-strong",
                  )}
                >
                  Bekijk {service.shortTitle}
                </span>
              </div>
            </Link>
          </Reveal>
        );
      })}
    </ul>
  );
}
