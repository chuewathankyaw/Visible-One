/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        iconcolor: "#2DC4EA",
        bg_colors:
          " transparent linear-gradient(270deg, #3AE7AB 0%, #2DC4EA 100%) 0% 0%",
      },
      fontFamily: {
        opensans: ['opensans']
      },
    },
    screens: {
      xs: "320px",
      ss: "620px",
      sm: "890px",
      md: "1060px",
      lg: "1200px",
      xl: "1420px",
    },
  },
  plugins: [],
};

