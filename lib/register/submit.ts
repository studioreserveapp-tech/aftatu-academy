import { FORMSUBMIT_INBOX, SITE_URL, formSubmitAjaxUrl } from "@/lib/formsubmit";
import { t, type Locale } from "@/lib/i18n/messages";
import {
  BACKGROUND_EMAIL_LABELS,
  SCHEDULE_EMAIL_LABELS,
} from "@/lib/register/background";
import { readRegisterForm } from "@/lib/register/schema";

export type RegisterResult =
  | { status: "success"; message: string }
  | { status: "error"; message: string; fieldErrors?: Record<string, string> };

/**
 * FormSubmit sits behind Cloudflare and rejects non-browser requests, so this
 * has to run in the browser rather than in a server action.
 */
export async function submitRegistration(
  formData: FormData,
  locale: Locale,
): Promise<RegisterResult> {
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
    return { status: "error", message: t(locale, "reviewFields"), fieldErrors };
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
      },
      body: JSON.stringify({
        _subject:
          locale === "es"
            ? `Nueva inscripción · ${fullName}`
            : `New enrollment · ${fullName}`,
        _template: "table",
        _captcha: "false",
        _autoresponse: autoresponse,
        Nombre: fullName,
        Email: lead.email,
        Telefono: lead.phone,
        Instagram: lead.instagram ? `@${lead.instagram}` : "—",
        Experiencia: BACKGROUND_EMAIL_LABELS[lead.background],
        Horario: SCHEDULE_EMAIL_LABELS[lead.schedule],
        Portfolio: lead.portfolio || "—",
        Nota: lead.note || "—",
        Idioma: locale,
        Sitio: SITE_URL,
        _replyto: lead.email,
        email: lead.email,
        to: FORMSUBMIT_INBOX,
      }),
    });

    const payload = (await response.json().catch(() => null)) as
      | { success?: string | boolean }
      | null;

    const ok =
      response.ok &&
      (payload?.success === true || String(payload?.success ?? "") === "true");

    if (!ok) {
      return { status: "error", message: t(locale, "errSubmit") };
    }

    return { status: "success", message: t(locale, "successMessage") };
  } catch {
    return { status: "error", message: t(locale, "errSubmit") };
  }
}
