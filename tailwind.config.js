/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "home-mobile": "url('/src/assets/home/mobile/image-header.jpg')",
        "home-tablet": "url('/src/assets/home/tablet/image-header.jpg')",
        "home-desktop": "url('/src/assets/home/desktop/image-hero.jpg')",
      },
      content: {
        "home-mobile": "url('/src/assets/home/mobile/image-header.jpg')",
        "home-tablet": "url('/src/assets/home/tablet/image-header.jpg')",
        "home-desktop": "url('/src/assets/home/desktop/image-hero.jpg')",
      },

      colors: {
        "dark-orange": "#d87d4a",
        "light-orange": "#fbaf85",
        "darkest-grey": "#101010",
        "dark-grey": "#4c4c4c",
        "medium-grey": "#979797", // nav border
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
        "@font-face": {
          fontFamily: "Manrope",
          src: 'url("./fonts/Manrope-VariableFont_wght.ttf")',
        },
        "body p": {
          fontSize: theme("fontSize.base"),
          fontWeight: "500",
          lineHeight: "25px",
          opacity: "0.5",
        },
        "h1": {
          fontSize: "56px",
          lineHeight: "58px",
          letterSpacing: "2px",
          fontWeight: "700",
          textTransform: "uppercase",
        },
        "h2": {
          fontSize: "40px",
          lineHeight: "44px",
          letterSpacing: "1.5px",
          fontWeight: "700",
          textTransform: "uppercase",
        },
        "h3": {
          fontSize: "32px",
          lineHeight: "36px",
          letterSpacing: "1.15px",
          fontWeight: "700",
          textTransform: "uppercase",
        },
        "h4": {
          fontSize: "28px",
          lineHeight: "38px",
          letterSpacing: "2px",
          fontWeight: "700",
          textTransform: "uppercase",
        },
        "h5": {
          fontSize: "24px",
          lineHeight: "33px",
          letterSpacing: "1.7px",
          fontWeight: "700",
          textTransform: "uppercase",
        },
        "h6": {
          fontSize: "18px",
          lineHeight: "24px",
          letterSpacing: "1.3px",
          fontWeight: "700",
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
          fontWeight: "700",
          textTransform: "uppercase",
          borderWidth: "1px",
          borderColor: "transparent",
        },
        ".btn-1": {
          "backgroundColor": theme("colors.dark-orange"),
          "color": theme("colors.white"),
          "&:hover": {
            backgroundColor: theme("colors.light-orange"),
          },
        },
        ".btn-2": {
          "backgroundColor": theme("colors.black"),
          "color": theme("colors.white"),
          "&:hover": {
            backgroundColor: theme("colors.dark-grey"),
          },
        },
        ".btn-3": {
          "backgroundColor": "transparent",
          "borderColor": theme("colors.black"),
          "color": theme("colors.black"),
          "&:hover": {
            color: theme("colors.white"),
            backgroundColor: theme("colors.black"),
          },
        },
        ".btn-4": {
          "backgroundColor": "transparent",
          "color": theme("colors.medium-grey"),
          "&:hover": {
            color: theme("colors.dark-orange"),
          },
        },
        ".nav-item": {
          "fontSize": "13px",
          "lineHeight": "25px",
          "letterSpacing": "2px",
          "fontWeight": "700",
          "textTransform": "uppercase",
          "color": theme("colors.white"),
          "&:hover": {
            color: theme("colors.dark-orange"),
          },
        },
        ".text-overline": {
          fontSize: "14px",
          lineHeight: "19px",
          letterSpacing: "10px",
          fontWeight: "400",
          textTransform: "uppercase",
          color: theme("colors.dark-orange"),
        },
        ".text-subtitle": {
          fontSize: "13px",
          lineHeight: "25px",
          letterSpacing: "1px",
          fontWeight: "700",
          textTransform: "uppercase",
          color: theme("colors.dark-orange"),
        },
      });
    }),
  ],
};
