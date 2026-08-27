"use client";

import { RegisterForm } from "@/components/register-form";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";

export function RegisterSection() {
  const { t } = useLanguage();

  return (
    <section id="register" className="bg-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:py-28">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.28em] text-ink/50 uppercase">
            {t("registerEyebrow")}
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-ink sm:text-5xl">
            {t("registerTitle")}
          </h2>
          <p className="mt-6 max-w-md text-base leading-7 text-mute">{t("registerLead")}</p>
        </Reveal>
        <Reveal delay={90}>
          <RegisterForm />
        </Reveal>
      </div>
    </section>
  );
}
