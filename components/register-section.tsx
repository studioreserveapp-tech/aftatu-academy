"use client";

import { RegisterForm } from "@/components/register-form";
import { useLanguage } from "@/components/language-provider";

export function RegisterSection() {
  const { t } = useLanguage();

  return (
    <section id="register" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
        <div>
          <p className="font-mono text-[11px] tracking-[0.28em] text-copper uppercase">
            {t("registerEyebrow")}
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] text-paper sm:text-5xl">
            {t("registerTitle")}
          </h2>
          <p className="mt-6 max-w-md text-base leading-7 text-mute">
            {t("registerLead")}
          </p>
        </div>
        <RegisterForm />
      </div>
    </section>
  );
}
