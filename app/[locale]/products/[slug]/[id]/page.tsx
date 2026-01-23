import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { productsByCategory } from "@/data/products";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
    id: string;
    locale: string;
  }>;
};

export default async function ProductDetailPage({ params }: Props) {
  const { slug, id } = await params;

  const products = productsByCategory[slug];
  if (!products) notFound();

  const product = products.find((p) => String(p.id) === id);
  if (!product) notFound();

  const t = await getTranslations("productDetail");

  return (
    <main className="bg-bg min-h-screen">
      {/* ================= HERO HEADER ================= */}
      <section className="relative h-65 flex items-center bg-black">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority
          className="object-cover opacity-70"
        />

        <div className="relative max-w-7xl mx-auto px-8 text-white">
          {/* Breadcrumb */}
          <div className="text-sm opacity-80 mb-3">
            {t("breadcrumb.home")} / {t("breadcrumb.products")} /{" "}
            <span className="capitalize">{slug.replace("-", " ")}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold">{product.name}</h1>
        </div>
      </section>

      {/* ================= MAIN PRODUCT SECTION ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16">
          {/* LEFT — IMAGE */}
          <div className="relative h-105 rounded-xl overflow-hidden shadow">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* RIGHT — INFO */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-text mb-4">
              {product.name}
            </h2>

            <p className="text-sm text-text-muted mb-2 capitalize">
              {slug.replace("-", " ")}
            </p>

            <p className="text-text leading-relaxed mb-8">
              {product.desc || t("defaultDescription")}
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-hover transition"
              >
                {t("contactButton")}
              </Link>

              <a
                href={`/products/${slug}`}
                className="px-6 py-3 border border-border rounded-md hover:bg-bg transition"
              >
                ← {t("backButton")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DETAILS / TABS SECTION ================= */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-8">
          {/* SECTION NAV */}
          <div className="flex gap-8 border-b border-border mb-10 text-sm font-medium">
            <span className="pb-3 border-b-2 border-primary text-primary cursor-default">
              {t("tabs.description")}
            </span>
            <span className="pb-3 text-text-muted">
              {t("tabs.application")}
            </span>
            <span className="pb-3 text-text-muted">{t("tabs.features")}</span>
          </div>

          {/* DESCRIPTION */}
          <div className="space-y-6 text-text leading-relaxed">
            <p>{product.desc || t("longDescription")}</p>

            <ul className="list-disc pl-6 space-y-2 text-text-muted">
              <li>{t("points.quality")}</li>
              <li>{t("points.performance")}</li>
              <li>{t("points.compatibility")}</li>
              <li>{t("points.stability")}</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
