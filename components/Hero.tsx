"use client";

import Image from "next/image";
import LiquidBlobs from "@/components/LiquidBlobs";
import NoiseOverlay from "./NoiseOverlay";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-30">
        <Image
          src="/hero-bg.jpg"
          alt="Abstract fluid background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/15 -z-20" />

      {/* LIQUID ANIMATION LAYER */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-175 h-175 opacity-90">
          <LiquidBlobs />
        </div>
      </div>

      {/* NOISE GRAIN OVERLAY (TOP LAYER) */}
      <div className="absolute inset-0 -z-10">
        <NoiseOverlay />
      </div>

      {/* CENTER CONTENT */}
      <div className="relative flex flex-col min-h-[92vh] items-center justify-center text-center px-6">
        <h1 className="max-w-3xl text-white font-semibold leading-tight text-4xl md:text-5xl lg:text-6xl drop-shadow-lg">
          {t("headline")}
        </h1>
        {/* SUBTITLE */}
        <p
          className="
            text-base md:text-lg
            text-white
            leading-relaxed
            max-w-2xl
          "
        >
          {t("subtitle")}
        </p>
      </div>
    </section>
  );
}
