"use client";

import { useLanguage } from "@/components/language-provider";
import type { MessageKey } from "@/lib/i18n/messages";

const RHYTHM: { label: MessageKey; value: MessageKey }[] = [
  { label: "rhythmDuration", value: "rhythmDurationValue" },
  { label: "rhythmPace", value: "rhythmPaceValue" },
  { label: "rhythmSession", value: "rhythmSessionValue" },
  { label: "rhythmLevel", value: "rhythmLevelValue" },
];

export function CourseSection() {
  const { t } = useLanguage();

  return (
    <section id="course" className="relative border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <div>
          <p className="font-mono text-[11px] tracking-[0.28em] text-copper uppercase">
            {t("courseEyebrow")}
          </p>
          <h2 className="mt-4 max-w-xl font-serif text-4xl leading-[1.05] text-paper sm:text-5xl">
            {t("courseTitle")}
          </h2>
          <div className="mt-8 max-w-xl space-y-5 text-base leading-7 text-mute">
            <p>{t("courseP1")}</p>
            <p>{t("courseP2")}</p>
          </div>
          <a
            href="#register"
            className="mt-10 inline-flex items-center justify-center border border-copper bg-copper px-7 py-3.5 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-paper"
          >
            {t("courseCta")}
          </a>
        </div>

        <dl className="grid content-start gap-px bg-line sm:grid-cols-2">
          {RHYTHM.map((item) => (
            <div key={item.label} className="bg-ink px-6 py-7">
              <dt className="font-mono text-[10px] tracking-[0.24em] text-mute uppercase">
                {t(item.label)}
              </dt>
              <dd className="mt-3 font-serif text-2xl text-paper">{t(item.value)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
