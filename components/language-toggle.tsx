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
      className="flex items-center gap-1 font-mono text-[11px] tracking-[0.22em]"
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
              active ? "text-copper" : "text-paper/55 hover:text-paper"
            }`}
          >
            {LABELS[code]}
          </button>
        );
      })}
    </div>
  );
}
