"use client";

import { useLanguage } from "@/components/language-provider";

const DEFAULT_VIDEO = "/media/hero.mp4";
const DEFAULT_POSTER = "/media/hero-poster.jpg";

export function HeroVideo() {
  const { t } = useLanguage();
  const videoSrc = process.env.NEXT_PUBLIC_HERO_VIDEO_URL || DEFAULT_VIDEO;

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
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

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(9,8,7,0.18),rgba(9,8,7,0.78)_72%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/35 to-ink" />
      <div className="film-grain absolute inset-0" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-end px-6 pb-16 pt-28 sm:px-8 lg:pb-20">
        <p className="font-mono text-[11px] tracking-[0.32em] text-copper uppercase">
          {t("heroEyebrow")}
        </p>
        <h1 className="mt-5 max-w-4xl font-serif text-[3.15rem] leading-[0.92] text-paper sm:text-7xl lg:text-8xl">
          {t("heroTitle")}
          <span className="italic text-copper">{t("heroTitleAccent")}</span>
        </h1>
        <p className="mt-7 max-w-xl text-base leading-7 text-paper/78 sm:text-lg">
          {t("heroLead")}
        </p>
        <ul className="mt-8 flex max-w-3xl flex-wrap gap-2">
          {(
            [
              "rhythmDurationValue",
              "rhythmPaceValue",
              "rhythmSessionValue",
              "rhythmPlaceValue",
              "rhythmLanguageValue",
              "rhythmSeatsValue",
              "rhythmMaterialsValue",
            ] as const
          ).map((key) => (
            <li
              key={key}
              className="border border-paper/18 bg-ink/45 px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] text-paper/88 uppercase"
            >
              {t(key)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
