import { cn } from "@/lib/utils";

/**
 * [PLACEHOLDER: logo.svg] Tijdelijk logo: oranje knooppunten-icoon + woordmerk "TDT" (navy) "ICT" (oranje).
 * Vervang dit door het aangeleverde SVG-logo: zet het bestand in /public/logo.svg
 * en vervang de inhoud van deze component door <img src="/logo.svg" alt="TDT-ICT" width=".." height=".." />.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" className={cn("size-8", className)}>
      <g stroke="#E94E19" strokeWidth="2" strokeLinecap="round">
        <line x1="8" y1="9" x2="22" y2="6" />
        <line x1="8" y1="9" x2="16" y2="17" />
        <line x1="22" y1="6" x2="16" y2="17" />
        <line x1="16" y1="17" x2="26" y2="21" />
        <line x1="16" y1="17" x2="8" y2="25" />
        <line x1="26" y1="21" x2="20" y2="27" />
      </g>
      <g fill="#E94E19">
        <circle cx="8" cy="9" r="3.2" />
        <circle cx="22" cy="6" r="2.6" />
        <circle cx="16" cy="17" r="3.8" />
        <circle cx="26" cy="21" r="2.6" />
        <circle cx="8" cy="25" r="2.6" />
        <circle cx="20" cy="27" r="2" />
      </g>
    </svg>
  );
}

export function Logo({ className, tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <LogoMark />
      <span className="sr-only">TDT-ICT</span>
      <span aria-hidden="true" className="text-[1.375rem] leading-none font-bold tracking-[-0.03em]">
        <span className={tone === "dark" ? "text-white" : "text-navy-deep"}>TDT</span>
        <span className={tone === "dark" ? "text-accent-soft" : "text-accent"}>ICT</span>
      </span>
    </span>
  );
}
