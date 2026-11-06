import type { ReactNode } from "react";
import { PageHero } from "@/components/sections/page-hero";
import { company } from "@/content/site";
import { getLegalPage, type LegalBlock, type LegalPage } from "@/content/legal";

/** Maakt URL's en e-mailadressen in een tekst klikbaar */
function linkify(text: string): ReactNode[] {
  const pattern = /(https?:\/\/[^\s,;]+[^\s,;.]|[\w.+-]+@[\w-]+(?:\.[\w-]+)+)/g;
  return text.split(pattern).map((part, i) => {
    if (i % 2 === 0) return part;
    const href = part.includes("@") && !part.startsWith("http") ? `mailto:${part}` : part;
    return (
      <a key={i} href={href} className="font-medium text-accent-strong underline underline-offset-2" {...(href.startsWith("http") && !href.startsWith(company.url) ? { rel: "noopener" } : {})}>
        {part}
      </a>
    );
  });
}

function Paragraph({ text }: { text: string }) {
  const match = /^(\d+\.\d+)\s+(.*)$/s.exec(text);
  if (!match) return <p>{linkify(text)}</p>;
  return (
    <p>
      <span className="mr-1.5 font-semibold text-heading tabular-nums">{match[1]}</span>
      {linkify(match[2])}
    </p>
  );
}

function Block({ block }: { block: LegalBlock }) {
  if (typeof block === "string") return <Paragraph text={block} />;
  if ("h3" in block) return <h3>{block.h3}</h3>;
  return (
    <ul>
      {block.list.map((li, i) => (
        <li key={i}>{linkify(li)}</li>
      ))}
    </ul>
  );
}

export function LegalContent({ slug }: { slug: LegalPage["slug"] }) {
  const page = getLegalPage(slug);
  const meta = [
    page.version && `Versie ${page.version}`,
    page.effective && `ingangsdatum ${page.effective}`,
    `laatst bijgewerkt ${page.updated}`,
  ].filter(Boolean);
  return (
    <>
      <PageHero title={page.title} intro={page.intro} crumbs={[{ label: page.title, href: `/${page.slug}/` }]} />
      <section className="pb-24">
        <div className="container-site">
          <article className="prose-legal mx-auto max-w-3xl">
            <p className="text-sm first-letter:uppercase">{meta.join(" · ")}</p>
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.blocks.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </section>
            ))}
            <p className="mt-12 rounded-xl bg-surface p-5 text-sm">
              Vragen over deze pagina? Mail naar{" "}
              <a href={company.contact.emailHref} className="font-semibold text-accent-strong underline">
                {company.contact.email}
              </a>
              .
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
