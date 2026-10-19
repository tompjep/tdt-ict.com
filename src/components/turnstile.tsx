"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

/**
 * Cloudflare Turnstile (privacyvriendelijk alternatief voor reCAPTCHA).
 * Docs: https://developers.cloudflare.com/turnstile/
 *
 * Let op: het token moet ook aan de serverkant gecontroleerd worden via
 * https://challenges.cloudflare.com/turnstile/v0/siteverify (zie examples/netlify-function-contact.mjs).
 */

type TurnstileOptions = {
  sitekey: string;
  callback: (token: string) => void;
  "expired-callback"?: () => void;
  "error-callback"?: () => void;
  theme?: "light" | "dark" | "auto";
  language?: string;
  size?: "normal" | "flexible" | "compact";
  appearance?: "always" | "execute" | "interaction-only";
  action?: string;
};

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: TurnstileOptions) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
  }
}

const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
let scriptPromise: Promise<void> | null = null;

function loadScript() {
  if (window.turnstile) return Promise.resolve();
  if (!scriptPromise) {
    scriptPromise = new Promise<void>((resolve, reject) => {
      const script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = () => {
        scriptPromise = null;
        reject(new Error("Turnstile kon niet geladen worden"));
      };
      document.head.appendChild(script);
    });
  }
  return scriptPromise;
}

export type TurnstileHandle = { reset: () => void };

type TurnstileProps = {
  siteKey: string;
  onToken: (token: string) => void;
  /** Token verlopen of fout: het formulier moet het token weer leegmaken */
  onExpire: () => void;
  onLoadError?: () => void;
  className?: string;
};

export const Turnstile = forwardRef<TurnstileHandle, TurnstileProps>(function Turnstile(
  { siteKey, onToken, onExpire, onLoadError, className },
  ref,
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | undefined>(undefined);
  // Callbacks via ref, zodat de widget niet opnieuw rendert bij elke wijziging in het formulier
  const callbacks = useRef({ onToken, onExpire, onLoadError });
  useEffect(() => {
    callbacks.current = { onToken, onExpire, onLoadError };
  });

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (widgetId.current) window.turnstile?.reset(widgetId.current);
    },
  }));

  useEffect(() => {
    let cancelled = false;
    loadScript()
      .then(() => {
        if (cancelled || !containerRef.current || !window.turnstile) return;
        widgetId.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          action: "contact",
          language: "nl",
          theme: "light",
          size: "flexible",
          callback: (token) => callbacks.current.onToken(token),
          "expired-callback": () => callbacks.current.onExpire(),
          "error-callback": () => callbacks.current.onExpire(),
        });
      })
      .catch(() => callbacks.current.onLoadError?.());
    return () => {
      cancelled = true;
      if (widgetId.current) window.turnstile?.remove(widgetId.current);
      widgetId.current = undefined;
    };
  }, [siteKey]);

  return <div ref={containerRef} className={className} />;
});
