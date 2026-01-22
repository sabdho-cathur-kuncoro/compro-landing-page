"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const categories = [
  { id: 1, title: "Pigment Paste", image: "/cat-1.jpg" },
  { id: 2, title: "Silicone", image: "/cat-2.jpg" },
  { id: 3, title: "Biocides", image: "/cat-3.jpg" },
  { id: 4, title: "Additives", image: "/cat-4.jpg" },
];

export default function ProductCategories() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress when section is visible
      const progress = Math.min(
        Math.max((windowHeight - rect.top) / windowHeight, 0),
        1,
      );

      // Subtle parallax offset (max 40px)
      setOffset(progress * 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-white overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-8">
        {/* SECTION TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900">Our Products</h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map((item, index) => (
            <div
              key={item.id}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              style={{
                transform: `translateY(${offset * (0.4 + index * 0.15)}px)`,
              }}
            >
              {/* IMAGE */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* TITLE */}
              <div className="bg-white py-5 text-center">
                <h3 className="text-lg font-medium text-gray-900">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
