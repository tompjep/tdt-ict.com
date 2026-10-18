import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";
import { company, cta } from "@/content/site";

/** Sticky belknop op mobiel */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white/95 px-4 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_-12px_rgb(16_24_40/0.18)] backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-md gap-2">
        <a
          href={company.contact.phoneHref}
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-navy font-semibold text-white"
        >
          <Phone aria-hidden="true" className="size-4" /> Bel direct
        </a>
        <Link
          href={cta.primary.href}
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-accent-strong font-semibold text-white"
        >
          <CalendarCheck aria-hidden="true" className="size-4" /> Adviesgesprek
        </Link>
      </div>
    </div>
  );
}
