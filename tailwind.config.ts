// @ts-ignore
import type { Config } from "tailwindcss";

const config: any = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary purple palette - sophisticated and royal
        purple: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6", // Primary purple
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
        // Soft violet accents
        violet: {
          50: "#fdfaff",
          100: "#f5f3ff",
          200: "#ede9fe",
          300: "#ddd6fe",
          400: "#c4b5fd",
          500: "#a78bfa",
        },
        // Royal gold accents
        gold: {
          50: "#fffdf0",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#eab308",
        },
        // Neutrals matching wireframe
        gray: {
          50: "#f9fafb",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#666666",
          600: "#555555",
          700: "#333333",
          800: "#222222",
          900: "#000000",
        },
        // Legacy colors for compatibility
        ink: "#000000",
        porcelain: "#ffffff",
        surface: {
          DEFAULT: "#ffffff",
          muted: "#f5f5f5",
        },
        border: {
          DEFAULT: "#cccccc",
          soft: "#e5e7eb",
        },
        text: {
          DEFAULT: "#000000",
          muted: "#666666",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "Inter", "sans-serif"],
        display: ["var(--font-display)", "Playfair Display", "serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
      },
      fontSize: {
        // Matching wireframe typography
        xs: ["12px", { lineHeight: "1.5" }],
        sm: ["14px", { lineHeight: "1.5" }],
        base: ["16px", { lineHeight: "1.5" }],
        lg: ["18px", { lineHeight: "1.2" }],
        xl: ["20px", { lineHeight: "1.2" }],
        "2xl": ["24px", { lineHeight: "1.2" }],
        "3xl": ["28px", { lineHeight: "1.2" }],
        "4xl": ["32px", { lineHeight: "1.2" }],
        "5xl": ["40px", { lineHeight: "1.2" }],
      },
      spacing: {
        // Wireframe spacing system
        "8": "8px",
        "16": "16px",
        "24": "24px",
        "32": "32px",
        "48": "48px",
      },
      boxShadow: {
        soft: "0 4px 8px rgba(0, 0, 0, 0.1)",
        card: "0 8px 16px rgba(0, 0, 0, 0.1)",
        modal: "0 10px 30px rgba(0, 0, 0, 0.2)",
      },
      maxWidth: {
        viewport: "1728px",
        content: "1200px",
      },
      borderRadius: {
        none: "0",
      },
    },
  },
  plugins: [],
};

export default config;


