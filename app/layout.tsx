import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import { LanguageProvider } from "@/components/language-provider";
import { messages } from "@/lib/i18n/messages";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: messages.es.metaTitle,
  description: messages.es.metaDescription,
  openGraph: {
    title: messages.es.metaTitle,
    description: messages.es.metaDescription,
    locale: "es_US",
    alternateLocale: ["en_US"],
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
