import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Volledig statische export naar /out (Vercel, Netlify, elke webserver).
  output: "export",
  // Houdt de bestaande WordPress-URL's gelijk: /over-ons/, /contact/, ...
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
