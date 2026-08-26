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

export const COURSE_ATTRIBUTE_VALUE = "principiantes-2m";

export const BACKGROUND_OPTIONS = [
  { value: 1, label: "Empiezo de cero", formValue: "cero" },
  { value: 2, label: "Tengo portfolio de dibujo", formValue: "dibujo" },
  { value: 3, label: "Ya tatúo", formValue: "tatuador" },
] as const;

export type BackgroundFormValue = (typeof BACKGROUND_OPTIONS)[number]["formValue"];
