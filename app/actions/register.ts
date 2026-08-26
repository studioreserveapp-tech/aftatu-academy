"use server";

import { upsertCourseLead } from "@/lib/brevo/contacts";
import { mapBrevoError } from "@/lib/brevo/errors";
import { notifyNewLead } from "@/lib/brevo/notify";
import { readRegisterForm } from "@/lib/register/schema";

export type RegisterState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
};

export async function registerLead(
  _prev: RegisterState,
  formData: FormData,
): Promise<RegisterState> {
  if (String(formData.get("company") ?? "").trim()) {
    return { status: "success", message: "Listo. Te escribimos pronto." };
  }

  const parsed = readRegisterForm(formData);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      status: "error",
      message: "Revisa los campos marcados.",
      fieldErrors,
    };
  }

  try {
    await upsertCourseLead(parsed.data);
    await notifyNewLead(parsed.data).catch(() => undefined);
    return {
      status: "success",
      message: "Quedaste en la lista. Te escribimos por email o WhatsApp.",
    };
  } catch (error) {
    return {
      status: "error",
      message: mapBrevoError(error),
    };
  }
}
