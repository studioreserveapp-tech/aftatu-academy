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
  { label: "rhythmPrice", value: "rhythmPriceValue" },
];

export function MethodSection() {
  const { t } = useLanguage();

  return (
    <section id="program" className="bg-ink px-6 py-20">
      <Reveal className="mx-auto max-w-3xl">
        <p className="mb-6 text-center text-[10px] tracking-[0.2em] text-mute uppercase">
          {t("methodEyebrow")}
        </p>
        <h2 className="mb-4 text-center text-5xl font-thin tracking-[-0.02em] uppercase">{t("methodTitle")}</h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-lg font-light leading-relaxed text-soft">
          {t("methodLead")}
        </p>
        <dl className="grid gap-px overflow-hidden bg-line sm:grid-cols-2">
          {FACTS.map((item) => (
            <div key={item.label} className="bg-ink px-6 py-6">
              <dt className="text-[11px] font-medium tracking-[0.14em] text-mute uppercase">
                {t(item.label)}
              </dt>
              <dd className="mt-2 text-2xl font-thin tracking-[-0.02em] uppercase">{t(item.value)}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
