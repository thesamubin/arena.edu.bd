import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        academic: {
          navy: {
            DEFAULT: "#142B45",
            deep: "#0B1726",
            light: "#1E3E63",
            subtle: "#F0F4F8",
          },
          warm: {
            DEFAULT: "#FAFAF7",
            light: "#FFFFFF",
            dark: "#F4F4EE",
          },
          grey: {
            DEFAULT: "#F1F3F5",
            border: "#E2E8F0",
            light: "#F8FAFC",
            dark: "#E5E7EB",
          },
          blue: {
            DEFAULT: "#4778A8",
            dark: "#355C82",
            light: "#6A96C2",
            wash: "#EBF3FA",
          },
          ink: {
            primary: "#0F172A",
            secondary: "#334155",
            muted: "#64748B",
            faint: "#94A3B8",
          },
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "Cambria", "serif"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      boxShadow: {
        academic: "0 1px 3px 0 rgba(20, 43, 69, 0.06), 0 1px 2px -1px rgba(20, 43, 69, 0.04)",
        "academic-md": "0 4px 6px -1px rgba(20, 43, 69, 0.08), 0 2px 4px -2px rgba(20, 43, 69, 0.04)",
        "academic-lg": "0 10px 15px -3px rgba(20, 43, 69, 0.09), 0 4px 6px -4px rgba(20, 43, 69, 0.04)",
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
