/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({ product }: any) {
  const images = product.images;
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      {/* MAIN IMAGE */}
      <div className="relative h-105 rounded-xl overflow-hidden shadow">
        <Image
          src={activeImage}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      {/* THUMBNAILS */}
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img: any, idx: any) => (
            <button
              key={idx}
              onClick={() => setActiveImage(img)}
              className={`relative w-20 h-20 rounded-lg overflow-hidden border
                ${
                  activeImage === img
                    ? "border-primary ring-2 ring-primary"
                    : "border-gray-200"
                }`}
            >
              <Image
                src={img}
                alt={`${product.name} ${idx + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
