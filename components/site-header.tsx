"use client";

import { useState } from "react";
import { BrandLockup } from "@/components/brand-lockup";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";

export function SiteHeader() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="absolute top-0 right-0 left-0 z-50 border-b border-white/20">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <a
          href="#top"
          className="origin-left shrink-0 scale-90 sm:scale-100"
          aria-label={t("brandName")}
          onClick={close}
        >
          <BrandLockup />
        </a>

        <nav className="hidden items-center gap-6 text-sm text-soft md:flex">
          <a className="transition hover:text-paper" href="#learn">
            {t("navMethod")}
          </a>
          <a className="transition hover:text-paper" href="#program">
            {t("navCourse")}
          </a>
          <a className="transition hover:text-paper" href="#register">
            {t("navRegister")}
          </a>
          <LanguageToggle />
          <a href="#register" className="btn btn-outline btn-sm rounded-none">
            {t("headerEnroll")}
          </a>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button
            type="button"
            className="text-paper"
            aria-expanded={open}
            aria-label={open ? t("menuClose") : t("menuOpen")}
            onClick={() => setOpen((value) => !value)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/15 bg-ink/95 px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-4 text-sm text-soft">
            <a href="#learn" onClick={close}>
              {t("navMethod")}
            </a>
            <a href="#program" onClick={close}>
              {t("navCourse")}
            </a>
            <a href="#register" onClick={close}>
              {t("navRegister")}
            </a>
            <a href="#register" className="btn btn-outline btn-sm w-fit rounded-none" onClick={close}>
              {t("headerEnroll")}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
