"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const segments = pathname.split("/");
  const currentLocale = segments[1];
  const restPath = "/" + segments.slice(2).join("/");

  const buildPath = (locale: string) => {
    if (restPath === "/") return `/${locale}`;
    return `/${locale}${restPath}`;
  };

  return (
    <div
      className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-2
        bg-white/90 backdrop-blur
        border border-border
        shadow-lg rounded-full
        px-3 py-2
      "
    >
      {/* EN */}
      <Link
        href={buildPath("en")}
        className={`
          px-3 py-1 rounded-full text-sm font-medium transition-colors
          ${
            currentLocale === "en"
              ? "bg-primary-soft text-primary"
              : "text-text-muted hover:text-primary"
          }
        `}
      >
        EN
      </Link>

      {/* ID */}
      <Link
        href={buildPath("id")}
        className={`
          px-3 py-1 rounded-full text-sm font-medium transition-colors
          ${
            currentLocale === "id"
              ? "bg-primary-soft text-primary"
              : "text-text-muted hover:text-primary"
          }
        `}
      >
        ID
      </Link>
    </div>
  );
}
