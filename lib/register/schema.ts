import { z } from "zod";
import { BACKGROUND_OPTIONS } from "@/lib/register/background";
import { defaultLocale, isLocale, t, type Locale, type MessageKey } from "@/lib/i18n/messages";
import {
  normalizeEmail,
  normalizeInstagram,
  normalizeName,
  normalizePhone,
  normalizePortfolio,
  parseBackground,
} from "@/lib/register/normalize";

const backgroundValues = BACKGROUND_OPTIONS.map((option) => option.formValue) as [
  (typeof BACKGROUND_OPTIONS)[number]["formValue"],
  ...(typeof BACKGROUND_OPTIONS)[number]["formValue"][],
];

const FIELD_ERRORS: Record<string, MessageKey> = {
  firstNameRequired: "errFirstName",
  firstNameLong: "errFirstNameLong",
  lastNameRequired: "errLastName",
  lastNameLong: "errLastNameLong",
  emailInvalid: "errEmail",
  phoneInvalid: "errPhone",
  instagramLong: "errInstagram",
  portfolioLong: "errPortfolio",
  noteLong: "errNote",
};

export function resolveLocale(value: unknown): Locale {
  const raw = String(value ?? "").trim();
  return isLocale(raw) ? raw : defaultLocale;
}

export function registerSchema(locale: Locale) {
  const msg = (code: keyof typeof FIELD_ERRORS) => t(locale, FIELD_ERRORS[code]);

  return z.object({
    firstName: z
      .string()
      .transform(normalizeName)
      .pipe(
        z
          .string()
          .min(2, msg("firstNameRequired"))
          .max(80, msg("firstNameLong")),
      ),
    lastName: z
      .string()
      .transform(normalizeName)
      .pipe(
        z.string().min(2, msg("lastNameRequired")).max(80, msg("lastNameLong")),
      ),
    email: z
      .string()
      .transform(normalizeEmail)
      .pipe(z.string().email(msg("emailInvalid"))),
    phone: z
      .string()
      .transform((value) => normalizePhone(value))
      .pipe(z.string().regex(/^\+\d{10,15}$/, msg("phoneInvalid"))),
    instagram: z
      .string()
      .transform(normalizeInstagram)
      .pipe(z.string().max(30, msg("instagramLong"))),
    background: z.enum(backgroundValues).catch("cero"),
    portfolio: z
      .string()
      .transform(normalizePortfolio)
      .pipe(z.string().max(300, msg("portfolioLong"))),
    note: z
      .string()
      .transform((value) => value.trim())
      .pipe(z.string().max(800, msg("noteLong"))),
  });
}

export type RegisterInput = z.infer<ReturnType<typeof registerSchema>>;

export function readRegisterForm(formData: FormData) {
  const locale = resolveLocale(formData.get("locale"));
  return {
    locale,
    parsed: registerSchema(locale).safeParse({
      firstName: String(formData.get("firstName") ?? ""),
      lastName: String(formData.get("lastName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      instagram: String(formData.get("instagram") ?? ""),
      background: parseBackground(String(formData.get("background") ?? "")),
      portfolio: String(formData.get("portfolio") ?? ""),
      note: String(formData.get("note") ?? ""),
    }),
  };
}
