import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { productsByCategory } from "@/data/products";
import { Link } from "@/i18n/navigation";
import ProductGallery from "./ProductGallery";

type Props = {
  params: {
    slug: string;
    id: string;
    locale: string;
  };
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
      {/* HERO */}
      <section className="relative h-65 flex items-center bg-black">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          priority
          className="object-cover opacity-70"
        />

        <div className="relative max-w-7xl mx-auto px-8 text-white">
          <div className="text-sm opacity-80 mb-3">
            {t("breadcrumb.home")} / {t("breadcrumb.products")} /{" "}
            <span className="capitalize">{slug.replace("-", " ")}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold">{product.name}</h1>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16">
          {/* LEFT */}
          <ProductGallery product={product} />

          {/* RIGHT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              {product.name}
            </h2>

            <p className="text-sm text-text-muted mb-2 capitalize">
              {slug.replace("-", " ")}
            </p>
            <p className="leading-relaxed font-semibold">{product.weight}</p>

            <p className="leading-relaxed mb-8">
              {product.long_desc || t("defaultDescription")}
            </p>

            <div className="flex gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-primary text-white rounded-md"
              >
                {t("contactButton")}
              </Link>

              <Link
                href={`/products/${slug}`}
                className="px-6 py-3 border rounded-md"
              >
                ← {t("backButton")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
