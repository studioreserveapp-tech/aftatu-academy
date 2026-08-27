"use client";

import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";

const DEFAULT_VIDEO = "/media/hero.mp4";
const DEFAULT_POSTER = "/media/hero-poster.jpg";

export function HeroVideo() {
  const { t } = useLanguage();
  const videoSrc = process.env.NEXT_PUBLIC_HERO_VIDEO_URL || DEFAULT_VIDEO;

  return (
    <section className="relative flex min-h-[640px] flex-col items-center justify-end px-6 pt-32 pb-16">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover object-top opacity-50"
          autoPlay
          muted
          loop
          playsInline
          poster={DEFAULT_POSTER}
          preload="metadata"
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="hero-overlay absolute inset-0" />
      </div>

      <Reveal className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center text-center">
        <p className="mb-4 text-xs tracking-[0.2em] text-soft uppercase">{t("heroKicker")}</p>
        <h1 className="mb-6 font-serif text-6xl leading-none italic">
          {t("heroTitle")}
          <br />
          {t("heroTitleAccent").trim()}
        </h1>
        <p className="mb-8 max-w-xs text-sm font-light text-soft">{t("heroLead")}</p>
        <a href="#program" className="btn-light mb-6 w-full max-w-[280px]">
          {t("heroCta")}
        </a>
        <a
          href="#learn"
          className="text-xs text-mute underline underline-offset-4 transition hover:text-paper"
        >
          {t("heroSecondary")} →
        </a>
      </Reveal>
    </section>
  );
}
