"use client";

import { useParallax } from "@/hooks/useParallax";

export function ProductsGridWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useParallax();
  return <>{children}</>;
}
