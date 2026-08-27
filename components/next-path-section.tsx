"use client";

import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";

export function NextPathSection() {
  const { t } = useLanguage();

  return (
    <section id="next" className="border-t border-line bg-ink px-6 py-16">
      <Reveal className="mx-auto max-w-xl text-center">
        <p className="mb-6 text-[10px] tracking-[0.2em] text-mute uppercase">
          {t("nextEyebrow")}
        </p>
        <h2 className="mb-4 font-serif text-3xl leading-tight italic sm:text-4xl">
          {t("nextTitle")}
        </h2>
        <p className="mb-4 text-sm text-soft">{t("nextLead")}</p>
        <p className="text-sm font-light text-mute">{t("nextBody")}</p>
      </Reveal>
    </section>
  );
}
