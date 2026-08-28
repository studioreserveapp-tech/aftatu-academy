export const BACKGROUND_OPTIONS = [
  { formValue: "cero" },
  { formValue: "dibujo" },
  { formValue: "tatuador" },
] as const;

export type BackgroundFormValue = (typeof BACKGROUND_OPTIONS)[number]["formValue"];

export const SCHEDULE_OPTIONS = [
  { formValue: "manana" },
  { formValue: "tarde" },
] as const;

export type ScheduleFormValue = (typeof SCHEDULE_OPTIONS)[number]["formValue"];

/** Plain-text labels for the notification email, which has no i18n context. */
export const SCHEDULE_EMAIL_LABELS: Record<ScheduleFormValue, string> = {
  manana: "Mañana · 9am a 11am",
  tarde: "Tarde · 6pm a 8pm",
};

export const BACKGROUND_EMAIL_LABELS: Record<BackgroundFormValue, string> = {
  cero: "Empieza de cero",
  dibujo: "Tiene portfolio de dibujo",
  tatuador: "Ya tatúa",
};
