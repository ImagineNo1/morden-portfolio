import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#030712",
        bgSoft: "#050816",
        bgAlt: "#070A12",
        glass: "rgba(255,255,255,0.045)",
        line: "rgba(255,255,255,0.10)",
        textMuted: "rgba(255,255,255,0.65)",
        neon: "#8B5CF6",
        neonDeep: "#7C3AED",
        accent: "#F97316",
      },
      maxWidth: {
        frame: "1440px",
      },
      boxShadow: {
        neon: "0 0 60px rgba(139,92,246,0.35)",
        panel: "0 28px 90px rgba(0,0,0,0.35)",
      },
      borderRadius: {
        panel: "34px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-16px,0)" },
        },
        slowSpin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        slowSpin: "slowSpin 36s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
