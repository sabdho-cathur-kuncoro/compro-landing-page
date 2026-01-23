"use client";

import { Link } from "@/i18n/navigation";
import { Phone } from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="bg-bg border-t border-border">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* LEFT — FOLLOW & COPYRIGHT */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-text-muted">
            <span className="font-medium text-text">{t("label.follow")}</span>

            <div className="flex gap-4 text-primary">
              <a
                href="#"
                className="hover:text-primary-hover transition"
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                className="hover:text-primary-hover transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={16} />
              </a>

              <a
                href="#"
                className="hover:text-primary-hover transition"
                aria-label="Twitter / X"
              >
                <FaXTwitter size={16} />
              </a>
            </div>
          </div>

          <p className="text-sm text-text-muted">
            © 2026 PT Pakar Kimia Utama Chemicals. All rights reserved.
          </p>
        </div>

        {/* CENTER — ADDRESS */}
        <div>
          <h4 className="font-semibold text-text mb-4 uppercase tracking-wide">
            {t("label.address")}
          </h4>

          <p className="text-text-muted leading-relaxed">
            Jalan Raya Legok Nomor 7 B <br />
            Tangerang Regency <br />
            Indonesia
          </p>
        </div>

        {/* RIGHT — CONTACT */}
        <div>
          <h4 className="font-semibold text-text mb-4 uppercase tracking-wide">
            {t("label.contact")}
          </h4>

          <ul className="space-y-3 text-text-muted">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-primary" />
              <span>(62-21) 560 8848 / (62-21) 560 8884</span>
            </li>

            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-green-500" size={16} />
              <span>Jakarta (WhatsApp)</span>
            </li>

            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-green-500" size={16} />
              <span>Bandung (WhatsApp)</span>
            </li>

            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-green-500" size={16} />
              <span>Semarang (WhatsApp)</span>
            </li>

            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-green-500" size={16} />
              <span>Surabaya (WhatsApp)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-8 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-text-muted">
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-primary-hover transition"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary-hover transition">
              Terms of Service
            </Link>
          </div>

          {/* LANGUAGE SWITCH (OPTIONAL – like screenshot) */}
          <div className="mt-4 md:mt-0">
            {/* You can plug your language switcher here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
