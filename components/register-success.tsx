"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/components/language-provider";

const AUTO_CLOSE_MS = 4000;

export function RegisterSuccess({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) {
  const { t } = useLanguage();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    buttonRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(onClose, AUTO_CLOSE_MS);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(timer);
    };
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="register-success-title"
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 sm:p-6"
    >
      <button
        type="button"
        aria-label={t("successContinue")}
        onClick={onClose}
        className="fixed inset-0 cursor-default bg-ink/80 backdrop-blur-sm motion-safe:animate-[fadeIn_240ms_ease-out]"
      />

      <div className="relative my-auto w-full max-w-md bg-paper px-6 py-8 text-ink shadow-2xl motion-safe:animate-[popIn_420ms_cubic-bezier(0.22,1,0.36,1)] sm:px-10 sm:py-12">
        <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-ink" />

        <span
          aria-hidden="true"
          className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-ink sm:mb-7 sm:h-14 sm:w-14"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor">
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
          className="mt-3 text-3xl leading-[1.05] font-thin tracking-[-0.02em] uppercase sm:text-4xl"
        >
          {t("successTitle")}
        </h3>
        <p className="mt-4 text-sm leading-relaxed font-light text-gray-600 sm:text-base">
          {message}
        </p>

        <button
          ref={buttonRef}
          type="button"
          onClick={onClose}
          className="btn btn-neutral mt-7 w-full rounded-none sm:mt-8"
        >
          {t("successContinue")}
        </button>
      </div>
    </div>,
    document.body,
  );
}
