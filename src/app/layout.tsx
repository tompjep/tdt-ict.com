import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@/components/analytics";
import { JsonLd } from "@/components/json-ld";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { TopBar } from "@/components/layout/top-bar";
import { MotionProvider } from "@/components/motion/motion-provider";
import { company, home } from "@/content/site";
import { localBusinessSchema, siteUrl } from "@/lib/seo";
import "./globals.css";

// Inter (variabel, incl. optical size-as voor een display-variant op grote koppen), self-hosted
const inter = localFont({
  src: "./fonts/InterVariable-latin.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: home.seo.title, template: `%s | ${company.name}` },
  description: home.seo.description,
  applicationName: company.name,
  authors: [{ name: company.name }],
  formatDetection: { telephone: false },
  robots: { index: true, follow: true },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }], apple: "/apple-touch-icon.png" },
};

export const viewport: Viewport = {
  themeColor: "#0E2B3D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={inter.variable}>
      <body>
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a
          href="#inhoud"
          className="sr-only z-[60] rounded-lg bg-white px-4 py-3 font-semibold text-heading shadow-lift focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Naar de inhoud
        </a>
        <MotionProvider>
          <TopBar />
          <Header />
          <main id="inhoud" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
          <MobileCallBar />
        </MotionProvider>
        <JsonLd data={localBusinessSchema()} />
        <Analytics />
      </body>
    </html>
  );
}
