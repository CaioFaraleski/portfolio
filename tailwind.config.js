/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.jsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        lightGray: "#F2F2F2",
        gray: "#6B6B6B",
        darkGray: "#0D0D0D",
        lightRed: "#D9042B",
        red: "#A60311",
      },
    },
  },
  plugins: [],
}
