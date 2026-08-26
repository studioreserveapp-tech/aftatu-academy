import { getNotifyEmail, getSender } from "@/lib/brevo/config";
import { BACKGROUND_OPTIONS } from "@/lib/brevo/fields";
import { getBrevoClient } from "@/lib/brevo/client";
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
