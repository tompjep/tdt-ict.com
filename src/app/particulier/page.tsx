import type { Metadata } from "next";
import { AudiencePage } from "@/components/sections/audience-page";
import { getAudience } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

const audience = getAudience("particulier");

export const metadata: Metadata = pageMetadata({ ...audience.seo, path: audience.href });

export default function ParticulierPage() {
  return <AudiencePage slug="particulier" />;
}
