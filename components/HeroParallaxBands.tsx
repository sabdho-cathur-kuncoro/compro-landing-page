"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const images = ["/band-1.jpg", "/band-2.jpg", "/band-3.jpg", "/band-4.jpg"];

export default function HeroParallaxBands() {
  const t = useTranslations("bands");
  const bgRefs = useRef<HTMLDivElement[]>([]);

  const bands = [0, 1, 2, 3].map((index) => ({
    id: index + 1,
    tag1: t(`${index}.tag1`),
    tag2: t(`${index}.tag2`),
    title: t(`${index}.title`),
    path: t(`${index}.slug`),
    cta: t(`${index}.cta`),
    image: images[index],
  }));

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) return;

      const windowHeight = window.innerHeight;

      bgRefs.current.forEach((el) => {
        if (!el) return;

        const wrapper = el.parentElement!;
        const rect = wrapper.getBoundingClientRect();

        if (rect.bottom < 0 || rect.top > windowHeight) return;

        const progress =
          (rect.top + rect.height / 2 - windowHeight / 2) / (windowHeight / 2);

        const maxOffset = 60;
        const offset = Math.max(
          Math.min(progress * maxOffset, maxOffset),
          -maxOffset
        );

        el.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full">
      {bands.map((item, index) => (
        <div key={item.id} className="relative h-95 w-full overflow-hidden">
          {/* PARALLAX BACKGROUND */}
          <div
            ref={(el) => {
              if (el) bgRefs.current[index] = el;
            }}
            className="
              absolute left-0 right-0
              -top-[30%] h-[160%]
              will-change-transform
            "
          >
            <Image
              src={item.image}
              alt={item.tag1}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>

          {/* OVERLAY — THEME BASED */}
          <div className="absolute inset-0 bg-foreground/40" />

          {/* CONTENT */}
          <div className="relative max-w-7xl mx-auto h-full px-8 flex flex-col justify-center">
            {/* TAGS */}
            <div className="flex gap-4 mb-6">
              <span
                className="
                bg-primary
                text-primary-soft
                px-5 py-2 rounded-full
                text-sm font-medium
              "
              >
                {item.tag1}
              </span>

              <span
                className="
                bg-primary
                text-primary-soft
                px-5 py-2 rounded-full
                text-sm font-medium
              "
              >
                {item.tag2}
              </span>
            </div>

            {/* TEXT */}
            <h2
              className="
              max-w-3xl
              text-white
              text-xl md:text-2xl lg:text-3xl
              font-light leading-snug
            "
            >
              {item.title}
            </h2>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href={item.path}
                className="
                flex items-center gap-3
                bg-transparent
                text-primary-soft py-3 rounded-full
                font-medium
                transition-colors
                cursor-pointer
              "
              >
                <span
                  className="
                  w-8 h-8 flex items-center justify-center
                  bg-primary
                  rounded-full
                  text-white
                  transition-colors
                "
                >
                  →
                </span>
                {item.cta}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
