"use client";

import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";

const PILLS = [
  "pill1",
  "pill2",
  "pill3",
  "pill4",
  "pill5",
  "pill6",
  "pill7",
  "pill8",
  "pill9",
] as const;

export function LearnSection() {
  const { t } = useLanguage();

  return (
    <section id="learn" className="relative z-10 bg-mist px-6 py-16 text-ink">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="mb-8 text-[10px] font-medium tracking-[0.2em] uppercase">
          {t("learnEyebrow")}
        </p>
        <h2 className="mb-6 text-5xl leading-tight font-thin tracking-[-0.02em] uppercase">{t("learnTitle")}</h2>
        <p className="mx-auto mb-10 max-w-xl text-lg font-light leading-relaxed text-gray-600">
          {t("learnLead")}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {PILLS.map((key) => (
            <span
              key={key}
              className="rounded-full border border-ink px-4 py-2 text-xs"
            >
              {t(key)}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
