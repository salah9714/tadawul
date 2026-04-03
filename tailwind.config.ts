import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fffdf5",
          100: "#fff8e7",
          200: "#f0d890",
          300: "#e5c56e",
          400: "#d4a84b",
          500: "#c49a3a",
          600: "#a67f2e",
          700: "#886523",
          800: "#6a4c1a",
          900: "#4c3511",
        },
        navy: {
          DEFAULT: "#0f1729",
          50: "#1e293b",
          100: "#1a2744",
          200: "#162038",
          300: "#0f1729",
          400: "#0b1120",
        },
        slate: {
          750: "#263348",
        },
      },
      fontFamily: {
        tajawal: ["Tajawal", "Segoe UI", "Tahoma", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
