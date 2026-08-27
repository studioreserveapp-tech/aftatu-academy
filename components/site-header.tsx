"use client";

import { ArrowIcon, NeedleMark } from "@/components/icons";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";

export function SiteHeader() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 text-ink">
          <NeedleMark />
          <span className="font-serif text-lg tracking-tight">{t("brandName")}</span>
        </a>

        <nav className="hidden items-center gap-7 text-[11px] font-semibold tracking-[0.18em] text-ink/70 uppercase md:flex">
          <a href="#top" className="transition-colors hover:text-ink">
            {t("navHome")}
          </a>
          <a href="#course" className="transition-colors hover:text-ink">
            {t("navCourse")}
          </a>
          <a href="#program" className="transition-colors hover:text-ink">
            {t("navMethod")}
          </a>
          <a href="#register" className="transition-colors hover:text-ink">
            {t("navRegister")}
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageToggle />
          <a href="#register" className="btn-primary !px-4 !py-2.5">
            {t("headerEnroll")}
            <ArrowIcon />
          </a>
        </div>
      </div>
    </header>
  );
}
