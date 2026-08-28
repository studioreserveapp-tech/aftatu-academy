"use client";

import { BrandLockup } from "@/components/brand-lockup";
import { useLanguage } from "@/components/language-provider";

const AF_INSTAGRAM = "https://www.instagram.com/andrefernan_tattoo/";
const STUDIO_AZ_URL = "https://tattooshopminneapolis.com/";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line bg-ink px-6 py-10 text-center text-xs text-mute">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-5">
        <BrandLockup afHref={AF_INSTAGRAM} studioHref={STUDIO_AZ_URL} />
        <p className="max-w-sm leading-relaxed">{t("footerAddress")}</p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:gap-10">
          <p>{t("footerBrand")}</p>
          <p>{t("footerRhythm")}</p>
          <a href="#register" className="transition hover:text-paper">
            {t("footerContact")}
          </a>
        </div>
      </div>
    </footer>
  );
}
