import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NetworkMesh } from "@/components/visuals/network-mesh";
import { company, cta } from "@/content/site";

export const metadata = { title: "Pagina niet gevonden", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="relative -mt-18 overflow-hidden bg-gradient-to-b from-surface to-white pt-18">
      <NetworkMesh seed={404} density={36} className="[mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="container-site relative py-24 text-center sm:py-32">
        <p className="eyebrow justify-center">Foutcode 404</p>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Deze pagina bestaat niet (meer)</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed">
          Misschien is de link verouderd of zit er een typfout in. Probeer het via de homepage of neem contact op via{" "}
          <a href={company.contact.phoneHref} className="font-semibold text-accent-strong underline-offset-4 hover:underline">
            {company.contact.phoneDisplay}
          </a>
          .
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/">
              Naar de homepage <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={cta.services.href}>{cta.services.label}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
