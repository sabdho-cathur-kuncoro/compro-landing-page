/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductCategoryClient({
  slug,
  products,
}: {
  slug: string;
  products: any[];
}) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            {/* IMAGE */}
            <div className="relative h-55 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="text-sm font-medium text-text mb-4">
                {product.name}
              </h3>

              {/* 👉 NAVIGATE TO DETAIL PAGE */}
              <Link
                href={`/products/${slug}/${product.id}`}
                className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition text-sm"
              >
                View Detail →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
