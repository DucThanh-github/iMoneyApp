/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#363853",
        primary: "#0012FF",
        green: "#67D4CA",
        red: "#F28080",
      },
      fontFamily: {
        "font-main": ["'Montserrat'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
