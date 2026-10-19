import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { company, type Faq } from "@/content/site";
import { faqSchema } from "@/lib/seo";
import { FaqAccordion } from "./faq-accordion";
import { SectionHeading } from "./section-heading";

type FaqSectionProps = { items: Faq[]; eyebrow?: string; title?: string; className?: string };

/** FAQ-accordion inclusief FAQPage structured data */
export function FaqSection({ items, eyebrow = "Veelgestelde vragen", title = "Goed om te weten", className }: FaqSectionProps) {
  if (!items.length) return null;
  const schema = faqSchema(items);
  return (
    <section className={className ?? "section"} aria-labelledby="faq-title">
      <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div>
          <SectionHeading id="faq-title" eyebrow={eyebrow} title={title} />
          <p className="mt-4 leading-relaxed">
            Staat je vraag er niet tussen? Bel{" "}
            <a href={company.contact.phoneHref} className="font-semibold text-accent-strong underline-offset-4 hover:underline">
              {company.contact.phoneDisplay}
            </a>{" "}
            of{" "}
            <Link href="/contact/" className="font-semibold text-accent-strong underline-offset-4 hover:underline">
              stuur ons een bericht
            </Link>
            .
          </p>
        </div>
        <FaqAccordion items={items} />
      </div>
      {schema && <JsonLd data={schema} />}
    </section>
  );
}
