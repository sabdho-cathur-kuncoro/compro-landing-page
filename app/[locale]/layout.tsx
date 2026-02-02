import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { ReactNode } from "react";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import WhatsAppFab from "@/components/WhatsappFAB";

export const metadata: Metadata = {
  title: {
    default: "PT Pakar Kimia Utama | Polyurethane & Chemical Raw Materials",
    template: "%s | PT Pakar Kimia Utama",
  },
  description:
    "PT Pakar Kimia Utama is a trusted supplier of polyurethane raw materials including polyols, isocyanates, additives, and foam solutions for furniture, bedding, and industrial applications.",
  keywords: [
    "polyurethane raw materials",
    "polyol supplier",
    "polypropylene glycol PPG",
    "polymer polyol POP",
    "isocyanate TDI supplier",
    "PU additives",
    "foam raw materials",
    "polyurethane foam chemicals",
    "chemical supplier Indonesia",
  ],
  authors: [{ name: "PT Pakar Kimia Utama" }],
  openGraph: {
    title: "PT Pakar Kimia Utama | Polyurethane & Chemical Raw Materials",
    description:
      "Trusted supplier of polyurethane raw materials, polyols, isocyanates, and additives for foam, furniture, and industrial applications.",
    siteName: "PT Pakar Kimia Utama",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Pakar Kimia Utama | Polyurethane Raw Materials Supplier",
    description:
      "Supplying polyols, isocyanates, and PU additives for polyurethane foam and industrial applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // IMPORTANT: params IS A PROMISE IN NEXT.JS 16
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as never)) {
    notFound();
  }

  // Load messages
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <LanguageSwitcher />
          <WhatsAppFab />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
