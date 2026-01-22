import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { ReactNode } from "react";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export const metadata: Metadata = {
  title: {
    default:
      "PT Pakar Kimia Utama - Industrial Automation & Manufacturing Solutions",
    template: "%s | PT Pakar Kimia Utama",
  },
  description:
    "Leading provider of industrial automation and manufacturing solutions. Empowering businesses with cutting-edge technology, smart manufacturing, and robotics systems.",
  keywords: [
    "industrial automation",
    "manufacturing solutions",
    "smart manufacturing",
    "robotics",
    "quality control",
    "energy management",
  ],
  authors: [{ name: "PT Pakar Kimia Utama" }],
  openGraph: {
    title:
      "PT Pakar Kimia Utama - Industrial Automation & Manufacturing Solutions",
    description:
      "Leading provider of industrial automation and manufacturing solutions.",
    // url: "https://PTPakarKimiaUtama.com",
    siteName: "PT Pakar Kimia Utama",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "PT Pakar Kimia Utama - Industrial Automation & Manufacturing Solutions",
    description:
      "Leading provider of industrial automation and manufacturing solutions.",
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
  // 🔴 IMPORTANT: params IS A PROMISE IN NEXT.JS 16
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
          {/* FIXED LANGUAGE BUTTON */}
          <LanguageSwitcher />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
