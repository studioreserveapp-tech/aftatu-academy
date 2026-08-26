import { BrevoError } from "@getbrevo/brevo";

export function mapBrevoError(error: unknown) {
  if (error instanceof Error && error.message === "BREVO_API_KEY_MISSING") {
    return "El registro todavía no está conectado a Brevo. Falta BREVO_API_KEY.";
  }
  if (error instanceof Error && error.message === "BREVO_LIST_ID_INVALID") {
    return "BREVO_LIST_ID tiene que ser el número de la lista en Brevo.";
  }
  if (error instanceof BrevoError) {
    if (error.statusCode === 401) {
      return "Brevo rechazó la API key. Revisa BREVO_API_KEY.";
    }
    if (error.statusCode === 429) {
      return "Brevo está saturado. Inténtalo de nuevo en un minuto.";
    }
    return "No pudimos guardar tus datos en Brevo. Revisa el formulario e inténtalo otra vez.";
  }
  return "Algo falló al enviar el registro. Inténtalo de nuevo.";
}
