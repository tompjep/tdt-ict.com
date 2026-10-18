import { Mail, Phone } from "lucide-react";
import { company, home } from "@/content/site";

export function TopBar() {
  const { contact } = company;
  return (
    <div className="dark-section relative z-50 bg-navy-deep text-[0.8125rem] text-on-dark">
      <div className="container-site flex h-10 items-center justify-between gap-4">
        <p className="flex min-w-0 items-center gap-2">
          <span className="relative flex size-2 shrink-0" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-soft opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-accent-soft" />
          </span>
          <span className="truncate">
            <span className="hidden sm:inline">{home.topbar.label} </span>
            <span className="sm:hidden">Storing? Bel </span>
            <a href={contact.phoneHref} className="font-semibold text-white underline-offset-4 hover:underline">
              {contact.phoneDisplay}
            </a>
          </span>
        </p>
        <div className="hidden items-center gap-5 md:flex">
          <a href={contact.emailHref} className="inline-flex items-center gap-1.5 hover:text-white">
            <Mail aria-hidden="true" className="size-3.5" />
            {contact.email}
          </a>
          <a href={contact.phoneHref} className="inline-flex items-center gap-1.5 hover:text-white">
            <Phone aria-hidden="true" className="size-3.5" />
            <span className="sr-only">Bel </span>
            {contact.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
