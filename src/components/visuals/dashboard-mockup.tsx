import { CheckCircle2, ShieldCheck, Wifi } from "lucide-react";
import { LogoMark } from "@/components/logo";
import { stats } from "@/content/site";

const rows = [
  { label: "Microsoft 365", status: "Operationeel" },
  { label: "Netwerk & wifi", status: "Operationeel" },
  { label: "Firewall", status: "Beveiligd" },
  { label: "Back-up", status: "Voltooid" },
  { label: "Website", status: "Online" },
];

// Vaste, decoratieve balkhoogtes (geen echte meetwaarden)
const bars = [72, 80, 76, 88, 84, 90, 86, 92, 89, 94, 91, 95, 93, 96, 94, 97, 95, 96, 98, 97];

/** Decoratieve UI-mockup van een IT-dashboard (illustratie, geen live data) */
export function DashboardMockup() {
  return (
    <div
      role="img"
      aria-label="Illustratie van een IT-dashboard dat laat zien dat Microsoft 365, netwerk, firewall, back-up en website operationeel zijn"
      className="relative mx-auto w-full max-w-[520px]"
    >
      <div className="absolute -inset-6 -z-10 rounded-[32px] bg-gradient-to-tr from-accent/15 via-transparent to-navy/10 blur-2xl" />
      <div className="overflow-hidden rounded-[20px] border border-line bg-white shadow-lift">
        <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <LogoMark className="size-6" />
            <span className="text-sm font-semibold text-heading">Statusoverzicht</span>
          </div>
          <span className="text-xs text-body">Live</span>
        </div>
        <div className="grid gap-5 p-5 sm:grid-cols-[1.1fr_1fr]">
          <div className="rounded-xl bg-surface p-4">
            <p className="text-xs font-medium text-body">Uptime</p>
            <p className="mt-1 text-3xl font-bold tracking-tight text-heading">
              {stats.uptime.value}
              {stats.uptime.suffix}
            </p>
            <div className="mt-4 flex h-16 items-end gap-[3px]">
              {bars.map((h, i) => (
                <span key={i} className="flex-1 rounded-sm bg-navy/80" style={{ height: `${h}%`, opacity: 0.35 + (i / bars.length) * 0.65 }} />
              ))}
            </div>
          </div>
          <div className="hidden flex-col gap-3 sm:flex">
            <div className="flex items-center gap-3 rounded-xl border border-line p-3">
              <span className="grid size-9 place-items-center rounded-lg bg-[#E7F6EF] text-success">
                <ShieldCheck className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-heading">MFA actief</p>
                <p className="text-xs text-body">Alle accounts</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-line p-3">
              <span className="grid size-9 place-items-center rounded-lg bg-accent-tint text-accent-strong">
                <Wifi className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-heading">Wifi-dekking</p>
                <p className="text-xs text-body">Hele pand</p>
              </div>
            </div>
          </div>
        </div>
        <ul className="divide-y divide-line border-t border-line">
          {rows.map((row) => (
            <li key={row.label} className="flex items-center justify-between px-5 py-3 text-sm">
              <span className="font-medium text-heading">{row.label}</span>
              <span className="inline-flex items-center gap-1.5 font-medium text-success">
                <CheckCircle2 className="size-4" />
                {row.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute -top-5 -right-3 hidden animate-float items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 shadow-lift sm:flex">
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-50" />
          <span className="relative inline-flex size-2.5 rounded-full bg-success" />
        </span>
        <span className="text-sm font-semibold text-heading">Alle systemen operationeel</span>
      </div>
    </div>
  );
}
