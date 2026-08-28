"use client";

import { useCallback, useState, type FormEvent } from "react";
import { RegisterSuccess } from "@/components/register-success";
import { useLanguage } from "@/components/language-provider";
import { BACKGROUND_OPTIONS } from "@/lib/register/background";
import { submitRegistration, type RegisterResult } from "@/lib/register/submit";
import { smoothScrollTo } from "@/lib/scroll-to";
import type { MessageKey } from "@/lib/i18n/messages";

type FormState = RegisterResult | { status: "idle" };

const initialState: FormState = { status: "idle" };

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
  const [state, setState] = useState<FormState>(initialState);
  const [pending, setPending] = useState(false);

  const fieldErrors = state.status === "error" ? state.fieldErrors : undefined;

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (pending) return;

    const form = event.currentTarget;
    setPending(true);
    const result = await submitRegistration(new FormData(form), locale);
    setPending(false);
    setState(result);

    if (result.status === "success") {
      form.reset();
    }
  };

  const closeSuccess = useCallback(() => {
    setState(initialState);
    smoothScrollTo("learn");
  }, []);

  return (
    <>
      {state.status === "success" ? (
        <RegisterSuccess message={state.message} onClose={closeSuccess} />
      ) : null}

      <form onSubmit={onSubmit} className="space-y-6" noValidate>
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
            className={`input input-bordered w-full rounded-none bg-paper text-ink ${fieldErrors?.firstName ? "input-error" : ""}`}
          />
          <FieldError message={fieldErrors?.firstName} />
        </label>
        <label className="block">
          <span className="mb-2 block text-[10px] font-semibold tracking-[0.22em] text-mute uppercase">
            {t("fieldLastName")}
          </span>
          <input
            name="lastName"
            autoComplete="family-name"
            required
            className={`input input-bordered w-full rounded-none bg-paper text-ink ${fieldErrors?.lastName ? "input-error" : ""}`}
          />
          <FieldError message={fieldErrors?.lastName} />
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
            className={`input input-bordered w-full rounded-none bg-paper text-ink ${fieldErrors?.email ? "input-error" : ""}`}
          />
          <FieldError message={fieldErrors?.email} />
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
            className={`input input-bordered w-full rounded-none bg-paper text-ink ${fieldErrors?.phone ? "input-error" : ""}`}
          />
          <FieldError message={fieldErrors?.phone} />
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
            className={`input input-bordered w-full rounded-none bg-paper pl-9 text-ink ${fieldErrors?.instagram ? "input-error" : ""}`}
          />
        </div>
        <FieldError message={fieldErrors?.instagram} />
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
          className={`input input-bordered w-full rounded-none bg-paper text-ink ${fieldErrors?.portfolio ? "input-error" : ""}`}
        />
        <FieldError message={fieldErrors?.portfolio} />
      </label>

      <label className="block">
        <span className="mb-2 block text-[10px] font-semibold tracking-[0.22em] text-mute uppercase">
          {t("fieldNote")}
        </span>
        <textarea
          name="note"
          rows={4}
          placeholder={t("notePlaceholder")}
          className={`textarea textarea-bordered w-full rounded-none bg-paper text-ink ${fieldErrors?.note ? "textarea-error" : ""}`}
        />
        <FieldError message={fieldErrors?.note} />
      </label>

      {state.status === "error" ? (
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
