"use client";

import { NeedleMark } from "@/components/icons";
import { useLanguage } from "@/components/language-provider";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-8 text-sm text-mute sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="flex items-center gap-2 text-ink">
          <NeedleMark />
          <span className="font-serif">{t("footerBrand")}</span>
        </p>
        <p className="text-[11px] tracking-[0.18em] uppercase">{t("footerRhythm")}</p>
      </div>
    </footer>
  );
}
