import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { LanguageProvider } from "@/components/language-provider";
import { messages } from "@/lib/i18n/messages";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

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
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink text-paper">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
