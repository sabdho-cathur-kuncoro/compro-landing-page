import Hero from "@/components/Hero";
import HeroParallaxBands from "@/components/HeroParallaxBands";
import LatestNews from "@/components/LatestNews";
export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Product Categories Section */}
      <HeroParallaxBands />

      {/* Latest News Section */}
      <LatestNews />
    </>
  );
}
