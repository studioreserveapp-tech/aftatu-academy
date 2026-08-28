"use server";

import { upsertCourseLead } from "@/lib/brevo/contacts";
import { mapBrevoError } from "@/lib/brevo/errors";
import { notifyNewLead, thankLead } from "@/lib/brevo/notify";
import { t } from "@/lib/i18n/messages";
import { readRegisterForm, resolveLocale } from "@/lib/register/schema";

export type RegisterState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
};

export async function registerLead(
  _prev: RegisterState,
  formData: FormData,
): Promise<RegisterState> {
  const locale = resolveLocale(formData.get("locale"));

  if (String(formData.get("company") ?? "").trim()) {
    return { status: "success", message: t(locale, "successHoneypot") };
  }

  const { parsed } = readRegisterForm(formData);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      status: "error",
      message: t(locale, "reviewFields"),
      fieldErrors,
    };
  }

  try {
    await upsertCourseLead(parsed.data);
    await thankLead(parsed.data, locale).catch(() => undefined);
    await notifyNewLead(parsed.data).catch(() => undefined);
    return {
      status: "success",
      message: t(locale, "successMessage"),
    };
  } catch (error) {
    return {
      status: "error",
      message: mapBrevoError(error, locale),
    };
  }
}
