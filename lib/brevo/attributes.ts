import type { Brevo } from "@getbrevo/brevo";
import { getBrevoClient } from "@/lib/brevo/client";
import { BACKGROUND_OPTIONS, BREVO_CONTACT_ATTRIBUTES } from "@/lib/brevo/fields";

async function createAttributeSafe(request: Brevo.CreateAttributeRequest) {
  try {
    await getBrevoClient().contacts.createAttribute(request);
  } catch {
    // Already exists in the Brevo account.
  }
}

const TEXT_ATTRIBUTES = [
  BREVO_CONTACT_ATTRIBUTES.instagram,
  BREVO_CONTACT_ATTRIBUTES.portfolio,
  BREVO_CONTACT_ATTRIBUTES.note,
  BREVO_CONTACT_ATTRIBUTES.course,
] as const;

let ensured = false;

export async function ensureCourseAttributes() {
  if (ensured) return;

  const brevo = getBrevoClient();
  const existing = await brevo.contacts.getAttributes();
  const names = new Set(
    existing.attributes.map((attribute) => attribute.name.toUpperCase()),
  );

  for (const name of TEXT_ATTRIBUTES) {
    if (names.has(name)) continue;
    await createAttributeSafe({
      attributeCategory: "normal",
      attributeName: name,
      type: "text",
    });
  }

  if (!names.has(BREVO_CONTACT_ATTRIBUTES.background)) {
    await createAttributeSafe({
      attributeCategory: "category",
      attributeName: BREVO_CONTACT_ATTRIBUTES.background,
      type: "category",
      enumeration: BACKGROUND_OPTIONS.map((option) => ({
        value: option.value,
        label: option.label,
      })),
    });
  }

  ensured = true;
}
