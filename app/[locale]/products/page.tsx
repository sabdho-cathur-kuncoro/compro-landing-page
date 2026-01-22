"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { productCategories } from "@/data/productCategories";
import { useParallax } from "@/hooks/useParallax";

export default function ProductsPage() {
  const t = useTranslations("products");

  // Enable parallax
  useParallax();

  return (
    <main>
      {/* ================= FULL HEIGHT HERO ================= */}
      <section className="relative h-screen flex items-center justify-center bg-black">
        <Image
          src="/hero-bg.jpg"
          alt="Products background"
          fill
          priority
          className="object-cover opacity-70"
        />

        <div className="relative text-center text-white px-6">
          {/* Breadcrumb */}
          <div className="text-sm mb-6 opacity-80">
            {t("breadcrumb.home")} /{" "}
            <span className="font-medium">{t("breadcrumb.products")}</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">
            {t("hero.title")}
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90">
            {t("hero.subtitle")}
          </p>
        </div>
      </section>

      {/* ================= CATEGORY GRID (2x2, FULL WIDTH TILES) ================= */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
          {productCategories.map((item, index) => (
            <Link
              key={item.key}
              href={item.slug}
              className="group relative overflow-hidden"
            >
              {/* PARALLAX BACKGROUND */}
              <div
                className="
                  absolute left-0 right-0
                  -top-[25%] h-[150%]
                  parallax-item
                  will-change-transform
                "
                data-speed={(index + 1) * 0.25}
              >
                <Image
                  src={item.image}
                  alt={item.key}
                  fill
                  priority={index === 0}
                  className="
              object-cover
              transition-transform duration-700
              group-hover:scale-110
            "
                />
              </div>

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition" />

              {/* CONTENT */}
              <div className="relative z-10 h-full flex flex-col justify-end p-10 text-white">
                <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                  {t(`categories.${item.key}.title`)}
                </h3>

                <p className="max-w-sm text-sm md:text-base opacity-90 mb-6">
                  {t(`categories.${item.key}.desc`)}
                </p>

                <span className="inline-flex items-center gap-2 text-sm md:text-base font-medium">
                  {t("cta")} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
