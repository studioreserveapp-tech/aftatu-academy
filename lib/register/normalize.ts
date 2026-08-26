import { getDefaultCountryCode } from "../brevo/config";
import {
  BACKGROUND_OPTIONS,
  type BackgroundFormValue,
} from "../brevo/fields";

export function normalizeName(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

export function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

export function normalizeInstagram(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";

  const withoutUrl = trimmed
    .replace(/^https?:\/\/(www\.)?instagram\.com\//i, "")
    .replace(/\/.*$/, "");

  return withoutUrl.replace(/^@/, "").replace(/[^a-zA-Z0-9._]/g, "");
}

export function normalizePortfolio(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  if (/^[\w.-]+\.[a-z]{2,}([/?#].*)?$/i.test(trimmed)) {
    return `https://${trimmed}`;
  }
  return trimmed;
}

export function normalizePhone(value: string, countryCode = getDefaultCountryCode()) {
  const trimmed = value.trim();
  if (!trimmed) return "";

  const digits = trimmed.replace(/[^\d+]/g, "");
  if (digits.startsWith("+")) {
    return `+${digits.slice(1).replace(/\D/g, "")}`;
  }
  if (digits.startsWith("00")) {
    return `+${digits.slice(2)}`;
  }

  const onlyDigits = digits.replace(/\D/g, "");
  if (onlyDigits.startsWith(countryCode) && onlyDigits.length > countryCode.length + 6) {
    return `+${onlyDigits}`;
  }

  return `+${countryCode}${onlyDigits}`;
}

export function parseBackground(value: string): BackgroundFormValue {
  const match = BACKGROUND_OPTIONS.find((option) => option.formValue === value);
  return match?.formValue ?? "cero";
}

export function backgroundToBrevoValue(value: BackgroundFormValue) {
  return BACKGROUND_OPTIONS.find((option) => option.formValue === value)?.value ?? 1;
}
