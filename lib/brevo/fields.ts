export const BREVO_CONTACT_ATTRIBUTES = {
  firstName: "FNAME",
  lastName: "LNAME",
  sms: "SMS",
  instagram: "INSTAGRAM",
  portfolio: "PORTFOLIO",
  note: "NOTE",
  background: "BACKGROUND",
  course: "COURSE",
} as const;

export const COURSE_ATTRIBUTE_VALUE = "minneapolis-es-2m-8";

export const BACKGROUND_OPTIONS = [
  { value: 1, label: "Starting from zero", formValue: "cero" },
  { value: 2, label: "Drawing portfolio", formValue: "dibujo" },
  { value: 3, label: "Already tattoos", formValue: "tatuador" },
] as const;

export type BackgroundFormValue = (typeof BACKGROUND_OPTIONS)[number]["formValue"];
