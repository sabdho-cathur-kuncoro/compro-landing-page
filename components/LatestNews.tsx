"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const images = ["/news-1.jpg", "/news-2.jpg", "/news-3.jpg"];
const slugs = [
  "/news/pt-pakar-kimia-utama-coatings-expo",
  "/news/water-based-pigment-launch",
  "/news/silicone-expansion",
];

export default function LatestNews() {
  const t = useTranslations("latestNews");

  const news = [0, 1, 2].map((index) => ({
    id: index + 1,
    title: t(`items.${index}.title`),
    excerpt: t(`items.${index}.excerpt`),
    date: t(`items.${index}.date`),
    image: images[index],
    slug: slugs[index],
  }));

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* SECTION HEADER */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-semibold text-text">
            {t("sectionTitle")}
          </h2>
        </div>

        {/* NEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {news.map((item) => (
            <Link
              key={item.id}
              href={item.slug}
              className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* IMAGE */}
              <div className="relative h-55 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                {/* DATE */}
                <p className="text-sm text-text-muted mb-2">{item.date}</p>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-text leading-snug mb-3 group-hover:text-primary-hover transition-colors">
                  {item.title}
                </h3>

                {/* EXCERPT */}
                <p className="text-sm text-text-muted leading-relaxed">
                  {item.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* SEE ALL NEWS */}
        <div className="mt-14 text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-hover transition-colors"
          >
            {t("seeAll")}
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
