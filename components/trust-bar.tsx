"use client";

import { useLanguage } from "@/components/language-provider";

export function TrustBar() {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 border-y border-line bg-white/5 py-4">
      <div className="mx-auto flex max-w-4xl divide-x divide-line text-center text-[10px] tracking-wide text-soft sm:text-xs">
        <p className="flex-1 px-2">{t("trust1")}</p>
        <p className="flex-1 px-2">{t("trust2")}</p>
        <p className="flex-1 px-2">{t("trust3")}</p>
        <p className="hidden flex-1 px-2 sm:block">{t("trust4")}</p>
      </div>
    </section>
  );
}
