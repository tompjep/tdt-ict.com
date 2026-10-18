"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Menu, Phone } from "lucide-react";
import { audiences, company, cta, navigation, services } from "@/content/site";
import { Icon } from "@/components/icon";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function MobileMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const linkClass = (href: string) =>
    cn(
      "flex items-center gap-3 rounded-xl px-3 py-2.5 text-[0.9375rem] font-medium text-heading hover:bg-surface",
      pathname.startsWith(href.replace(/\/$/, "")) && href !== "/" && "bg-surface text-accent-strong",
    );

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Menu openen">
          <Menu aria-hidden="true" className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent aria-describedby="mobile-menu-description">
        <div className="flex h-18 shrink-0 items-center border-b border-line px-5">
          <SheetTitle asChild>
            <span>
              <Logo />
            </span>
          </SheetTitle>
          <SheetDescription id="mobile-menu-description" className="sr-only">
            Navigatie van de website
          </SheetDescription>
        </div>
        <nav aria-label="Mobiel menu" className="flex-1 overflow-y-auto px-3 py-4">
          <p className="px-3 pb-1 text-xs font-semibold tracking-wider text-body uppercase">Diensten</p>
          <ul>
            {services.map((s) => (
              <li key={s.slug}>
                <SheetClose asChild>
                  <Link href={`/diensten/${s.slug}/`} className={linkClass(`/diensten/${s.slug}/`)}>
                    <Icon name={s.icon} className="size-[18px] text-accent-strong" />
                    {s.shortTitle}
                  </Link>
                </SheetClose>
              </li>
            ))}
            <li>
              <SheetClose asChild>
                <Link href="/diensten/" className="block px-3 py-2 text-sm font-semibold text-accent-strong">
                  Alle diensten bekijken
                </Link>
              </SheetClose>
            </li>
          </ul>
          <p className="mt-4 px-3 pb-1 text-xs font-semibold tracking-wider text-body uppercase">Voor wie</p>
          <ul>
            {audiences.map((a) => (
              <li key={a.slug}>
                <SheetClose asChild>
                  <Link href={a.href} className={linkClass(a.href)}>
                    <Icon name={a.icon} className="size-[18px] text-navy" />
                    {a.title}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
          <ul className="mt-4 border-t border-line pt-4">
            {navigation.main
              .filter((item) => !item.menu)
              .map((item) => (
                <li key={item.href}>
                  <SheetClose asChild>
                    <Link href={item.href} className={linkClass(item.href)}>
                      {item.label}
                    </Link>
                  </SheetClose>
                </li>
              ))}
          </ul>
        </nav>
        <div className="space-y-3 border-t border-line p-5">
          <SheetClose asChild>
            <Button asChild size="lg" className="w-full">
              <Link href={cta.primary.href}>{cta.primary.label}</Link>
            </Button>
          </SheetClose>
          <div className="flex gap-2">
            <Button asChild variant="outline" className="flex-1">
              <a href={company.contact.phoneHref}>
                <Phone aria-hidden="true" /> Bellen
              </a>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <a href={company.contact.emailHref}>
                <Mail aria-hidden="true" /> Mailen
              </a>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
