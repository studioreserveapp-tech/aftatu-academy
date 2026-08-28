"use client";

import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";
import type { MessageKey } from "@/lib/i18n/messages";

const MODULES: { title: MessageKey; body: MessageKey }[] = [
  { title: "pill1", body: "pill1Body" },
  { title: "pill2", body: "pill2Body" },
  { title: "pill3", body: "pill3Body" },
  { title: "pill4", body: "pill4Body" },
  { title: "pill5", body: "pill5Body" },
  { title: "pill6", body: "pill6Body" },
  { title: "pill7", body: "pill7Body" },
  { title: "pill8", body: "pill8Body" },
  { title: "pill9", body: "pill9Body" },
];

export function LearnSection() {
  const { t } = useLanguage();

  return (
    <section id="learn" className="relative z-10 bg-mist px-5 py-14 text-ink sm:px-6 sm:py-20">
      <Reveal className="mx-auto max-w-5xl">
        <div className="mb-10 grid gap-6 border-b border-ink/15 pb-10 sm:mb-14 sm:gap-8 sm:pb-12 md:grid-cols-[1fr_1.1fr] md:items-end">
          <div>
            <p className="mb-4 text-[10px] font-medium tracking-[0.2em] uppercase sm:mb-5">
              {t("learnEyebrow")}
            </p>
            <h2 className="text-4xl leading-tight font-thin tracking-[-0.02em] uppercase sm:text-5xl">
              {t("learnTitle")}
            </h2>
          </div>
          <p className="max-w-xl text-base font-light leading-relaxed text-gray-600 sm:text-lg md:justify-self-end">
            {t("learnLead")}
          </p>
        </div>

        <ol className="grid border-b border-ink/15 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((item, index) => (
            <li
              key={item.title}
              className="flex flex-col border-t border-ink/15 py-6 pr-0 sm:min-h-[168px] sm:py-7 sm:pr-8"
            >
              <span className="mb-4 text-xs font-thin tracking-[-0.02em] text-ink/40 sm:mb-6">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-lg leading-snug font-thin tracking-[-0.02em] uppercase sm:text-xl">
                {t(item.title)}
              </p>
              <p className="mt-2 text-sm font-light leading-relaxed text-gray-600">
                {t(item.body)}
              </p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
