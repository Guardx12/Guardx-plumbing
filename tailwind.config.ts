import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        slate: {
          25: "#F8FAFC"
        },
        brand: {
          50: "#ECFEFF",
          100: "#CFFAFE",
          200: "#A5F3FC",
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891B2",
          700: "#0E7490",
          800: "#155E75",
          900: "#164E63"
        },
        accent: {
          500: "#2563EB"
        }
      },
      boxShadow: {
        soft: "0 12px 30px rgba(2, 6, 23, 0.10)",
      }
    },
  },
  plugins: [],
} satisfies Config;
