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
        "darkest-grey": "#101010",
        "dark-grey": "#4c4c4c",
        "medium-grey": "#979797", // nav border
        "light-grey": "#f1f1f1",
        "off-white": "#fafafa",
        "white": "#ffffff",
        "black": "#000000",
        "red": "#CD2C2C",
      },
      content: {
        "home-mobile": "url('/assets/home/mobile/image-header.jpg')",
        "home-tablet": "url('/assets/home/tablet/image-header.jpg')",
        "home-desktop": "url('/assets/home/desktop/image-hero.jpg')",
        "icon-arrow-right": "url('/src/assets/icons/icon-arrow-right.svg')",
      },
      fontSize: {
        base: "0.9375rem",
      },
      maxWidth: {
        content: "1110px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addBase, theme }) {
      addBase({
        "@font-face": {
          fontFamily: "Manrope",
          src: 'url("./fonts/Manrope-VariableFont_wght.ttf")',
        },
        "body": {
          fontSize: theme("fontSize.base"),
          fontWeight: "500",
          lineHeight: "25px",
          letterSpacing: "0px",
        },
        "input": {
          cursor: "pointer",
        },
        "input[type='text'], input[type='email'], input[type='tel']": {
          "borderWidth": "1px",
          "borderStyle": "solid",
          "borderColor": "#CFCFCF",
          "borderRadius": "0.5rem",
          "caretColor": theme("colors.dark-orange"),
          "fontSize": "14px",
          "fontWeight": "700",
          "letterSpacing": "-0.25px",
          "lineHeight": "19px",
          "paddingBlock": "1.125rem",
          "paddingInline": "1.5rem",
          "&:focus::placeholder": {
            visibility: "hidden",
          },
        },
        "input[type='radio']:checked": {
          color: theme("colors.dark-orange"),
        },
        "label": {
          fontSize: "12px",
          fontWeight: "700",
          lineHeight: "16px",
          letterSpacing: "-0.21px",
        },
        "p": { opacity: "0.5", whiteSpace: "pre-line" },
      });
    }),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".btn": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem 2rem",
          fontSize: "13px",
          lineHeight: "16px",
          letterSpacing: "1px",
          fontWeight: "700",
          textTransform: "uppercase",
          border: "none",
        },
        ".btn-1": {
          "backgroundColor": theme("colors.dark-orange"),
          "color": theme("colors.white"),
          "&:hover": {
            backgroundColor: theme("colors.light-orange"),
          },
          "&:disabled": {
            backgroundColor: theme("colors.dark-orange"),
          },
        },
        ".btn-2": {
          "backgroundColor": theme("colors.black"),
          "color": theme("colors.white"),
          "&:hover": {
            backgroundColor: theme("colors.dark-grey"),
          },
          "&:disabled": {
            backgroundColor: theme("colors.black"),
          },
        },
        ".btn-3": {
          "backgroundColor": "transparent",
          "outline": `1px solid ${theme("colors.black")}`,
          "color": theme("colors.black"),
          "&:hover": {
            color: theme("colors.white"),
            backgroundColor: theme("colors.black"),
          },
          "&:disabled": {
            backgroundColor: "transparent",
            color: theme("colors.black"),
          },
        },
        ".btn-4": {
          "backgroundColor": "transparent",
          "color": theme("colors.medium-grey"),
          "padding": "0",
          "&:hover": {
            color: theme("colors.dark-orange"),
          },
          "&:disabled": {
            color: theme("colors.medium-grey"),
          },
          "&:after": {
            content: theme("content.icon-arrow-right"),
            marginLeft: ".75rem",
            verticalAlign: "middle",
          },
        },
        ".btn-back": {
          "opacity": "0.5",
          "&:hover": {
            opacity: "1",
            color: theme("colors.dark-orange"),
          },
        },
        ".btn-quantity": {
          display: "flex",
          width: "2.5rem",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem 1rem",
          fontSize: "13px",
          lineHeight: "16px",
          letterSpacing: "1px",
          fontWeight: "700",
          textTransform: "uppercase",
          border: "none",
        },
        ".btn-select": {
          "alignItems": "center",
          "borderWidth": "1px",
          "borderStyle": "solid",
          "borderColor": "#CFCFCF",
          "borderRadius": "0.5rem",
          "cursor": "pointer",
          "paddingBlock": "1.125rem",
          "paddingInline": "1.5rem",
          "&:hover": {
            borderColor: theme("colors.dark-orange"),
          },
        },
        ".heading-1": {
          fontSize: "56px",
          lineHeight: "58px",
          letterSpacing: "2px",
          fontWeight: "700",
          textTransform: "uppercase",
        },
        ".heading-2": {
          fontSize: "40px",
          lineHeight: "44px",
          letterSpacing: "1.5px",
          fontWeight: "700",
          textTransform: "uppercase",
        },
        ".heading-3": {
          fontSize: "36px",
          lineHeight: "40px",
          letterSpacing: "1.29px",
          fontWeight: "700",
          textTransform: "uppercase",
        },
        ".heading-4": {
          fontSize: "32px",
          lineHeight: "36px",
          letterSpacing: "1.15px",
          fontWeight: "700",
          textTransform: "uppercase",
        },
        ".heading-5": {
          fontSize: "28px",
          lineHeight: "38px",
          letterSpacing: "2px",
          fontWeight: "700",
          textTransform: "uppercase",
        },
        ".heading-6": {
          fontSize: "24px",
          lineHeight: "33px",
          letterSpacing: "1.7px",
          fontWeight: "700",
          textTransform: "uppercase",
        },
        ".heading-7": {
          fontSize: "18px",
          lineHeight: "24px",
          letterSpacing: "1.3px",
          fontWeight: "700",
          textTransform: "uppercase",
        },
        ".heading-8": {
          fontSize: "15px",
          lineHeight: "20px",
          letterSpacing: "1.07px",
          fontWeight: "700",
          textTransform: "uppercase",
        },
        ".label, .legend": {
          fontSize: "12px",
          fontWeight: "700",
          lineHeight: "16px",
          letterSpacing: "-0.21px",
        },
        ".label-select": {
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "700",
          lineHeight: "19px",
          letterSpacing: "-0.25px",
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
