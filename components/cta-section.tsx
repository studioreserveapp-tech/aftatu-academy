"use client";

import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";

export function CtaSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-mist px-6 py-16 text-center text-ink">
      <Reveal className="mx-auto max-w-2xl">
        <h2 className="mb-8 text-4xl font-thin tracking-[-0.02em] uppercase sm:text-5xl">{t("ctaTitle")}</h2>
        <a href="#register" className="btn btn-neutral mb-6 w-full max-w-[280px] rounded-none">
          {t("courseCta")}
        </a>
        <p className="text-xs text-gray-500">{t("ctaNote")}</p>
      </Reveal>
    </section>
  );
}
