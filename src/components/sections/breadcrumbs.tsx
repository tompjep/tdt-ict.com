import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, type Crumb } from "@/lib/seo";

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <nav aria-label="Kruimelpad" className="text-sm">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link href="/" className="text-body hover:text-heading">
              Home
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1.5">
              <ChevronRight aria-hidden="true" className="size-3.5 text-body/60" />
              {i === items.length - 1 ? (
                <span aria-current="page" className="font-medium text-heading">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="text-body hover:text-heading">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(items)} />
    </>
  );
}
