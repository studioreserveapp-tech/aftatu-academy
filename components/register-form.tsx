"use client";

import { useActionState } from "react";
import { registerLead, type RegisterState } from "@/app/actions/register";
import { useLanguage } from "@/components/language-provider";
import { BACKGROUND_OPTIONS } from "@/lib/brevo/fields";
import type { MessageKey } from "@/lib/i18n/messages";

const initialState: RegisterState = { status: "idle" };

const BACKGROUND_COPY: Record<
  (typeof BACKGROUND_OPTIONS)[number]["formValue"],
  { label: MessageKey; help: MessageKey }
> = {
  cero: { label: "backgroundCero", help: "backgroundCeroHelp" },
  dibujo: { label: "backgroundDibujo", help: "backgroundDibujoHelp" },
  tatuador: { label: "backgroundTatuador", help: "backgroundTatuadorHelp" },
};

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-2 text-sm text-danger">{message}</p>;
}

export function RegisterForm() {
  const { locale, t } = useLanguage();
  const [state, formAction, pending] = useActionState(registerLead, initialState);

  if (state.status === "success") {
    return (
      <div className="border border-line px-6 py-10 sm:px-8">
        <p className="font-mono text-[11px] tracking-[0.28em] text-copper uppercase">
          {t("successEyebrow")}
        </p>
        <h3 className="mt-4 font-serif text-3xl text-paper">{t("successTitle")}</h3>
        <p className="mt-4 max-w-md text-base leading-7 text-mute">
          {state.message ?? t("successMessage")}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6" noValidate>
      <input type="hidden" name="locale" value={locale} />
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block font-mono text-[10px] tracking-[0.22em] text-mute uppercase">
            {t("fieldFirstName")}
          </span>
          <input
            name="firstName"
            autoComplete="given-name"
            required
            className={`field ${state.fieldErrors?.firstName ? "field-error" : ""}`}
          />
          <FieldError message={state.fieldErrors?.firstName} />
        </label>
        <label className="block">
          <span className="mb-2 block font-mono text-[10px] tracking-[0.22em] text-mute uppercase">
            {t("fieldLastName")}
          </span>
          <input
            name="lastName"
            autoComplete="family-name"
            required
            className={`field ${state.fieldErrors?.lastName ? "field-error" : ""}`}
          />
          <FieldError message={state.fieldErrors?.lastName} />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block font-mono text-[10px] tracking-[0.22em] text-mute uppercase">
            {t("fieldEmail")}
          </span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className={`field ${state.fieldErrors?.email ? "field-error" : ""}`}
          />
          <FieldError message={state.fieldErrors?.email} />
        </label>
        <label className="block">
          <span className="mb-2 block font-mono text-[10px] tracking-[0.22em] text-mute uppercase">
            {t("fieldPhone")}
          </span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder={t("phonePlaceholder")}
            required
            className={`field ${state.fieldErrors?.phone ? "field-error" : ""}`}
          />
          <FieldError message={state.fieldErrors?.phone} />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block font-mono text-[10px] tracking-[0.22em] text-mute uppercase">
          {t("fieldInstagram")}
        </span>
        <div className="relative">
          <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-mute">
            @
          </span>
          <input
            name="instagram"
            autoComplete="off"
            placeholder={t("instagramPlaceholder")}
            className={`field pl-9 ${state.fieldErrors?.instagram ? "field-error" : ""}`}
          />
        </div>
        <FieldError message={state.fieldErrors?.instagram} />
      </label>

      <fieldset>
        <legend className="mb-3 font-mono text-[10px] tracking-[0.22em] text-mute uppercase">
          {t("fieldBackground")}
        </legend>
        <div className="grid gap-3">
          {BACKGROUND_OPTIONS.map((option) => {
            const copy = BACKGROUND_COPY[option.formValue];
            return (
              <label key={option.formValue} className="choice">
                <input
                  type="radio"
                  name="background"
                  value={option.formValue}
                  defaultChecked={option.formValue === "cero"}
                />
                <span>
                  <span className="block text-sm text-paper">{t(copy.label)}</span>
                  <span className="mt-1 block text-sm text-mute">{t(copy.help)}</span>
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <label className="block">
        <span className="mb-2 block font-mono text-[10px] tracking-[0.22em] text-mute uppercase">
          {t("fieldPortfolio")}
        </span>
        <input
          name="portfolio"
          type="text"
          placeholder={t("portfolioPlaceholder")}
          className={`field ${state.fieldErrors?.portfolio ? "field-error" : ""}`}
        />
        <FieldError message={state.fieldErrors?.portfolio} />
      </label>

      <label className="block">
        <span className="mb-2 block font-mono text-[10px] tracking-[0.22em] text-mute uppercase">
          {t("fieldNote")}
        </span>
        <textarea
          name="note"
          rows={4}
          placeholder={t("notePlaceholder")}
          className={`field resize-y ${state.fieldErrors?.note ? "field-error" : ""}`}
        />
        <FieldError message={state.fieldErrors?.note} />
      </label>

      {state.status === "error" && state.message ? (
        <p className="text-sm text-danger">{state.message}</p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="w-full border border-copper bg-copper px-6 py-4 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-paper disabled:cursor-wait disabled:opacity-70"
      >
        {pending ? t("submitting") : t("submit")}
      </button>
    </form>
  );
}
