/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
      colors: {
        primary: "#f96436",
        second: "#eee1d1",
      },
      fontFamily: {
        gelion: ["Montserrat", "ui-sans-serif", "system-ui"],
        tinos: [
          "Cormorant Garamond",
          "serif",
          "ui-serif",
          "Georgia",
          "Cambria",
        ],
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
