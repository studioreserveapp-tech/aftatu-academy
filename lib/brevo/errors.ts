import { BrevoError } from "@getbrevo/brevo";
import { t, type Locale } from "@/lib/i18n/messages";

export function mapBrevoError(error: unknown, locale: Locale) {
  if (error instanceof Error && error.message === "BREVO_API_KEY_MISSING") {
    return t(locale, "errMissingKey");
  }
  if (error instanceof Error && error.message === "BREVO_LIST_ID_INVALID") {
    return t(locale, "errListId");
  }
  if (error instanceof BrevoError) {
    if (error.statusCode === 401) {
      return t(locale, "errUnauthorized");
    }
    if (error.statusCode === 429) {
      return t(locale, "errRateLimit");
    }
    return t(locale, "errBrevo");
  }
  return t(locale, "errGeneric");
}
