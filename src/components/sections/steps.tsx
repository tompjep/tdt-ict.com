import { Reveal } from "@/components/motion/reveal";
import type { Step } from "@/content/site";

/** Tijdlijn met genummerde stappen: horizontaal op desktop, verticaal op mobiel */
export function Steps({ steps }: { steps: Step[] }) {
  return (
    <ol className="relative grid gap-8 lg:grid-cols-4 lg:gap-6">
      <span aria-hidden="true" className="absolute top-6 bottom-6 left-6 w-px bg-gradient-to-b from-accent/50 via-line to-line lg:top-6 lg:right-[12%] lg:bottom-auto lg:left-[12%] lg:h-px lg:w-auto lg:bg-gradient-to-r" />
      {steps.map((step, i) => (
        <Reveal as="li" key={step.title} delay={i * 0.08} className="relative flex gap-5 lg:flex-col lg:items-center lg:text-center">
          <span className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full border border-line bg-white text-lg font-semibold text-accent-strong shadow-soft">
            {i + 1}
          </span>
          <div className="pt-2 lg:pt-0">
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 leading-relaxed lg:mx-auto lg:max-w-[16rem]">{step.text}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
