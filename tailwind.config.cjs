const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs": "460px",
        "lg": "1149px"
      },
      fontFamily: {
        sans: ["'Comfortaa', cursive", ...defaultTheme.fontFamily.sans],
        monoton: ["'Monoton', cursive"],
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
