"use client";

import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";

const CHECKS = ["check1", "check2", "check3", "check4"] as const;

export function CourseSection() {
  const { t } = useLanguage();

  return (
    <section id="course" className="bg-mist px-6 py-16 text-ink">
      <Reveal className="mx-auto max-w-xl text-center">
        <p className="mb-6 text-[10px] font-medium tracking-[0.2em] uppercase">
          {t("courseEyebrow")}
        </p>
        <h2 className="mb-6 font-serif text-4xl leading-tight">{t("courseTitle")}</h2>
        <p className="mb-4 text-sm font-light text-gray-600">{t("courseP1")}</p>
        <p className="mb-8 text-sm font-light text-gray-600">{t("courseP2")}</p>
        <ul className="mx-auto mb-10 max-w-sm space-y-3 text-left text-sm">
          {CHECKS.map((key) => (
            <li key={key} className="flex items-start gap-3">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-ink" />
              <span>{t(key)}</span>
            </li>
          ))}
        </ul>
        <a href="#register" className="btn-dark">
          {t("courseCta")}
        </a>
      </Reveal>
    </section>
  );
}
