"use client";

import { useEffect } from "react";

export function useParallax() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".parallax-item");

    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      items.forEach((el) => {
        const wrapper = el.parentElement;
        if (!wrapper) return;

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
}
