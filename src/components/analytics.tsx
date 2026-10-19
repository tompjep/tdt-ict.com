import Script from "next/script";

/**
 * Privacyvriendelijke analytics zonder cookies (dus geen cookiebanner nodig).
 * Zet NEXT_PUBLIC_PLAUSIBLE_DOMAIN of NEXT_PUBLIC_UMAMI_WEBSITE_ID om te activeren.
 */
export function Analytics() {
  const plausible = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const umamiId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const umamiSrc = process.env.NEXT_PUBLIC_UMAMI_SRC || "https://cloud.umami.is/script.js";

  if (plausible) {
    return <Script defer data-domain={plausible} src="https://plausible.io/js/script.js" strategy="afterInteractive" />;
  }
  if (umamiId) {
    return <Script defer data-website-id={umamiId} src={umamiSrc} strategy="afterInteractive" />;
  }
  return null;
}
