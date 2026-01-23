import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

const ITEMS_PER_PAGE = 6;

export const metadata: Metadata = {
  title: "News & Insights",
  description:
    "Stay updated with the latest news, trends, and insights from PT Pakar Kimia Utama and the industrial automation industry.",
};

export default async function NewsPage({
  searchParams,
  params,
}: {
  searchParams: Promise<{ page?: string }>;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "news" });

  const newsArticles = t.raw("articles.list") as {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    date: string;
    author: string;
    category: string;
  }[];

  const resolvedSearchParams = await searchParams;
  const currentPage = parseInt(resolvedSearchParams.page || "1", 10);
  const totalPages = Math.ceil(newsArticles.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentArticles = newsArticles.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen">
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
            <span className="font-medium">{t("breadcrumb.news")}</span>
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

      {/* Featured Article */}
      {currentPage === 1 && newsArticles.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Link
                href={`/news/${newsArticles[0].slug}`}
                className="group block"
              >
                <div className="relative h-96 lg:h-125 bg-gray-200 rounded-lg overflow-hidden mb-6">
                  <Image
                    src={newsArticles[0].image}
                    alt={newsArticles[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-4 py-2 rounded-full">
                    Featured
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <time dateTime={newsArticles[0].date}>
                      {new Date(newsArticles[0].date).toLocaleDateString(
                        "en-US",
                        {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}
                    </time>
                    <span className="mx-2">•</span>
                    <span>{newsArticles[0].category}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {newsArticles[0].title}
                  </h2>
                  <p className="text-lg text-gray-600 line-clamp-2">
                    {newsArticles[0].excerpt}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t("articles.title")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/news/${article.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    <div className="relative h-48 bg-gray-200 overflow-hidden shrink-0">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {article.category}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col grow">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <time dateTime={article.date}>
                          {new Date(article.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </time>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3 grow">
                        {article.excerpt}
                      </p>
                      <div className="mt-4 text-primary font-semibold text-sm group-hover:text-primary-hover transition-colors">
                        {t("articles.cta")}
                        <svg
                          className="inline-block ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform"
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
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-12 space-x-2">
                {currentPage > 1 && (
                  <Link
                    href={`/news?page=${currentPage - 1}`}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Previous
                  </Link>
                )}

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <Link
                      key={page}
                      href={`/news?page=${page}`}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        page === currentPage
                          ? "bg-primary text-white"
                          : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {page}
                    </Link>
                  )
                )}

                {currentPage < totalPages && (
                  <Link
                    href={`/news?page=${currentPage + 1}`}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Next
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-xl text-blue-100 mb-8">{t("cta.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder={t("cta.input")}
                className="px-6 py-4 rounded-lg grow bg-transparent border border-white/70 text-white placeholder-gray-300 hover:border-white focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                {t("cta.btn")}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
