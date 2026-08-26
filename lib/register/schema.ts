import { z } from "zod";
import { BACKGROUND_OPTIONS } from "@/lib/brevo/fields";
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

export const registerSchema = z.object({
  firstName: z
    .string()
    .transform(normalizeName)
    .pipe(z.string().min(2, "Escribe tu nombre.").max(80, "El nombre es demasiado largo.")),
  lastName: z
    .string()
    .transform(normalizeName)
    .pipe(z.string().min(2, "Escribe tu apellido.").max(80, "El apellido es demasiado largo.")),
  email: z
    .string()
    .transform(normalizeEmail)
    .pipe(z.string().email("Revisa el email.")),
  phone: z
    .string()
    .transform((value) => normalizePhone(value))
    .pipe(z.string().regex(/^\+\d{10,15}$/, "Revisa el teléfono, con lada.")),
  instagram: z
    .string()
    .transform(normalizeInstagram)
    .pipe(z.string().max(30, "El handle de Instagram es demasiado largo.")),
  background: z.enum(backgroundValues).catch("cero"),
  portfolio: z
    .string()
    .transform(normalizePortfolio)
    .pipe(z.string().max(300, "El portfolio es demasiado largo.")),
  note: z
    .string()
    .transform((value) => value.trim())
    .pipe(z.string().max(800, "La nota es demasiado larga.")),
});

export type RegisterInput = z.infer<typeof registerSchema>;

export function readRegisterForm(formData: FormData) {
  return registerSchema.safeParse({
    firstName: String(formData.get("firstName") ?? ""),
    lastName: String(formData.get("lastName") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    instagram: String(formData.get("instagram") ?? ""),
    background: parseBackground(String(formData.get("background") ?? "")),
    portfolio: String(formData.get("portfolio") ?? ""),
    note: String(formData.get("note") ?? ""),
  });
}
