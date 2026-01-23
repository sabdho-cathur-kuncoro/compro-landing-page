"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, User, Menu, X } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const t = useTranslations("navbar");

  const menuItems = [
    { label: t("products"), href: "/products" },
    { label: t("industry"), href: "/industry" },
    { label: t("about"), href: "/about" },
    { label: t("news"), href: "/news" },
    { label: t("contact"), href: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-background">
        <div className="max-w-7xl mx-auto h-19.5 px-8 flex items-center justify-between">
          {/* LEFT - LOGO */}
          <Link
            href="/"
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-primary" />
            <span className="font-semibold text-xl tracking-wide text-text">
              PT Pakar Kimia Utama
            </span>
            {/* <Image
              src="/logo.png"
              alt="Company Logo"
              width={140}
              height={40}
              priority
              className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]"
            /> */}
          </Link>

          {/* CENTER - DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-12 text-[15px] font-medium">
            {menuItems.map((item) => {
              const cleanPath = pathname.replace(/^\/(en|id)/, "");

              const isActive =
                cleanPath === item.href ||
                cleanPath.startsWith(item.href + "/");
              console.log({ pathname });
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative inline-block transition-colors duration-200
                    ${
                      isActive
                        ? "text-primary font-semibold after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-6 after:h-0.5 after:bg-primary"
                        : "text-primary hover:text-primary-hover"
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT - ICONS & HAMBURGER */}
          <div className="flex items-center gap-6">
            {/* Desktop icons */}
            <div className="hidden md:flex items-center gap-6">
              <button
                aria-label="Search"
                className="text-primary hover:text-primary-hover transition-colors"
              >
                <Search size={20} />
              </button>

              <button
                aria-label="Account"
                className="text-primary hover:text-primary-hover transition-colors"
              >
                <User size={20} />
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-primary hover:text-primary-hover transition-colors"
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE DRAWER */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-70 bg-background shadow-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="h-19.5 px-6 flex items-center justify-between border-b border-border">
          <span className="font-semibold text-lg text-primary">Menu</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="text-primary hover:text-primary-hover transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Drawer Menu */}
        <nav className="flex flex-col py-6">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="
                px-6 py-4 text-[16px] font-medium
                text-primary
                transition-colors duration-200
                hover:bg-bg hover:text-primary-hover
              "
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Drawer Footer Icons */}
        <div className="mt-auto px-6 py-6 border-t border-border flex gap-6">
          <button className="text-primary hover:text-primary-hover transition-colors">
            <Search size={20} />
          </button>
          <button className="text-primary hover:text-primary-hover transition-colors">
            <User size={20} />
          </button>
        </div>
      </aside>
    </>
  );
}
