import type { MetadataRoute } from "next";
import { audiences, services } from "@/content/site";
import { legalPages } from "@/content/legal";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entry = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: "monthly",
    priority,
  });
  return [
    entry("/", 1),
    entry("/diensten/", 0.9),
    ...services.map((s) => entry(`/diensten/${s.slug}/`, 0.9)),
    ...audiences.map((a) => entry(a.href, 0.8)),
    entry("/over-ons/", 0.7),
    entry("/support/", 0.7),
    entry("/contact/", 0.8),
    ...legalPages.map((p) => entry(`/${p.slug}/`, 0.3)),
  ];
}
