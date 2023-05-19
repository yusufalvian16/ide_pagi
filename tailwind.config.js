/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
      },
      colors: {
        primary: "#f96436",
        second: "#eee1d1",
      },
      fontFamily: {
        gelion: ["Gelion", "ui-sans-serif", "system-ui"],
        tinos: ["Tinos", "serif", "ui-serif", "Georgia", "Cambria"],
      },
    },
  },
  plugins: [],
};
