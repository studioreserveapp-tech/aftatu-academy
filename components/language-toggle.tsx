"use client";

import { useLanguage } from "@/components/language-provider";
import { locales, type Locale } from "@/lib/i18n/messages";

const LABELS: Record<Locale, string> = {
  en: "EN",
  es: "ES",
};

export function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      className="flex items-center gap-1 text-[11px] font-semibold tracking-[0.18em]"
      role="group"
      aria-label={t("languageLabel")}
    >
      {locales.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            className={`px-1.5 py-0.5 uppercase transition-colors ${
              active ? "text-ink" : "text-ink/35 hover:text-ink"
            }`}
          >
            {LABELS[code]}
          </button>
        );
      })}
    </div>
  );
}
