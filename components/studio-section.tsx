"use client";

import { BrandLockup } from "@/components/brand-lockup";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";

export function StudioSection() {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 border-b border-line bg-ink px-6 py-20 text-center">
      <Reveal className="mx-auto max-w-lg">
        <p className="mb-8 text-[10px] tracking-[0.2em] text-mute uppercase">
          {t("studioEyebrow")}
        </p>
        <div className="mb-6 flex justify-center">
          <BrandLockup size="lg" />
        </div>
        <p className="mb-4 text-sm text-soft">{t("studioLine")}</p>
        <blockquote className="text-2xl font-light tracking-tight text-paper">
          “{t("studioQuote")}”
        </blockquote>
      </Reveal>
    </section>
  );
}
