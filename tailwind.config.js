import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors:{
        "roxo": "#BF49B7",
        "azul1": "#56208C",
        "azul2": "#583BBF",
        "azul3": "#91B2F2",
        "azul4": "#BDCFF2",
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;