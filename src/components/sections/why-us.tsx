import { Counter } from "@/components/motion/counter";
import { Reveal } from "@/components/motion/reveal";
import { home, stats } from "@/content/site";
import { FeatureGrid } from "./feature-grid";
import { SectionHeading } from "./section-heading";

export function StatsRow() {
  const items = [
    { value: <Counter value={stats.founded.value} from={2010} />, label: "Opgericht" },
    { value: <Counter value={stats.websites.value} suffix={stats.websites.suffix} />, label: "Websites gebouwd en actief" },
    { value: <Counter value={stats.uptime.value} from={80} suffix={stats.uptime.suffix} />, label: "Uptime" },
    { value: <span>{stats.support.value}</span>, label: "Calamiteitenlijn voor vaste klanten" },
  ];
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line lg:grid-cols-4">
      {items.map((item, i) => (
        <Reveal key={item.label} delay={i * 0.06} className="flex flex-col-reverse bg-white p-6 sm:p-8">
          <dt className="mt-2 text-sm leading-snug sm:text-[0.9375rem]">{item.label}</dt>
          <dd className="text-4xl font-bold tracking-[-0.04em] text-heading tabular-nums sm:text-5xl">{item.value}</dd>
        </Reveal>
      ))}
    </dl>
  );
}

export function WhyUs() {
  const { why } = home;
  return (
    <section className="section" aria-labelledby="why-title">
      <div className="container-site">
        <SectionHeading id="why-title" eyebrow={why.eyebrow} title={why.title} text={why.text} />
        <div className="mt-12">
          <StatsRow />
        </div>
        <div className="mt-6">
          <FeatureGrid items={why.usps} />
        </div>
      </div>
    </section>
  );
}
