"use client";

import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";

export function CtaSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-mist px-6 py-16 text-center text-ink">
      <Reveal className="mx-auto max-w-md">
        <h2 className="mb-3 font-serif text-3xl">{t("ctaTitle")}</h2>
        <p className="mb-8 text-sm text-gray-600">{t("ctaLead")}</p>
        <a href="#register" className="btn-dark mb-6 w-full max-w-[280px]">
          {t("courseCta")}
        </a>
        <p className="text-xs text-gray-500">{t("ctaNote")}</p>
      </Reveal>
    </section>
  );
}
