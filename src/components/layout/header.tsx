"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Icon } from "@/components/icon";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navTriggerClasses,
} from "@/components/ui/navigation-menu";
import type { NavData } from "@/lib/nav-data";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./mobile-menu";

const isActive = (pathname: string, href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, "")));

export function Header({ nav }: { nav: NavData }) {
  const { services, audiences, cta } = nav;
  const pathname = usePathname() ?? "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const servicesActive = pathname.startsWith("/diensten");
  const audiencesActive = audiences.some((a) => isActive(pathname, a.href));

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-300",
        scrolled ? "bg-white/95 shadow-header backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="container-site flex h-18 items-center justify-between gap-4">
        <Link href="/" className="-m-1 rounded-lg p-1">
          <Logo />
          <span className="sr-only">, naar de homepage</span>
        </Link>

        <NavigationMenu className="hidden lg:flex" aria-label="Hoofdmenu">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={cn(servicesActive && "text-accent-strong")}>Diensten</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[min(760px,calc(100vw-4rem))] p-3">
                  <ul className="grid grid-cols-2 gap-1">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <NavigationMenuLink asChild active={pathname.startsWith(`/diensten/${s.slug}`)}>
                          <Link
                            href={`/diensten/${s.slug}/`}
                            className="group flex items-start gap-3.5 rounded-xl p-3 transition-colors hover:bg-surface data-[active]:bg-surface"
                          >
                            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-accent-tint text-accent-strong transition-colors group-hover:bg-accent-strong group-hover:text-white">
                              <Icon name={s.icon} className="size-5" />
                            </span>
                            <span>
                              <span className="block text-[0.9375rem] font-semibold text-heading">{s.shortTitle}</span>
                              <span className="mt-0.5 block text-sm leading-snug text-body">{s.menuDescription}</span>
                            </span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 flex items-center justify-between gap-4 rounded-xl bg-surface px-4 py-3.5">
                    <p className="text-sm text-body">
                      <span className="font-semibold text-heading">Niet zeker wat je nodig hebt?</span> We denken gratis met je mee.
                    </p>
                    <div className="flex items-center gap-4">
                      <NavigationMenuLink asChild>
                        <Link href="/diensten/" className="text-sm font-semibold text-heading hover:text-accent-strong">
                          Alle diensten
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href={cta.href}
                          className="inline-flex items-center gap-1 text-sm font-semibold text-accent-strong hover:underline"
                        >
                          {cta.short} <ArrowRight aria-hidden="true" className="size-4" />
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className={cn(audiencesActive && "text-accent-strong")}>Voor wie</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[380px] p-3">
                  {audiences.map((a) => (
                    <li key={a.slug}>
                      <NavigationMenuLink asChild active={isActive(pathname, a.href)}>
                        <Link
                          href={a.href}
                          className="group flex items-start gap-3.5 rounded-xl p-3 transition-colors hover:bg-surface data-[active]:bg-surface"
                        >
                          <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-navy/5 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                            <Icon name={a.icon} className="size-5" />
                          </span>
                          <span>
                            <span className="block text-[0.9375rem] font-semibold text-heading">{a.title}</span>
                            <span className="mt-0.5 block text-sm leading-snug text-body">{a.menuDescription}</span>
                          </span>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {nav.main
              .filter((item) => !item.menu)
              .map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild active={isActive(pathname, item.href)}>
                    <Link
                      href={item.href}
                      aria-current={isActive(pathname, item.href) ? "page" : undefined}
                      className={navTriggerClasses}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <a
            href={nav.phoneHref}
            className="hidden items-center gap-2 rounded-lg px-3 py-2 text-[0.9375rem] font-semibold text-heading hover:bg-navy/5 xl:inline-flex"
          >
            <Phone aria-hidden="true" className="size-4 text-accent-strong" />
            <span className="sr-only">Bel ons: </span>
            {nav.phoneDisplay}
          </a>
          <Button asChild className="hidden sm:inline-flex">
            <Link href={cta.href}>{cta.short}</Link>
          </Button>
          <MobileMenu nav={nav} pathname={pathname} />
        </div>
      </div>
    </header>
  );
}
