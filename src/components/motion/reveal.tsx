"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "article";
};

/**
 * Fade/slide-in bij scrollen.
 * - De server-HTML is altijd zichtbaar (snelle LCP, werkt zonder JavaScript).
 * - Alleen elementen die bij het laden nog onder de vouw staan, worden verborgen
 *   en met een CSS-transitie getoond zodra ze in beeld komen (Framer Motion `useInView`).
 * - Bij prefers-reduced-motion gebeurt er niets.
 */
export function Reveal({ children, className, delay = 0, as: Component = "div" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  // "static" = gewoon zichtbaar; "armed" = bij laden buiten beeld, wacht op scrollen
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    if (reduceMotion || !ref.current) return;
    if (ref.current.getBoundingClientRect().top > window.innerHeight) setArmed(true);
  }, [reduceMotion]);

  const state = !armed ? "static" : inView ? "shown" : "pending";

  return (
    <Component
      ref={ref as React.Ref<never>}
      data-reveal={state}
      style={delay && state !== "static" ? { transitionDelay: `${delay}s` } : undefined}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
