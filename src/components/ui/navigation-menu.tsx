"use client";

import * as React from "react";
import { NavigationMenu as NavigationMenuPrimitive } from "radix-ui";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

function NavigationMenu({ className, children, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.Root>) {
  return (
    <NavigationMenuPrimitive.Root data-slot="navigation-menu" className={cn("relative z-10 flex items-center", className)} {...props}>
      {children}
      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
        <NavigationMenuPrimitive.Viewport className="relative h-(--radix-navigation-menu-viewport-height) w-(--radix-navigation-menu-viewport-width) origin-top overflow-hidden rounded-card border border-line bg-white shadow-lift transition-[width,height] duration-200 data-[state=closed]:animate-[menu-out_150ms_ease-in] data-[state=open]:animate-[menu-in_180ms_ease-out]" />
      </div>
    </NavigationMenuPrimitive.Root>
  );
}

const NavigationMenuList = ({ className, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.List>) => (
  <NavigationMenuPrimitive.List className={cn("flex items-center gap-0.5", className)} {...props} />
);

const NavigationMenuItem = NavigationMenuPrimitive.Item;

export const navTriggerClasses =
  "group inline-flex h-10 items-center gap-1 rounded-lg px-3.5 text-[0.9375rem] font-medium text-heading transition-colors hover:bg-navy/5 data-[state=open]:bg-navy/5 aria-[current=page]:text-accent-strong";

function NavigationMenuTrigger({ className, children, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger className={cn(navTriggerClasses, className)} {...props}>
      {children}
      <ChevronDown aria-hidden="true" className="size-3.5 text-body transition-transform duration-200 group-data-[state=open]:rotate-180" />
    </NavigationMenuPrimitive.Trigger>
  );
}

function NavigationMenuContent({ className, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return <NavigationMenuPrimitive.Content className={cn("top-0 left-0 w-full md:absolute md:w-auto", className)} {...props} />;
}

const NavigationMenuLink = NavigationMenuPrimitive.Link;

export { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink };
