import type { Metadata } from "next";
import { AudiencePage } from "@/components/sections/audience-page";
import { getAudience } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

const audience = getAudience("verenigingen");

export const metadata: Metadata = pageMetadata({ ...audience.seo, path: audience.href });

export default function VerenigingenPage() {
  return <AudiencePage slug="verenigingen" />;
}
