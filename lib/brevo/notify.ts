import { getNotifyEmail, getSender } from "@/lib/brevo/config";
import { BACKGROUND_OPTIONS } from "@/lib/brevo/fields";
import { getBrevoClient } from "@/lib/brevo/client";
import { t, type Locale } from "@/lib/i18n/messages";
import type { RegisterInput } from "@/lib/register/schema";

export async function notifyNewLead(input: RegisterInput) {
  const sender = getSender();
  const notifyEmail = getNotifyEmail();
  if (!sender || !notifyEmail) return;

  const background =
    BACKGROUND_OPTIONS.find((option) => option.formValue === input.background)?.label ??
    input.background;

  const lines = [
    `${input.firstName} ${input.lastName}`,
    input.email,
    input.phone,
    input.instagram ? `@${input.instagram}` : "No Instagram",
    background,
    input.portfolio || "No portfolio",
    input.note || "No note",
  ];

  await getBrevoClient().transactionalEmails.sendTransacEmail({
    sender,
    to: [{ email: notifyEmail }],
    replyTo: { email: input.email, name: `${input.firstName} ${input.lastName}` },
    subject: `New enrollment · ${input.firstName} ${input.lastName}`,
    textContent: `New beginner course registration.\n\n${lines.join("\n")}`,
  });
}

export async function thankLead(input: RegisterInput, locale: Locale) {
  const sender = getSender();
  if (!sender) return;

  const name = input.firstName;
  const subject = t(locale, "thanksSubject");
  const body = t(locale, "thanksBody");
  const brand = t(locale, "brandName");
  const greeting = locale === "es" ? `Hola ${name},` : `Hi ${name},`;

  await getBrevoClient().transactionalEmails.sendTransacEmail({
    sender,
    to: [{ email: input.email, name: `${input.firstName} ${input.lastName}` }],
    subject,
    textContent: `${greeting}\n\n${body}\n\n${brand}`,
    htmlContent: `<p>${greeting}</p><p>${body}</p><p>${brand}</p>`,
  });
}
