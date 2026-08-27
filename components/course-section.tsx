"use client";

import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";
import type { MessageKey } from "@/lib/i18n/messages";

const CARDS: { title: MessageKey; body: MessageKey; index: string }[] = [
  { title: "check1", body: "check1Body", index: "01" },
  { title: "check2", body: "check2Body", index: "02" },
  { title: "check3", body: "check3Body", index: "03" },
  { title: "check4", body: "check4Body", index: "04" },
];

export function CourseSection() {
  const { t } = useLanguage();

  return (
    <section id="course" className="bg-mist px-6 py-20 text-ink">
      <Reveal className="mx-auto grid max-w-5xl items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="mb-6 text-[10px] font-medium tracking-[0.2em] uppercase">
            {t("courseEyebrow")}
          </p>
          <h2 className="mb-6 font-serif text-4xl leading-[1.1] sm:text-5xl">
            {t("courseTitle")}
          </h2>
          <p className="mb-4 max-w-md text-sm font-light leading-relaxed text-gray-600">
            {t("courseP1")}
          </p>
          <p className="mb-8 text-[11px] tracking-[0.14em] text-gray-500 uppercase">
            {t("courseP2")}
          </p>
          <a href="#register" className="btn-dark">
            {t("courseSectionCta")}
          </a>
        </div>

        <ul className="grid gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-2 lg:col-span-7">
          {CARDS.map((card) => (
            <li key={card.title} className="bg-paper p-6 sm:p-7">
              <p className="mb-4 font-serif text-2xl text-ink/25">{card.index}</p>
              <h3 className="mb-2 font-serif text-2xl leading-tight">{t(card.title)}</h3>
              <p className="text-sm font-light leading-relaxed text-gray-600">
                {t(card.body)}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
