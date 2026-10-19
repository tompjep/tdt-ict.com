"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CircleAlert, CircleCheck, LoaderCircle, Phone, Send, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Label, NativeSelect, Textarea } from "@/components/ui/input";
import { Turnstile, type TurnstileHandle } from "@/components/turnstile";
import type { contactPage } from "@/content/site";
import { emptyContact, submitContact, validateContact, type ContactErrors, type ContactValues } from "@/lib/form";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";
const fieldOrder: (keyof ContactValues)[] = ["name", "email", "phone", "role", "subject", "message", "privacy", "captcha"];

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 flex items-start gap-1.5 text-sm font-medium text-[#B42318]">
      <CircleAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
      {message}
    </p>
  );
}

type ContactFormProps = {
  form: (typeof contactPage)["form"];
  contact: { phoneHref: string; phoneDisplay: string; email: string; emailHref: string };
  /** Cloudflare Turnstile site key; zonder key wordt er geen captcha getoond */
  turnstileSiteKey?: string;
};

export function ContactForm({ form, contact, turnstileSiteKey }: ContactFormProps) {
  const captchaRequired = Boolean(turnstileSiteKey);
  const turnstileRef = useRef<TurnstileHandle>(null);
  const [captchaLoadError, setCaptchaLoadError] = useState(false);
  const [values, setValues] = useState<ContactValues>(emptyContact);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactValues, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [showSummary, setShowSummary] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);

  // Onderwerp voorselecteren via ?onderwerp=...
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("onderwerp");
    if (param && form.subjects.some((s) => s.value === param)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- eenmalig vullen vanuit de URL
      setValues((v) => ({ ...v, subject: param, role: param === "particulier" ? "particulier" : v.role }));
    }
  }, [form.subjects]);

  useEffect(() => {
    if (status === "success" || status === "error") resultRef.current?.focus();
  }, [status]);

  const update = <K extends keyof ContactValues>(key: K, value: ContactValues[K]) => {
    const next = { ...values, [key]: value };
    setValues(next);
    if (touched[key] || showSummary) setErrors(validateContact(next, { captchaRequired }));
  };

  const blur = (key: keyof ContactValues) => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validateContact(values, { captchaRequired }));
  };

  const setCaptcha = (token: string) => {
    setValues((v) => ({ ...v, captcha: token }));
    if (token)
      setErrors((e) => {
        const next = { ...e };
        delete next.captcha;
        return next;
      });
  };

  const visibleError = (key: keyof ContactValues) => (touched[key] || showSummary ? errors[key] : undefined);

  const fieldProps = (key: keyof ContactValues) => ({
    id: `contact-${key}`,
    name: key,
    "aria-invalid": visibleError(key) ? true : undefined,
    "aria-describedby": visibleError(key) ? `contact-${key}-error` : undefined,
    onBlur: () => blur(key),
  });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validateContact(values, { captchaRequired });
    setErrors(found);
    setShowSummary(true);
    if (Object.keys(found).length) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setStatus("submitting");
    try {
      await submitContact(values);
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
      // Een Turnstile-token is maar één keer bruikbaar: vraag een nieuw token aan
      setCaptcha("");
      turnstileRef.current?.reset();
    }
  }

  if (status === "success") {
    return (
      <div ref={resultRef} tabIndex={-1} role="status" className="rounded-card border border-[#ABEFC6] bg-[#ECFDF3] p-8 outline-none">
        <CircleCheck aria-hidden="true" className="size-10 text-success" />
        <h2 className="mt-4 text-2xl font-semibold">{form.success.title}</h2>
        <p className="mt-2 leading-relaxed text-heading">{form.success.text}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild variant="navy">
            <a href={contact.phoneHref}>
              <Phone aria-hidden="true" /> {contact.phoneDisplay}
            </a>
          </Button>
          <Button variant="outline" onClick={() => (setValues(emptyContact), setTouched({}), setShowSummary(false), setStatus("idle"))}>
            Nog een bericht sturen
          </Button>
        </div>
      </div>
    );
  }

  const errorList = fieldOrder.filter((k) => errors[k]);

  return (
    <form noValidate onSubmit={onSubmit} aria-labelledby="form-title" className="space-y-5">
      <h2 id="form-title" className="text-2xl font-semibold sm:text-3xl">
        {form.title}
      </h2>

      {status === "error" && (
        <div ref={resultRef} tabIndex={-1} role="alert" className="rounded-xl border border-[#FECDCA] bg-[#FEF3F2] p-4 outline-none">
          <p className="font-semibold text-[#912018]">{form.error.title}</p>
          <p className="mt-1 text-sm text-[#912018]">
            {form.error.text}{" "}
            <a className="font-semibold underline" href={contact.emailHref}>
              {contact.email}
            </a>{" "}
            ·{" "}
            <a className="font-semibold underline" href={contact.phoneHref}>
              {contact.phoneDisplay}
            </a>
          </p>
        </div>
      )}

      {showSummary && errorList.length > 0 && (
        <div ref={summaryRef} tabIndex={-1} role="alert" className="rounded-xl border border-[#FECDCA] bg-[#FEF3F2] p-4 outline-none">
          <p className="font-semibold text-[#912018]">
            Controleer {errorList.length === 1 ? "het volgende veld" : `de volgende ${errorList.length} velden`}:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#912018]">
            {errorList.map((k) => (
              <li key={k}>
                <a href={`#contact-${k === "role" ? "role-zakelijk" : k}`} className="underline">
                  {errors[k]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="contact-name">
            Naam <span className="text-accent-strong">*</span>
          </Label>
          <Input {...fieldProps("name")} autoComplete="name" required value={values.name} onChange={(e) => update("name", e.target.value)} />
          <FieldError id="contact-name-error" message={visibleError("name")} />
        </div>
        <div>
          <Label htmlFor="contact-company">
            Bedrijfsnaam <span className="font-normal text-body">(optioneel)</span>
          </Label>
          <Input {...fieldProps("company")} autoComplete="organization" value={values.company} onChange={(e) => update("company", e.target.value)} />
        </div>
        <div>
          <Label htmlFor="contact-email">
            E-mailadres <span className="text-accent-strong">*</span>
          </Label>
          <Input
            {...fieldProps("email")}
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
          />
          <FieldError id="contact-email-error" message={visibleError("email")} />
        </div>
        <div>
          <Label htmlFor="contact-phone">
            Telefoonnummer <span className="text-accent-strong">*</span>
          </Label>
          <Input
            {...fieldProps("phone")}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
          <FieldError id="contact-phone-error" message={visibleError("phone")} />
        </div>
      </div>

      <fieldset aria-describedby={visibleError("role") ? "contact-role-error" : undefined}>
        <legend className="mb-1.5 text-sm font-medium text-heading">
          Ik ben… <span className="text-accent-strong">*</span>
        </legend>
        <div className="grid gap-2 sm:grid-cols-3">
          {form.roles.map((r) => (
            <label
              key={r.value}
              className={cn(
                "flex h-12 cursor-pointer items-center gap-2.5 rounded-xl border bg-white px-4 text-[0.9375rem] font-medium text-heading transition-colors has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-accent/15",
                values.role === r.value ? "border-accent-strong bg-accent-tint/50" : "border-line hover:border-navy/25",
                visibleError("role") && values.role !== r.value && "border-[#B42318]",
              )}
            >
              <input
                type="radio"
                id={`contact-role-${r.value}`}
                name="role"
                value={r.value}
                checked={values.role === r.value}
                onChange={() => update("role", r.value)}
                onBlur={() => blur("role")}
                className="size-4 accent-[#C93F12]"
              />
              {r.label}
            </label>
          ))}
        </div>
        <FieldError id="contact-role-error" message={visibleError("role")} />
      </fieldset>

      <div>
        <Label htmlFor="contact-subject">
          Onderwerp <span className="text-accent-strong">*</span>
        </Label>
        <NativeSelect {...fieldProps("subject")} required value={values.subject} onChange={(e) => update("subject", e.target.value)}>
          <option value="" disabled>
            Kies een onderwerp
          </option>
          {form.subjects.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </NativeSelect>
        <FieldError id="contact-subject-error" message={visibleError("subject")} />
      </div>

      <div>
        <Label htmlFor="contact-message">
          Bericht <span className="text-accent-strong">*</span>
        </Label>
        <Textarea
          {...fieldProps("message")}
          required
          rows={5}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Vertel kort waar we je mee kunnen helpen"
        />
        <FieldError id="contact-message-error" message={visibleError("message")} />
      </div>

      {/* Honeypot: onzichtbaar voor mensen, bots vullen het in */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="contact-website">Laat dit veld leeg</label>
        <input
          id="contact-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-[0.9375rem] leading-relaxed">
          <input
            type="checkbox"
            {...fieldProps("privacy")}
            checked={values.privacy}
            onChange={(e) => update("privacy", e.target.checked)}
            className="mt-1 size-[18px] shrink-0 rounded accent-[#C93F12]"
          />
          <span>
            {form.privacyLabel}{" "}
            <Link href="/privacy-policy/" className="font-semibold text-accent-strong underline underline-offset-2">
              privacyverklaring
            </Link>
            . <span className="text-accent-strong">*</span>
          </span>
        </label>
        <FieldError id="contact-privacy-error" message={visibleError("privacy")} />
      </div>

      {turnstileSiteKey && (
        <div id="contact-captcha" tabIndex={-1} className="outline-none">
          <p className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-heading">
            <ShieldCheck aria-hidden="true" className="size-4 text-accent-strong" /> Beveiligingscheck
          </p>
          <Turnstile
            ref={turnstileRef}
            siteKey={turnstileSiteKey}
            onToken={setCaptcha}
            onExpire={() => setCaptcha("")}
            onLoadError={() => setCaptchaLoadError(true)}
            className="min-h-[65px]"
          />
          {captchaLoadError && (
            <FieldError
              id="contact-captcha-load-error"
              message={`De beveiligingscheck kon niet laden. Ververs de pagina, of mail of bel ons direct (${contact.phoneDisplay}).`}
            />
          )}
          <FieldError id="contact-captcha-error" message={showSummary ? errors.captcha : undefined} />
        </div>
      )}

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm">
          <span className="text-accent-strong">*</span> Verplicht veld
        </p>
        <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
          {status === "submitting" ? (
            <>
              <LoaderCircle aria-hidden="true" className="animate-spin" /> Versturen…
            </>
          ) : (
            <>
              <Send aria-hidden="true" /> Verstuur bericht
            </>
          )}
        </Button>
      </div>
      <p className="sr-only" aria-live="polite">
        {status === "submitting" ? "Je bericht wordt verstuurd" : ""}
      </p>
    </form>
  );
}
