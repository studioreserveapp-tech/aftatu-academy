"use client";

import { ArrowIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";

const DEFAULT_VIDEO = "/media/hero.mp4";
const DEFAULT_POSTER = "/media/hero-poster.jpg";

export function HeroVideo() {
  const { t } = useLanguage();
  const videoSrc = process.env.NEXT_PUBLIC_HERO_VIDEO_URL || DEFAULT_VIDEO;

  return (
    <section className="border-b border-line">
      <div className="mx-auto grid min-h-[calc(100svh-73px)] max-w-6xl items-center gap-10 px-6 py-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.28em] text-ink/55 uppercase">
            {t("heroKicker")}
          </p>
          <h1 className="mt-5 max-w-xl font-serif text-5xl leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {t("heroTitle")}
            <span className="italic">{t("heroTitleAccent")}</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-mute">{t("heroLead")}</p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a href="#register" className="btn-primary">
              {t("headerEnroll")}
              <ArrowIcon />
            </a>
            <a href="#course" className="btn-ghost">
              {t("heroSecondary")}
              <ArrowIcon />
            </a>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6">
            <div>
              <dt className="text-[10px] font-semibold tracking-[0.18em] text-mute uppercase">
                {t("rhythmDuration")}
              </dt>
              <dd className="mt-2 font-serif text-xl text-ink">{t("rhythmDurationValue")}</dd>
            </div>
            <div className="border-l border-line pl-4">
              <dt className="text-[10px] font-semibold tracking-[0.18em] text-mute uppercase">
                {t("rhythmPace")}
              </dt>
              <dd className="mt-2 font-serif text-xl text-ink">{t("rhythmPaceValue")}</dd>
            </div>
            <div className="border-l border-line pl-4">
              <dt className="text-[10px] font-semibold tracking-[0.18em] text-mute uppercase">
                {t("rhythmSession")}
              </dt>
              <dd className="mt-2 font-serif text-xl text-ink">{t("rhythmSessionValue")}</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="relative overflow-hidden bg-mist">
            <video
              className="bw aspect-[4/5] h-full w-full object-cover sm:aspect-[5/6]"
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
          </div>
          <div className="absolute -bottom-6 left-6 flex h-36 w-36 items-center justify-center rounded-full bg-paper text-center shadow-[0_0_0_1px_var(--line)] sm:left-[-28px]">
            <p className="max-w-24 font-serif text-[13px] leading-5 text-ink">
              {t("heroBadge")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
