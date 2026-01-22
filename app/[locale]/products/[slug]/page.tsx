import { notFound } from "next/navigation";
import { productsByCategory } from "@/data/products";
import ProductCategoryClient from "./ProductCategoryClient";
import Image from "next/image";

type Props = {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
};

export default async function ProductCategoryPage({ params }: Props) {
  const { slug } = await params;

  const products = productsByCategory[slug];
  if (!products) notFound();

  return (
    <main className="bg-bg min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-105 flex items-center justify-center bg-black">
        <Image
          src="/hero-bg.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          alt={slug}
        />

        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 capitalize">
            {slug.replace("-", " ")}
          </h1>
        </div>
      </section>

      {/* CLIENT GRID */}
      <ProductCategoryClient slug={slug} products={products} />
    </main>
  );
}
