"use server";

import { FORMSUBMIT_INBOX, SITE_URL, formSubmitAjaxUrl } from "@/lib/formsubmit";
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

  const lead = parsed.data;
  const fullName = `${lead.firstName} ${lead.lastName}`;
  const autoresponse = [
    locale === "es" ? `Hola ${lead.firstName},` : `Hi ${lead.firstName},`,
    "",
    t(locale, "thanksBody"),
    "",
    t(locale, "brandName"),
    SITE_URL,
  ].join("\n");

  try {
    const response = await fetch(formSubmitAjaxUrl(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: SITE_URL,
        Referer: `${SITE_URL}/`,
      },
      body: JSON.stringify({
        _subject:
          locale === "es"
            ? `Nueva inscripción · ${fullName}`
            : `New enrollment · ${fullName}`,
        _template: "table",
        _captcha: "false",
        _autoresponse: autoresponse,
        _honey: "",
        name: fullName,
        email: lead.email,
        phone: lead.phone,
        instagram: lead.instagram ? `@${lead.instagram}` : "",
        background: lead.background,
        portfolio: lead.portfolio,
        note: lead.note,
        locale,
        website: SITE_URL,
        to: FORMSUBMIT_INBOX,
      }),
    });

    if (!response.ok) {
      return { status: "error", message: t(locale, "errSubmit") };
    }

    return {
      status: "success",
      message: t(locale, "successMessage"),
    };
  } catch {
    return {
      status: "error",
      message: t(locale, "errSubmit"),
    };
  }
}
