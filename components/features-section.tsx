"use client";

import { BoxIcon, ChatIcon, PeopleIcon, PinIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";
import type { MessageKey } from "@/lib/i18n/messages";
import type { ReactNode } from "react";

const FEATURES: { icon: ReactNode; title: MessageKey; text: MessageKey }[] = [
  { icon: <PinIcon />, title: "feature1Title", text: "feature1Text" },
  { icon: <ChatIcon />, title: "feature2Title", text: "feature2Text" },
  { icon: <PeopleIcon />, title: "feature3Title", text: "feature3Text" },
  { icon: <BoxIcon />, title: "feature4Title", text: "feature4Text" },
];

export function FeaturesSection() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-0 px-6 sm:px-8 lg:grid-cols-4">
        {FEATURES.map((item, index) => (
          <Reveal
            key={item.title}
            delay={index * 80}
            className={`py-12 lg:px-6 ${index > 0 ? "lg:border-l lg:border-line" : ""}`}
          >
            <div className="text-ink">{item.icon}</div>
            <h3 className="mt-5 text-sm font-semibold tracking-[0.14em] text-ink uppercase">
              {t(item.title)}
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-6 text-mute">{t(item.text)}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
