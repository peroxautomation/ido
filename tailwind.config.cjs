/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-900": "#0b0b0b",
        "primary-500": "#cc0f3c",
        "neutral-200": "#e9e9e9",
        "white-8": "rgba(255, 255, 255, 0.08)",
        "white": "#fff",
        "darkslategray": "#424242",
        "neutral-900": "#0b0b0b",
        "error-red": "#CC240E"
      },
      spacing: {},
      fontFamily: {
        "button-2-semibold": "Nunito",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
