import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about PT Pakar Kimia Utama, our mission, vision, and journey in providing industrial automation solutions since 2010.",
};

interface Props {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  const milestones = t.raw("timeline.milestones") as {
    year: string;
    title: string;
    description: string;
  }[];
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
            <span className="font-medium">{t("breadcrumb.about")}</span>
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

      {/* Company Profile */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("body.title")}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {t("body.desc1")}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {t("body.desc2")}
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-4xl font-bold text-blue-900 mb-2">
                    500+
                  </div>
                  <div className="text-gray-600">{t("body.client")}</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-4xl font-bold text-blue-900 mb-2">
                    15+
                  </div>
                  <div className="text-gray-600">{t("body.years")}</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-4xl font-bold text-blue-900 mb-2">
                    50+
                  </div>
                  <div className="text-gray-600">{t("body.city")}</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-4xl font-bold text-blue-900 mb-2">
                    200+
                  </div>
                  <div className="text-gray-600">{t("body.engineers")}</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
                alt="Our team working together"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <svg
                  className="h-12 w-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t("vision.title")}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t("vision.desc")}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <svg
                  className="h-12 w-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t("mision.title")}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t("mision.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / Milestones */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("timeline.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("timeline.desc")}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0">
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-200"></div>

                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-blue-100"></div>

                {/* Content */}
                <div className="bg-white rounded-lg shadow-md p-6 ml-6">
                  <div className="text-primary font-bold text-sm mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-xl text-blue-100 mb-8">{t("cta.subtitle")}</p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
            >
              {t("cta.btn")}
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
    </div>
  );
}
