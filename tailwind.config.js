/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      screens: {
        'customScreen': '740px',
      },

      colors: {
        customGoldStart: "#FBD472",
        customGoldEnd: "#EAA535",
        customGrayLight: "#F3F3F3",
        customGrayDark: "#1C1C1C",
        customBlack: "#121212",

      },

      backgroundImage: {
        "gradient-custom-gold": "linear-gradient(to right, #FFC74D, #D98F20)",
      },

      fontFamily: {
        Aboreto: ['"Aboreto", serif'],
        Brush: ['"Alex Brush", serif'],
        Lato: ['"Lato", serif'],
      },

      fontSize: {
        h1: ["30px", { lineHeight: "1.5", letterSpacing: "0.03em" }],
        "h1-md": ["35px", { lineHeight: "1.5" }],
        h2: ["23px", { lineHeight: "1.5" }],
        "h2-md": ["48px", { lineHeight: "1.5" }],
        h3: ["32px", { lineHeight: "1.5" }],
        "h3-md": ["34px", { lineHeight: "1.5" }],
        "h3-lg": ["36px", { lineHeight: "1.5" }],
        h4: ["16px", { lineHeight: "1.5" }],
        "h4-md": ["17px", { lineHeight: "1.5" }],
        "h4-lg": ["18px", { lineHeight: "1.5" }],
        h5: ["20px", { lineHeight: "1.8" }],
        "h5-lg": ["20px", { lineHeight: "1.9" }],
        p: ["16px"],
        "p-md": ["16px", { lineHeight: "1.9" }],
        "p-lg": ["17px", { lineHeight: "1.9" }],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        h1: {
          "@apply font-Aboreto text-h1": {},
          "@screen md": {
            "@apply text-h1-md": {},
          },
        },
        h2: {
          "@apply font-Aboreto text-h2 text-customGrayDark": {},
          "@screen md": {
            "@apply text-h2-md": {},
          },
        },
        h3: {
          "@apply font-Aboreto text-h3 text-customGrayDark": {},
          "@screen md": {
            "@apply text-h3-md": {},
          },
          "@screen lg": {
            "@apply text-h3-lg": {},
          },
        },
        h4: {
          "@apply font-Aboreto text-h4": {},
          "@screen md": {
            "@apply text-h4-md": {},
          },
          "@screen lg": {
            "@apply text-h4-lg": {},
          },
        },
        h5: {
          "@apply font-Lato text-h5 font-[300] text-customGrayDark": {},
          "@screen lg": {
            "@apply text-h5-lg": {},
          },
        },
        p: {
          "@apply font-Lato text-p text-customGrayDark font-[300]": {},
          "@screen md": {
            "@apply text-p-md": {},
          },
          "@screen lg": {
            "@apply text-p-lg": {},
          },
        },
      });
    },
  ],
};
