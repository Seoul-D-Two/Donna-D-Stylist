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
        h1: ["44px"],
        "h1-md": ["54px"],
        "h1-lg": ["64px"],
        h2: ["23px"],
        "h2-md": ["48px"],
        h3: ["32px"],
        "h3-md": ["34px"],
        "h3-lg": ["36px"],
        h4: ["16px"],
        "h4-md": ["17px"],
        h5: ["20px"],
        p: ["16px"],
        "p-lg": ["17px"],
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
          }
        },
        h5: {
          "@apply font-Lato text-h5 font-[300] text-customGrayDark font-[350]": {},
        },
        p: {
          "@apply font-Lato text-p text-customGrayDark font-[300]": {},
          "@screen lg": {
            "@apply text-p-lg": {},
          },
        },
      });
    },
  ],
};
