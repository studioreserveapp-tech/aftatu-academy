"use client";

import { RegisterForm } from "@/components/register-form";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";

export function RegisterSection() {
  const { t } = useLanguage();

  return (
    <section id="register" className="bg-mist px-6 py-20 text-ink">
      <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start">
        <Reveal>
          <p className="mb-4 text-[10px] font-medium tracking-[0.2em] uppercase">
            {t("registerEyebrow")}
          </p>
          <h2 className="mb-4 text-4xl leading-tight font-bold tracking-tight">{t("registerTitle")}</h2>
          <p className="text-sm font-light text-gray-600">{t("registerLead")}</p>
        </Reveal>
        <Reveal delay={80}>
          <RegisterForm />
        </Reveal>
      </div>
    </section>
  );
}
