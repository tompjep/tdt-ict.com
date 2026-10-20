"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Link naar de homepage (logo). Sta je al op de homepage, dan scrollt hij naar boven:
 * Next.js doet zelf niets bij een klik op de URL waar je al bent.
 */
export function HomeLink({ className, children }: { className?: string; children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <Link
      href="/"
      className={className}
      onClick={(e) => {
        if (pathname !== "/") return;
        e.preventDefault();
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
      }}
    >
      {children}
    </Link>
  );
}
