import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { LanguageProvider } from "@/components/language-provider";
import { messages } from "@/lib/i18n/messages";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
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
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink text-paper">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
