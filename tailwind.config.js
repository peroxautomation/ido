/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-900": "#0b0b0b",
        "neutral-800": "#1b1b1b",
        "primary-500": "#cc0f3c",
        "neutral-100": "#fff",
        "white-8": "rgba(255, 255, 255, 0.08)",
        "white-16": "rgba(255, 255, 255, 0.16)",
        "white-40": "rgba(255, 255, 255, 0.4)",
        "neutral-200": "#e9e9e9",
        gray: "rgba(0, 0, 0, 0.7)",
        black: "rgb(0 0 0)"
      },
      spacing: {},
      fontFamily: {
        "body-regular": "Nunito",
        "sf-pro-text": "'SF Pro Text'",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      base: "16px",
      "13xl": "32px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
