import { PageHero } from "@/components/sections/page-hero";
import { company } from "@/content/site";
import { getLegalPage, type LegalPage } from "@/content/legal";

export function LegalContent({ slug }: { slug: LegalPage["slug"] }) {
  const page = getLegalPage(slug);
  return (
    <>
      <PageHero title={page.title} intro={page.intro} crumbs={[{ label: page.title, href: `/${page.slug}/` }]} />
      <section className="pb-24">
        <div className="container-site">
          <article className="prose-legal mx-auto max-w-3xl">
            <p className="text-sm">Laatst bijgewerkt: {page.updated}</p>
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs?.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {section.list && (
                  <ul>
                    {section.list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                )}
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
