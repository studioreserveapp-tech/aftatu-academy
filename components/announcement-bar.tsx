"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import {
  APPLICATION_DEADLINE,
  formatRemaining,
  formatRemainingShort,
  remainingUntil,
} from "@/lib/course-dates";

export function AnnouncementBar() {
  const { t } = useLanguage();
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const remaining = now === null ? null : remainingUntil(APPLICATION_DEADLINE, now);
  const closed = now !== null && remaining === null;

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-10 border-b border-white/15 bg-ink/95 backdrop-blur-sm">
      <a
        href="#register"
        className="mx-auto flex h-full max-w-5xl items-center justify-center gap-2 overflow-hidden px-4 text-[10px] font-medium tracking-[0.12em] text-soft uppercase transition-colors hover:text-paper sm:gap-3 sm:text-[11px] sm:tracking-[0.14em]"
      >
        <span
          aria-hidden="true"
          className="h-1 w-1 shrink-0 rounded-full bg-paper/70 motion-safe:animate-pulse"
        />

        <span className="truncate">
          <span className="hidden sm:inline">{t("announceStart")}</span>
          <span className="sm:hidden">{t("announceStartShort")}</span>
        </span>

        {closed ? (
          <span className="shrink-0 text-mute">· {t("announceClosed")}</span>
        ) : remaining ? (
          <span className="shrink-0 tabular-nums text-mute">
            <span className="hidden sm:inline">
              · {t("announceCountdown")} {formatRemaining(remaining)}
            </span>
            <span className="sm:hidden">· {formatRemainingShort(remaining)}</span>
          </span>
        ) : null}
      </a>
    </div>
  );
}
