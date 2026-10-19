import { LogIn, Mail, Phone } from "lucide-react";
import { company, home } from "@/content/site";

export function TopBar() {
  const { contact } = company;
  return (
    <aside aria-label="Calamiteitenlijn" className="dark-section relative z-50 bg-navy-deep text-[0.8125rem] text-on-dark">
      <div className="container-site flex h-10 items-center justify-between gap-2 sm:gap-4">
        <p className="flex min-w-0 items-center gap-2">
          <span className="relative flex size-2 shrink-0" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-soft opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-accent-soft" />
          </span>
          <span className="truncate">
            <span className="hidden sm:inline">{home.topbar.label} </span>
            <span className="sm:hidden">Storing? </span>
            <a href={contact.phoneHref} className="font-semibold whitespace-nowrap text-white underline-offset-4 hover:underline">
              {contact.phoneDisplay}
            </a>
          </span>
        </p>
        <div className="flex shrink-0 items-center gap-5">
          <a href={contact.emailHref} className="hidden items-center gap-1.5 hover:text-white md:inline-flex">
            <Mail aria-hidden="true" className="size-3.5" />
            {contact.email}
          </a>
          <a href={contact.phoneHref} className="hidden items-center gap-1.5 hover:text-white lg:inline-flex">
            <Phone aria-hidden="true" className="size-3.5" />
            <span className="sr-only">Bel </span>
            {contact.phoneDisplay}
          </a>
          <a
            href={company.portal.url}
            className="inline-flex min-h-6 items-center gap-1.5 rounded-md bg-white/10 px-2 py-1 font-semibold text-white hover:bg-white/20 sm:px-2.5"
          >
            <LogIn aria-hidden="true" className="size-3.5" />
            {company.portal.label}
          </a>
        </div>
      </div>
    </aside>
  );
}
