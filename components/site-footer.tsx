"use client";

import { useLanguage } from "@/components/language-provider";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-mute sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>{t("footerBrand")}</p>
        <p>{t("footerRhythm")}</p>
      </div>
    </footer>
  );
}
