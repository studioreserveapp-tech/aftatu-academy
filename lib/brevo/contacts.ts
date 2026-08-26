import { getBrevoListIds } from "@/lib/brevo/config";
import {
  BREVO_CONTACT_ATTRIBUTES,
  COURSE_ATTRIBUTE_VALUE,
} from "@/lib/brevo/fields";
import { getBrevoClient } from "@/lib/brevo/client";
import { ensureCourseAttributes } from "@/lib/brevo/attributes";
import { backgroundToBrevoValue } from "@/lib/register/normalize";
import type { RegisterInput } from "@/lib/register/schema";

export async function upsertCourseLead(input: RegisterInput) {
  await ensureCourseAttributes();

  const attributes: Record<string, string | number> = {
    [BREVO_CONTACT_ATTRIBUTES.firstName]: input.firstName,
    [BREVO_CONTACT_ATTRIBUTES.lastName]: input.lastName,
    [BREVO_CONTACT_ATTRIBUTES.sms]: input.phone,
    [BREVO_CONTACT_ATTRIBUTES.background]: backgroundToBrevoValue(input.background),
    [BREVO_CONTACT_ATTRIBUTES.course]: COURSE_ATTRIBUTE_VALUE,
  };

  if (input.instagram) {
    attributes[BREVO_CONTACT_ATTRIBUTES.instagram] = input.instagram;
  }
  if (input.portfolio) {
    attributes[BREVO_CONTACT_ATTRIBUTES.portfolio] = input.portfolio;
  }
  if (input.note) {
    attributes[BREVO_CONTACT_ATTRIBUTES.note] = input.note;
  }

  return getBrevoClient().contacts.createContact({
    email: input.email,
    updateEnabled: true,
    listIds: getBrevoListIds(),
    attributes,
  });
}
