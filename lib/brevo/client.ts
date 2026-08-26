import { BrevoClient } from "@getbrevo/brevo";
import { getBrevoApiKey } from "@/lib/brevo/config";

let client: BrevoClient | undefined;

export function getBrevoClient() {
  if (!client) {
    client = new BrevoClient({
      apiKey: getBrevoApiKey(),
      timeoutInSeconds: 20,
      maxRetries: 2,
    });
  }
  return client;
}
