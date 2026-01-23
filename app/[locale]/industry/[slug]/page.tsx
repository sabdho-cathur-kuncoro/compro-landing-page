import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { industries } from "@/data/industries";
import { getTranslations } from "next-intl/server";
// import { productsByCategory } from "@/data/products";
// import ProductCard from "@/components/ProductCard";

interface IndustryPageProps {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const industry = industries.find(async (i) => i.slug === (await params).slug);

  if (!industry) {
    return {
      title: "Industry Not Found",
    };
  }

  return {
    title: industry.title,
    description: industry.description,
    openGraph: {
      title: industry.title,
      description: industry.description,
      images: [industry.image],
    },
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug, locale } = await params;
  const industry = industries.find((i) => i.slug === slug);
  const i = await getTranslations({ locale, namespace: "industries" });
  const t = await getTranslations({ locale, namespace: "industryDetail" });

  if (!industry) {
    notFound();
  }

  // Get related products (just use first 3 for demo)
  // const relatedProducts = productsByCategory[slug].slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* ================= FULL HEIGHT HERO ================= */}
      <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
        <Image
          src="/hero-bg.jpg"
          alt="Products background"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-70"
        />

        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t(`items.${slug}.title`)}
          </h1>
          <p className="text-xl text-white">{t(`items.${slug}.description`)}</p>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-80 lg:h-96 bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Industry Overview
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {industry.description}
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg
                    className="h-6 w-6 text-primary mr-3 mt-1 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-gray-600">
                    Industry-leading automation solutions
                  </p>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-6 w-6 text-primary mr-3 mt-1 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-gray-600">
                    Customized manufacturing workflows
                  </p>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-6 w-6 text-primary mr-3 mt-1 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-gray-600">
                    Proven track record of success
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {/* {relatedProducts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Solutions for {industry.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our products designed specifically for the{" "}
                {industry.title.toLowerCase()} industry.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((product: any) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/products"
                className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-700 transition-colors"
              >
                View All Products
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )} */}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {i("ctaDetail.title")}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {i("ctaDetail.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
              >
                {i("ctaDetail.btn")}
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
