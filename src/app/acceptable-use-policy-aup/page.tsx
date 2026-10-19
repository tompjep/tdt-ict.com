import type { Metadata } from "next";
import { LegalContent } from "@/components/sections/legal-content";
import { getLegalPage } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";

const page = getLegalPage("acceptable-use-policy-aup");

export const metadata: Metadata = pageMetadata({ ...page.seo, path: "/acceptable-use-policy-aup/" });

export default function AcceptableUsePolicyAupPage() {
  return <LegalContent slug="acceptable-use-policy-aup" />;
}
