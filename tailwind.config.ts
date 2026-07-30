import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: "#0B3B2E",
          deep: "#07281F",
        },
        gold: {
          DEFAULT: "#C7A65A",
          light: "#E4CD98",
        },
        ivory: "#F8F7F3",
        inkdark: "#0D1117",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Manrope", "sans-serif"],
      },
      spacing: {
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "6.5": "1.625rem",
        "13": "3.25rem",
        "18": "4.5rem",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-24px) translateX(10px)" },
        },
        wordUp: {
          to: { transform: "translateY(0)" },
        },
        scrollX: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        floaty: "floaty 8s ease-in-out infinite",
        wordUp: "wordUp 0.9s cubic-bezier(.22,1,.36,1) forwards",
        scrollX: "scrollX 32s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
