"use client";

import { useActionState, useEffect } from "react";
import { registerLead, type RegisterState } from "@/app/actions/register";
import { useLanguage } from "@/components/language-provider";
import { BACKGROUND_OPTIONS } from "@/lib/register/background";
import type { MessageKey } from "@/lib/i18n/messages";

function goToLearn() {
  const section = document.getElementById("learn");
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", "#learn");
    return;
  }
  window.location.hash = "learn";
}

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

  useEffect(() => {
    if (state.status !== "success") return;
    const timer = window.setTimeout(goToLearn, 3200);
    return () => window.clearTimeout(timer);
  }, [state.status]);

  return (
    <>
      {state.status === "success" ? (
        <dialog className="modal modal-open" aria-labelledby="register-success-title">
          <div className="modal-box rounded-none bg-paper text-ink">
            <p className="text-[11px] font-medium tracking-[0.16em] text-ink/50 uppercase">
              {t("successEyebrow")}
            </p>
            <h3
              id="register-success-title"
              className="mt-4 text-3xl font-thin tracking-[-0.02em] uppercase"
            >
              {t("successTitle")}
            </h3>
            <p className="mt-4 text-base leading-7 font-light text-gray-600">
              {state.message ?? t("successMessage")}
            </p>
            <div className="modal-action">
              <a href="#learn" className="btn btn-neutral rounded-none" onClick={goToLearn}>
                {t("successContinue")}
              </a>
            </div>
          </div>
          <a
            href="#learn"
            className="modal-backdrop bg-ink/60"
            aria-label={t("successContinue")}
            onClick={goToLearn}
          />
        </dialog>
      ) : null}

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
          <span className="mb-2 block text-[10px] font-semibold tracking-[0.22em] text-mute uppercase">
            {t("fieldFirstName")}
          </span>
          <input
            name="firstName"
            autoComplete="given-name"
            required
            className={`input input-bordered w-full rounded-none bg-paper text-ink ${state.fieldErrors?.firstName ? "input-error" : ""}`}
          />
          <FieldError message={state.fieldErrors?.firstName} />
        </label>
        <label className="block">
          <span className="mb-2 block text-[10px] font-semibold tracking-[0.22em] text-mute uppercase">
            {t("fieldLastName")}
          </span>
          <input
            name="lastName"
            autoComplete="family-name"
            required
            className={`input input-bordered w-full rounded-none bg-paper text-ink ${state.fieldErrors?.lastName ? "input-error" : ""}`}
          />
          <FieldError message={state.fieldErrors?.lastName} />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-[10px] font-semibold tracking-[0.22em] text-mute uppercase">
            {t("fieldEmail")}
          </span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className={`input input-bordered w-full rounded-none bg-paper text-ink ${state.fieldErrors?.email ? "input-error" : ""}`}
          />
          <FieldError message={state.fieldErrors?.email} />
        </label>
        <label className="block">
          <span className="mb-2 block text-[10px] font-semibold tracking-[0.22em] text-mute uppercase">
            {t("fieldPhone")}
          </span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder={t("phonePlaceholder")}
            required
            className={`input input-bordered w-full rounded-none bg-paper text-ink ${state.fieldErrors?.phone ? "input-error" : ""}`}
          />
          <FieldError message={state.fieldErrors?.phone} />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-[10px] font-semibold tracking-[0.22em] text-mute uppercase">
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
            className={`input input-bordered w-full rounded-none bg-paper pl-9 text-ink ${state.fieldErrors?.instagram ? "input-error" : ""}`}
          />
        </div>
        <FieldError message={state.fieldErrors?.instagram} />
      </label>

      <fieldset>
        <legend className="mb-3 text-[10px] font-semibold tracking-[0.22em] text-mute uppercase">
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
                  <span className="block text-sm text-ink">{t(copy.label)}</span>
                  <span className="mt-1 block text-sm text-mute">{t(copy.help)}</span>
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <label className="block">
        <span className="mb-2 block text-[10px] font-semibold tracking-[0.22em] text-mute uppercase">
          {t("fieldPortfolio")}
        </span>
        <input
          name="portfolio"
          type="text"
          placeholder={t("portfolioPlaceholder")}
          className={`input input-bordered w-full rounded-none bg-paper text-ink ${state.fieldErrors?.portfolio ? "input-error" : ""}`}
        />
        <FieldError message={state.fieldErrors?.portfolio} />
      </label>

      <label className="block">
        <span className="mb-2 block text-[10px] font-semibold tracking-[0.22em] text-mute uppercase">
          {t("fieldNote")}
        </span>
        <textarea
          name="note"
          rows={4}
          placeholder={t("notePlaceholder")}
          className={`textarea textarea-bordered w-full rounded-none bg-paper text-ink ${state.fieldErrors?.note ? "textarea-error" : ""}`}
        />
        <FieldError message={state.fieldErrors?.note} />
      </label>

      {state.status === "error" && state.message ? (
        <p className="text-sm text-danger">{state.message}</p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="btn btn-neutral w-full rounded-none disabled:cursor-wait disabled:opacity-70"
      >
        {pending ? t("submitting") : t("submit")}
      </button>
    </form>
    </>
  );
}
