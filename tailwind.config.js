import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        "noto-sans-jp": ["Noto Sans JP", "sans-serif"],
        japanese: ["Noto Sans JP", "Inter", "sans-serif"],
      },
      colors: {
        primary: "#FF963C",
        white: "#FFFFFF",
        dark: {
          500: "#414141",
          600: "#2D2D2D",
        },
        gray: {
          500: "#777777",
        },
        text: {
          DEFAULT: "#414141",
          orange: "#FF963C",
        },
        yellow: {
          primary: "#FFCC21",
        },
        orange: {
          400: "#FF963C",
          500: "#EA6C00",
        },
        mint: {
          secondary: "#8FE9D0",
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
