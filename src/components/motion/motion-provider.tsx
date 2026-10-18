"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";

/** Laadt alleen de DOM-animatiefeatures van Framer Motion en respecteert prefers-reduced-motion. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
