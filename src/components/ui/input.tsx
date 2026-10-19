import * as React from "react";
import { cn } from "@/lib/utils";

export const fieldClasses =
  "w-full rounded-xl border border-line bg-white px-4 text-[0.9375rem] text-heading shadow-[0_1px_2px_rgb(16_24_40/0.04)] transition-[border-color,box-shadow] placeholder:text-body/70 hover:border-navy/25 focus-visible:border-accent-strong focus-visible:ring-4 focus-visible:ring-accent/15 focus-visible:outline-none aria-[invalid=true]:border-[#B42318] aria-[invalid=true]:ring-[#B42318]/10";

function Input({ className, ...props }: React.ComponentProps<"input">) {
  return <input data-slot="input" className={cn(fieldClasses, "h-12", className)} {...props} />;
}

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return <textarea data-slot="textarea" className={cn(fieldClasses, "min-h-36 py-3", className)} {...props} />;
}

function NativeSelect({ className, children, ...props }: React.ComponentProps<"select">) {
  return (
    <div className="relative">
      <select data-slot="select" className={cn(fieldClasses, "h-12 appearance-none pr-10", className)} {...props}>
        {children}
      </select>
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-body"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="m5 7.5 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return <label data-slot="label" className={cn("mb-1.5 block text-sm font-medium text-heading", className)} {...props} />;
}

export { Input, Textarea, NativeSelect, Label };
