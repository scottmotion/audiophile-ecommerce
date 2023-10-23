/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
    extend: {
      colors: {
        "dark-orange": "#d87d4a",
        "light-orange": "#fbaf85",
        "dark-grey": "#101010",
        "medium-grey": "#4c4c4c",
        "light-grey": "#f1f1f1",
        "off-white": "#fafafa",
        "white": "#ffffff",
        "black": "#000000",
      },
      fontSize: {
        base: "0.9375rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        body: { fontSize: theme("fontSize.base"), lineHeight: "25px" },
        h1: {
          fontSize: "56px",
          lineHeight: "58px",
          letterSpacing: "2px",
          fontWeight: "bold",
          textTransform: "uppercase",
        },
        h2: {
          fontSize: "40px",
          lineHeight: "44px",
          letterSpacing: "1.5px",
          fontWeight: "bold",
          textTransform: "uppercase",
        },
        h3: {
          fontSize: "32px",
          lineHeight: "36px",
          letterSpacing: "1.15px",
          fontWeight: "bold",
          textTransform: "uppercase",
        },
        h4: {
          fontSize: "28px",
          lineHeight: "38px",
          letterSpacing: "2px",
          fontWeight: "bold",
          textTransform: "uppercase",
        },
        h5: {
          fontSize: "24px",
          lineHeight: "33px",
          letterSpacing: "1.7px",
          fontWeight: "bold",
          textTransform: "uppercase",
        },
        h6: {
          fontSize: "18px",
          lineHeight: "24px",
          letterSpacing: "1.3px",
          fontWeight: "bold",
          textTransform: "uppercase",
        },
      });
    }),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".btn": {
          padding: ".5rem 1rem",
          borderRadius: "0",
          fontSize: "13px",
          fontWeight: "bold",
          borderWidth: "1px",
          borderColor: "transparent",
        },
        ".btn-orange": {
          "backgroundColor": theme("colors.dark-orange"),
          "color": theme("colors.white"),
          "&:hover": {
            backgroundColor: theme("colors.light-orange"),
          },
        },
        ".btn-black": {
          "backgroundColor": theme("colors.black"),
          "color": theme("colors.white"),
          "&:hover": {
            backgroundColor: theme("colors.medium-grey"),
          },
        },
        ".btn-clear": {
          "backgroundColor": "transparent",
          "borderColor": theme("colors.black"),
          "color": theme("colors.black"),
          "&:hover": {
            color: theme("colors.white"),
            backgroundColor: theme("colors.black"),
          },
        },
      });
    }),
  ],
};
