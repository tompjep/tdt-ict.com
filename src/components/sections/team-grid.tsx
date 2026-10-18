import { Reveal } from "@/components/motion/reveal";
import { NetworkMesh } from "@/components/visuals/network-mesh";
import { team, type TeamMember } from "@/content/site";
import { cn } from "@/lib/utils";

function TeamPhoto({ member, index }: { member: TeamMember; index: number }) {
  if (member.photo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- statische export; lever foto's aan als WebP/AVIF
      <img
        src={member.photo}
        alt={member.photoAlt}
        width={480}
        height={560}
        loading="lazy"
        decoding="async"
        className="aspect-[6/7] w-full rounded-[12px] object-cover"
      />
    );
  }
  // [PLACEHOLDER: teamfoto] – tijdelijke weergave met initialen
  return (
    <div
      data-placeholder="teamfoto"
      role="img"
      aria-label={`${member.photoAlt} (foto volgt)`}
      className="relative grid aspect-[6/7] w-full place-items-center overflow-hidden rounded-[12px] bg-gradient-to-br from-navy to-navy-deep"
    >
      <NetworkMesh tone="dark" seed={index * 17 + 5} density={14} animated={false} />
      <span className="relative text-5xl font-semibold tracking-tight text-white/90">{member.initials}</span>
    </div>
  );
}

export function TeamGrid({ showBio = false, className }: { showBio?: boolean; className?: string }) {
  return (
    <ul className={cn("grid gap-5 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {team.map((member, i) => (
        <Reveal as="li" key={member.name} delay={i * 0.08}>
          <article className="group h-full rounded-card border border-line bg-white p-3 shadow-soft transition-shadow duration-300 hover:shadow-lift">
            <TeamPhoto member={member} index={i} />
            <div className="px-3 pt-5 pb-3">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="mt-0.5 text-[0.9375rem] font-medium text-accent-strong">{member.role}</p>
              {showBio && <p className="mt-3 leading-relaxed">{member.bio}</p>}
            </div>
          </article>
        </Reveal>
      ))}
    </ul>
  );
}
