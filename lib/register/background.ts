export const BACKGROUND_OPTIONS = [
  { formValue: "cero" },
  { formValue: "dibujo" },
  { formValue: "tatuador" },
] as const;

export type BackgroundFormValue = (typeof BACKGROUND_OPTIONS)[number]["formValue"];
