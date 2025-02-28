import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        terciary: "var(--terciary)",
        surface: "var(--surface)",
        variant: "var(--variant)",
      },
      fontFamily: {
        sans: ["var(--font-opensans)"],
        mono: ["var(--font-roboto-mono)"],
        inter: ["var(--font-inter)"],
        archivo: ["var(--font-archivo)"],
        crimson: ["var(--font-crimson-pro)"]
      },
    },
  },
  plugins: [],
} satisfies Config;
