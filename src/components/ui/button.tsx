import * as React from "react";
import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-xl font-semibold whitespace-nowrap transition-[background-color,color,border-color,box-shadow,transform] duration-200 disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary:
          "bg-accent-strong text-white shadow-[0_1px_2px_rgb(16_24_40/0.08),0_6px_16px_-6px_rgb(201_63_18/0.55)] hover:bg-accent-hover active:translate-y-px",
        outline: "border border-line bg-white text-heading shadow-soft hover:border-navy/30 hover:bg-surface",
        navy: "bg-navy text-white hover:bg-navy-800",
        ghost: "text-heading hover:bg-surface",
        "outline-dark": "border border-white/25 bg-white/5 text-white hover:border-white/50 hover:bg-white/10",
        link: "rounded-md px-0 text-accent-strong underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-3.5 text-sm",
        md: "h-11 px-5 text-[0.9375rem]",
        lg: "h-13 px-6 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "button";
  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
