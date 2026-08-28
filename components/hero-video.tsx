"use client";

import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";

const DEFAULT_VIDEO = "/media/hero.mp4";
const DEFAULT_POSTER = "/media/hero-poster.jpg";

export function HeroVideo() {
  const { t } = useLanguage();
  const videoSrc = process.env.NEXT_PUBLIC_HERO_VIDEO_URL || DEFAULT_VIDEO;

  return (
    <section className="relative flex min-h-[640px] flex-col items-center justify-end px-6 pt-[10.5rem] pb-16">
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

      <Reveal className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <p className="mb-5 text-xs font-medium tracking-[0.16em] text-soft uppercase">{t("heroKicker")}</p>
        <h1 className="mb-7 max-w-5xl text-6xl leading-[0.95] font-thin tracking-[-0.02em] uppercase sm:text-7xl md:text-8xl">
          {t("heroTitle")}
        </h1>
        <p className="mb-6 max-w-2xl text-xl font-light leading-relaxed text-soft">{t("heroLead")}</p>

        <p className="mb-8 flex flex-col items-center gap-2 text-xs font-medium tracking-[0.14em] text-paper uppercase sm:flex-row sm:gap-3 sm:text-sm">
          <span>{t("heroStartDate")}</span>
          <span aria-hidden="true" className="hidden text-mute sm:inline">
            ·
          </span>
          <span className="text-soft">{t("heroDeadline")}</span>
        </p>

        <a href="#program" className="btn btn-primary mb-6 w-full max-w-[280px] rounded-none">
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
