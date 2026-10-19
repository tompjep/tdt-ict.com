import type { Metadata } from "next";
import { LegalContent } from "@/components/sections/legal-content";
import { getLegalPage } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";

const page = getLegalPage("voorwaarden");

export const metadata: Metadata = pageMetadata({ ...page.seo, path: "/voorwaarden/" });

export default function VoorwaardenPage() {
  return <LegalContent slug="voorwaarden" />;
}
