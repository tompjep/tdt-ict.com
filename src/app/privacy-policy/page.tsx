import type { Metadata } from "next";
import { LegalContent } from "@/components/sections/legal-content";
import { getLegalPage } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";

const page = getLegalPage("privacy-policy");

export const metadata: Metadata = pageMetadata({ ...page.seo, path: "/privacy-policy/" });

export default function PrivacyPolicyPage() {
  return <LegalContent slug="privacy-policy" />;
}
