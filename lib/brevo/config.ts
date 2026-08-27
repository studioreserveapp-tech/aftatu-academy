/** US calling code. Bare 10-digit numbers become +1XXXXXXXXXX. */
const DEFAULT_COUNTRY_CODE = "1";

export function getBrevoApiKey() {
  const apiKey = process.env.BREVO_API?.trim() || process.env.BREVO_API_KEY?.trim();
  if (!apiKey) {
    throw new Error("BREVO_API_MISSING");
  }
  return apiKey;
}

export function getBrevoListIds() {
  const raw = process.env.BREVO_LIST_ID?.trim();
  if (!raw) return undefined;
  const id = Number(raw);
  if (!Number.isInteger(id) || id <= 0) {
    throw new Error("BREVO_LIST_ID_INVALID");
  }
  return [id];
}

export function getDefaultCountryCode() {
  const raw = process.env.BREVO_DEFAULT_COUNTRY_CODE?.trim() || DEFAULT_COUNTRY_CODE;
  return raw.replace(/^\+/, "");
}

export function getNotifyEmail() {
  return process.env.BREVO_NOTIFY_EMAIL?.trim() || undefined;
}

export function getSender() {
  const email = process.env.BREVO_SENDER_EMAIL?.trim();
  if (!email) return undefined;
  return {
    email,
    name: process.env.BREVO_SENDER_NAME?.trim() || "AF · Studio AZ",
  };
}
