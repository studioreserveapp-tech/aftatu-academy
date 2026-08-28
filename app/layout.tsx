import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-provider";
import { messages } from "@/lib/i18n/messages";
import "./globals.css";

export const metadata: Metadata = {
  title: messages.es.metaTitle,
  description: messages.es.metaDescription,
  applicationName: messages.es.brandName,
  icons: {
    icon: [{ url: "/brand/af.png", type: "image/png" }],
    apple: [{ url: "/brand/af.png" }],
  },
  openGraph: {
    title: messages.es.metaTitle,
    description: messages.es.metaDescription,
    locale: "es_US",
    alternateLocale: ["en_US"],
    type: "website",
    siteName: messages.es.brandName,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" data-theme="studio" className="h-full antialiased">
      <body className="min-h-full bg-ink text-paper">
        <LanguageProvider>
          <div className="type-stretch min-h-full">{children}</div>
        </LanguageProvider>
      </body>
    </html>
  );
}
