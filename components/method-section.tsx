"use client";

import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";
import type { MessageKey } from "@/lib/i18n/messages";

const FACTS: { label: MessageKey; value: MessageKey }[] = [
  { label: "rhythmDuration", value: "rhythmDurationValue" },
  { label: "rhythmPace", value: "rhythmPaceValue" },
  { label: "rhythmSession", value: "rhythmSessionValue" },
  { label: "rhythmPlace", value: "rhythmPlaceValue" },
  { label: "rhythmLanguage", value: "rhythmLanguageValue" },
  { label: "rhythmSeats", value: "rhythmSeatsValue" },
  { label: "rhythmMaterials", value: "rhythmMaterialsValue" },
  { label: "rhythmLevel", value: "rhythmLevelValue" },
];

export function MethodSection() {
  const { t } = useLanguage();

  return (
    <section id="program" className="border-y border-line">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.28em] text-ink/50 uppercase">
            {t("methodEyebrow")}
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-ink sm:text-5xl">
            {t("methodTitle")}
          </h2>
          <p className="mt-6 max-w-md text-base leading-7 text-mute">{t("methodLead")}</p>
        </Reveal>

        <Reveal delay={80}>
          <dl className="grid gap-px bg-line sm:grid-cols-2">
            {FACTS.map((item) => (
              <div key={item.label} className="bg-paper px-6 py-7">
                <dt className="text-[10px] font-semibold tracking-[0.2em] text-mute uppercase">
                  {t(item.label)}
                </dt>
                <dd className="mt-3 font-serif text-2xl text-ink">{t(item.value)}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
