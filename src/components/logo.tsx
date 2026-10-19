import { cn } from "@/lib/utils";

/**
 * Logo van TDT-ICT.
 * - /logo.webp: zwart + oranje, voor lichte achtergronden
 * - /logo-light.webp: wit + oranje, voor donkere (navy) achtergronden
 * Bronbestanden (PNG) staan ernaast in /public; vervang beide als het logo wijzigt.
 * [PLACEHOLDER: vervang door een SVG-versie van het logo zodra die beschikbaar is (scherper en kleiner)]
 */
export function Logo({ className, tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- statische export; klein, al geoptimaliseerd bestand
    <img
      src={tone === "dark" ? "/logo-light.webp" : "/logo.webp"}
      alt="TDT-ICT"
      width={540}
      height={160}
      decoding="async"
      className={cn("h-11 w-auto sm:h-12", className)}
    />
  );
}

/** Alleen het beeldmerk (knooppunten-icoon) */
export function LogoMark({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- statische export; decoratief icoon
    <img src="/favicon-64.png" alt="" width={64} height={64} decoding="async" className={cn("size-8", className)} />
  );
}
