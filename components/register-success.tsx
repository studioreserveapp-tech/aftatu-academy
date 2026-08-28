"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/components/language-provider";
import { smoothScrollTo } from "@/lib/scroll-to";

export function RegisterSuccess({ message, onClose }: { message: string; onClose: () => void }) {
  const { t } = useLanguage();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    buttonRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="register-success-title"
      className="fixed inset-0 z-[100] flex items-center justify-center px-5"
    >
      <button
        type="button"
        aria-label={t("successContinue")}
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-ink/80 backdrop-blur-sm motion-safe:animate-[fadeIn_240ms_ease-out]"
      />

      <div className="relative w-full max-w-md bg-paper px-8 py-10 text-ink shadow-2xl motion-safe:animate-[popIn_420ms_cubic-bezier(0.22,1,0.36,1)] sm:px-10 sm:py-12">
        <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-ink" />

        <span
          aria-hidden="true"
          className="mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-ink"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor">
            <path
              d="M4 12.5 9.5 18 20 7"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <p className="text-[10px] font-medium tracking-[0.2em] text-ink/45 uppercase">
          {t("successEyebrow")}
        </p>
        <h3
          id="register-success-title"
          className="mt-3 text-4xl leading-[1.05] font-thin tracking-[-0.02em] uppercase"
        >
          {t("successTitle")}
        </h3>
        <p className="mt-4 text-base leading-relaxed font-light text-gray-600">{message}</p>

        <button
          ref={buttonRef}
          type="button"
          onClick={onClose}
          className="btn btn-neutral mt-8 w-full rounded-none"
        >
          {t("successContinue")}
        </button>
      </div>
    </div>
  );
}
