import { Quote, Star } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { company, home, reviews, type Review } from "@/content/site";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./section-heading";

function Stars({ rating, className }: { rating: number; className?: string }) {
  return (
    <div className={cn("flex gap-0.5", className)} role="img" aria-label={`${rating} van 5 sterren`}>
      {Array.from({ length: 5 }).map((_, s) => (
        <Star key={s} aria-hidden="true" className={s < rating ? "size-4 fill-[#F5A524] text-[#F5A524]" : "size-4 text-line"} />
      ))}
    </div>
  );
}

/** Voorkomt dat "TDT-ICT" op het streepje over twee regels breekt */
function keepBrandTogether(text: string) {
  return text.split("TDT-ICT").flatMap((part, i) =>
    i === 0
      ? [part]
      : [
          <span key={i} className="whitespace-nowrap">
            TDT-ICT
          </span>,
          part,
        ],
  );
}

function ReviewCard({ review, featured }: { review: Review; featured: boolean }) {
  return (
    <figure className={cn("card relative flex h-full flex-col", featured ? "p-8 sm:p-12" : "p-7")}>
      <Quote aria-hidden="true" className={cn("text-accent/25", featured ? "size-12" : "size-8")} />
      {review.rating && <Stars rating={review.rating} className="mt-4" />}
      <blockquote
        className={cn(
          "mt-4 flex-1 text-heading",
          featured ? "text-lg leading-relaxed font-medium tracking-[-0.01em] sm:text-2xl sm:leading-relaxed" : "leading-relaxed",
        )}
      >
        “{keepBrandTogether(review.text)}”
      </blockquote>
      <figcaption className={cn("flex items-center gap-3", featured ? "mt-8" : "mt-6 text-sm")}>
        <span
          aria-hidden="true"
          className="grid size-11 shrink-0 place-items-center rounded-full bg-navy text-base font-semibold text-white"
        >
          {review.author.charAt(0)}
        </span>
        <span>
          <span className="block font-semibold text-heading">{review.author}</span>
          {review.context && <span className="block text-sm">{review.context}</span>}
        </span>
      </figcaption>
    </figure>
  );
}

/** Toont alleen echte reviews uit het contentbestand. Zolang die er niet zijn: duidelijke placeholders. */
export function Reviews() {
  const shown = reviews.slice(0, 3);
  const single = shown.length === 1;
  return (
    <section className="section bg-surface" aria-labelledby="reviews-title">
      <div className="container-site">
        <div className={cn("flex flex-col gap-6 sm:flex-row sm:items-end", single ? "sm:justify-center" : "sm:justify-between")}>
          <SectionHeading
            id="reviews-title"
            eyebrow={home.reviews.eyebrow}
            title={home.reviews.title}
            text={home.reviews.text}
            align={single ? "center" : "left"}
          />
          {company.googleReviewsUrl && !single && (
            <a
              href={company.googleReviewsUrl}
              className="shrink-0 text-sm font-semibold text-accent-strong underline-offset-4 hover:underline"
              rel="noopener"
              target="_blank"
            >
              Alle reviews op Google<span className="sr-only"> (opent in een nieuw venster)</span>
            </a>
          )}
        </div>
        <ul className={cn("mt-12 grid gap-5", single ? "mx-auto max-w-3xl" : shown.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3")}>
          {shown.length
            ? shown.map((review, i) => (
                <Reveal as="li" key={review.author + i} delay={i * 0.08}>
                  <ReviewCard review={review} featured={single} />
                </Reveal>
              ))
            : [1, 2, 3].map((n) => (
                <li
                  key={n}
                  data-placeholder="review"
                  className="flex min-h-56 flex-col justify-between rounded-card border-2 border-dashed border-navy/15 bg-white/60 p-7"
                >
                  <Quote aria-hidden="true" className="size-8 text-navy/20" />
                  <p className="mt-4 font-mono text-sm text-body">[PLACEHOLDER: echte Google-review {n} toevoegen in src/content/site.ts]</p>
                </li>
              ))}
        </ul>
        {company.googleReviewsUrl && single && (
          <p className="mt-8 text-center">
            <a
              href={company.googleReviewsUrl}
              className="text-sm font-semibold text-accent-strong underline-offset-4 hover:underline"
              rel="noopener"
              target="_blank"
            >
              Alle reviews op Google<span className="sr-only"> (opent in een nieuw venster)</span>
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
