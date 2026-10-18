import { CircleAlert } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

export function ProblemList({ title = "Herken je dit?", items }: { title?: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
      <ul className="mt-6 space-y-3">
        {items.map((item, i) => (
          <Reveal as="li" key={item} delay={i * 0.05}>
            <div className="flex gap-3.5 rounded-xl border border-line bg-white p-4 leading-relaxed text-heading">
              <CircleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent" />
              {item}
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
