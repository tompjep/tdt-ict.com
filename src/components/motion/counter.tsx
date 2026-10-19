"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type CounterProps = { value: number; from?: number; suffix?: string; duration?: number; className?: string };

/**
 * Telt op naar `value` zodra het getal in beeld komt.
 * De eindwaarde staat al in de HTML (goed voor SEO en zonder JavaScript).
 */
export function Counter({ value, from = 0, suffix = "", duration = 1.4, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(value);
  const armed = useRef(false);

  // Alleen terugzetten naar de startwaarde als het getal nog niet in beeld is
  useEffect(() => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    if (rect.top > window.innerHeight) {
      armed.current = true;
      setDisplay(from);
    }
  }, [from, reduceMotion]);

  useEffect(() => {
    if (!inView || !armed.current) return;
    armed.current = false;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(from + (value - from) * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, from, value, duration]);

  return (
    <span ref={ref} className={className}>
      <span aria-hidden="true">
        {display}
        {suffix}
      </span>
      <span className="sr-only">
        {value}
        {suffix}
      </span>
    </span>
  );
}
