"use client";

import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";

const MODULES = [
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
    <section id="learn" className="relative z-10 bg-mist px-6 py-20 text-ink">
      <Reveal className="mx-auto max-w-5xl">
        <div className="mb-14 grid gap-8 border-b border-ink/15 pb-12 md:grid-cols-[1fr_1.1fr] md:items-end">
          <div>
            <p className="mb-5 text-[10px] font-medium tracking-[0.2em] uppercase">
              {t("learnEyebrow")}
            </p>
            <h2 className="text-5xl leading-tight font-thin tracking-[-0.02em] uppercase">
              {t("learnTitle")}
            </h2>
          </div>
          <p className="max-w-xl text-lg font-light leading-relaxed text-gray-600 md:justify-self-end">
            {t("learnLead")}
          </p>
        </div>

        <ol className="grid border-b border-ink/15 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((key, index) => (
            <li
              key={key}
              className="flex min-h-[140px] flex-col justify-between border-t border-ink/15 py-7 pr-8"
            >
              <span className="mb-6 text-xs font-thin tracking-[-0.02em] text-ink/40">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-xl leading-snug font-thin tracking-[-0.02em] uppercase">
                {t(key)}
              </p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
