import { Quote, Star } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { company, home, reviews } from "@/content/site";
import { SectionHeading } from "./section-heading";

/** Toont alleen echte reviews uit het contentbestand. Zolang die er niet zijn: duidelijke placeholders. */
export function Reviews() {
  const hasReviews = reviews.length > 0;
  return (
    <section className="section bg-surface" aria-labelledby="reviews-title">
      <div className="container-site">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading id="reviews-title" eyebrow={home.reviews.eyebrow} title={home.reviews.title} text={home.reviews.text} />
          {company.googleReviewsUrl && (
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
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {hasReviews
            ? reviews.slice(0, 3).map((review, i) => (
                <Reveal as="li" key={review.author + i} delay={i * 0.08}>
                  <figure className="card flex h-full flex-col p-7">
                    <div className="flex gap-0.5" role="img" aria-label={`${review.rating} van 5 sterren`}>
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} aria-hidden="true" className={s < review.rating ? "size-4 fill-[#F5A524] text-[#F5A524]" : "size-4 text-line"} />
                      ))}
                    </div>
                    <blockquote className="mt-4 flex-1 leading-relaxed text-heading">“{review.text}”</blockquote>
                    <figcaption className="mt-6 text-sm">
                      <span className="font-semibold text-heading">{review.author}</span>
                      {review.context && <span className="block">{review.context}</span>}
                    </figcaption>
                  </figure>
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
      </div>
    </section>
  );
}
