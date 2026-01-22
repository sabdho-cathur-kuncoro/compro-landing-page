import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Base */
        background: "var(--background)",
        foreground: "var(--foreground)",

        /* Brand */
        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",
        "primary-soft": "var(--color-primary-soft)",

        /* UI */
        bg: "var(--color-bg)",
        border: "var(--color-border)",

        /* Text */
        text: "var(--color-text)",
        "text-muted": "var(--color-text-muted)",
        "text-soft": "var(--color-text-soft)",
      },
    },
  },
  plugins: [],
};

export default config;
