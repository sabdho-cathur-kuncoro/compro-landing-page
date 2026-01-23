/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from "next/navigation";
import { productsByCategory } from "@/data/products";
import ProductCategoryClient from "./ProductCategoryClient";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
};

export default async function ProductCategoryPage({ params }: Props) {
  const { slug, locale } = await params;

  const products = productsByCategory[slug];
  if (!products) notFound();

  const t = await getTranslations({ locale, namespace: "productList" });

  return (
    <main className="bg-bg min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-70 flex items-center justify-center bg-black">
        <Image
          fill
          src="/hero-bg.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          alt={slug}
        />

        <div className="relative max-w-7xl mx-auto text-center px-8 text-white z-10">
          <div className="text-sm opacity-80 mb-3">
            {t("breadcrumb.home")} / {t("breadcrumb.products")} /{" "}
            <span className="capitalize">{slug.replace("-", " ")}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold">
            {t(`categories.${slug}.title`)}
          </h1>
        </div>
      </section>

      {/* CLIENT GRID */}
      <ProductCategoryClient slug={slug} products={products} />
    </main>
  );
}
