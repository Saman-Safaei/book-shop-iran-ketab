const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["var(--estedad)", ...fontFamily.sans],
        vazirmatn: ["var(--vazirmatn)"],
      },
      spacing: {
        "navbar-height": '5rem',
      },
      colors: {
        primary: {
          main: "#FD8F32",
          50: "#FFE9D6",
          100: "#FEDABB",
          150: "#FEC798",
          200: "#FEB476",
          300: "#FDA254",
          400: "#FD8F32",
          500: "#D3772A",
          600: "#A95F21",
          700: "#7F4819",
          800: "#543011",
          900: "#331D0A",
        },
        secondary: {
          main: "#0E121D",
          50: "#CFD0D2",
          100: "#AFB0B4",
          150: "#86888E",
          200: "#5E6168",
          300: "#363A43",
          400: "#0E121D",
          500: "#0C0F18",
          600: "#090C13",
          700: "#07090F",
          800: "#05060A",
          900: "#030406",
        },
        text: {
          main: "#2B2B2B",
          50: "#D5D5D5",
          100: "#B8B8B8",
          150: "#959595",
          200: "#727272",
          300: "#4E4E4E",
          400: "#2B2B2B",
          500: "#242424",
          600: "#1D1D1D",
          700: "#161616",
          800: "#0E0E0E",
          900: "#090909",
        },
      },
    },
  },
  plugins: [],
};
