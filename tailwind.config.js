/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-900": "#0b0b0b",
        "primary-500": "#cc0f3c",
        "white": "#fff",
        "darkslategray": "#424242",
        "white-8": "rgba(255, 255, 255, 0.08)",
        "neutral-200": "#e9e9e9",
        "neutral-600": "#424242",
        "danger-500": "#cc240e",
        "white-16": "rgba(255, 255, 255, 0.16)",
        'silver': "#b5b5b5",
        "neutral-700": "#252525",
        "neutral-800": "#1b1b1b",
        "primary-100": "#efb5c3",
      },
      spacing: {},
      fontFamily: {
        "button-1-semibold": "Nunito",
        "sf-pro-text": "'SF Pro Text'",
      },
      borderRadius: {
        "5xs-6": "7.6px",
      },
    },
    fontSize: {
      'base': "16px",
      'sm': "14px",
      'xl': "20px",
      "7xs-1": "5.1px",
      "xs-4": "11.4px",
      "mini-6": "14.6px",
      "lg-4": "18.4px",
      "3xl-2": "22.2px",
      'inherit': "inherit",
    }
  },
  corePlugins: {
    preflight: false,
  },
};