"use client";

import { useState } from "react";
import { ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, contactPage } from "@/content/site";

/** Kaart die pas laadt na een klik: geen externe requests of cookies zonder toestemming */
export function MapEmbed() {
  const [loaded, setLoaded] = useState(false);
  const { address } = company.contact;
  const query = encodeURIComponent(`${address.street}, ${address.postalCode} ${address.city}`);

  return (
    <div className="overflow-hidden rounded-card border border-line bg-surface">
      {loaded ? (
        <iframe
          title={`Kaart met de locatie van ${company.name} aan de ${address.street} in ${address.city}`}
          src={`https://www.google.com/maps?q=${query}&output=embed`}
          className="block aspect-[4/3] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="relative grid aspect-[4/3] place-items-center p-6 text-center">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgb(14_43_61/0.06)_1px,transparent_1px),linear-gradient(90deg,rgb(14_43_61/0.06)_1px,transparent_1px)] [background-size:28px_28px]"
          />
          <div className="relative max-w-xs">
            <span className="mx-auto grid size-12 place-items-center rounded-full bg-accent-strong text-white shadow-lift">
              <MapPin aria-hidden="true" className="size-6" />
            </span>
            <p className="mt-4 text-sm leading-relaxed">{contactPage.map.consent}</p>
            <Button variant="outline" className="mt-4" onClick={() => setLoaded(true)}>
              {contactPage.map.button}
            </Button>
          </div>
        </div>
      )}
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${query}`}
        target="_blank"
        rel="noopener"
        className="flex items-center justify-center gap-1.5 border-t border-line bg-white px-4 py-3 text-sm font-semibold text-accent-strong hover:underline"
      >
        Route plannen <ExternalLink aria-hidden="true" className="size-3.5" />
        <span className="sr-only">(opent Google Maps in een nieuw venster)</span>
      </a>
    </div>
  );
}
