"use client";

import Image from "next/image";
import { ArrowIcon, CheckIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";

const CHECKS = ["check1", "check2", "check3", "check4"] as const;

export function CourseSection() {
  const { t } = useLanguage();

  return (
    <section id="course" className="bg-mist">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
        <Reveal className="relative">
          <Image
            src="/media/hero-poster.jpg"
            alt=""
            width={900}
            height={1125}
            className="bw aspect-[4/5] w-full object-cover"
          />
          <div className="absolute top-5 left-5 max-w-[220px] bg-paper px-4 py-3 shadow-[0_0_0_1px_var(--line)]">
            <p className="text-[10px] font-semibold tracking-[0.18em] text-mute uppercase">
              {t("courseEyebrow")}
            </p>
            <p className="mt-2 font-serif text-lg leading-6 text-ink">{t("rhythmLevelValue")}</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-[11px] font-semibold tracking-[0.28em] text-ink/50 uppercase">
            {t("courseEyebrow")}
          </p>
          <h2 className="mt-4 max-w-xl font-serif text-4xl leading-[1.08] text-ink sm:text-5xl">
            {t("courseTitle")}
          </h2>
          <div className="mt-6 max-w-xl space-y-4 text-base leading-7 text-mute">
            <p>{t("courseP1")}</p>
            <p>{t("courseP2")}</p>
          </div>
          <ul className="mt-8 space-y-3">
            {CHECKS.map((key) => (
              <li key={key} className="flex items-start gap-3 text-sm text-ink">
                <span className="mt-0.5 text-ink">
                  <CheckIcon />
                </span>
                <span>{t(key)}</span>
              </li>
            ))}
          </ul>
          <a href="#register" className="btn-primary mt-10">
            {t("courseCta")}
            <ArrowIcon />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
