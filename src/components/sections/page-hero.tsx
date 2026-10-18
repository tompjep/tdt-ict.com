import { NetworkMesh } from "@/components/visuals/network-mesh";
import { Icon, type IconName } from "@/components/icon";
import { cn } from "@/lib/utils";
import type { Crumb } from "@/lib/seo";
import { Breadcrumbs } from "./breadcrumbs";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  intro: string;
  crumbs: Crumb[];
  icon?: IconName;
  children?: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
};

/** Hero voor subpagina's. Schuift onder de transparante header (−mt-18). */
export function PageHero({ eyebrow, title, intro, crumbs, icon, children, aside, className }: PageHeroProps) {
  return (
    <section className={cn("relative -mt-18 overflow-hidden bg-gradient-to-b from-surface to-white pt-18", className)}>
      <NetworkMesh seed={title.length * 13} density={34} className="[mask-image:linear-gradient(to_bottom,black_30%,transparent)] opacity-80" />
      <div className="container-site relative pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pb-24">
        <Breadcrumbs items={crumbs} />
        <div className={cn("mt-10 grid gap-10", aside && "lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-16")}>
          <div className="max-w-3xl">
            {(eyebrow || icon) && (
              <p className="eyebrow">
                {icon && (
                  <span className="grid size-8 place-items-center rounded-lg bg-white text-accent-strong shadow-soft">
                    <Icon name={icon} className="size-4" />
                  </span>
                )}
                {eyebrow}
              </p>
            )}
            <h1 className="mt-4 text-4xl leading-[1.08] font-bold sm:text-5xl lg:text-[3.5rem]">{title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed sm:text-xl">{intro}</p>
            {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
          </div>
          {aside}
        </div>
      </div>
    </section>
  );
}
