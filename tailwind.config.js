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
      backgroundImage: theme => ({
        'setvet': "url('./src/assets/images/setvet.PNG')",
        'sudoku': "url('./src/assets/images/sudoku.PNG')",
        'bombinhas': "url('./src/assets/images/bombinhas.PNG')",
        'pokedex': "url('./src/assets/images/pokedex.PNG')",
        'ignitelab': "url('./src/assets/images/ignitelab.PNG')",
        'snakegame': "url('./src/assets/images/snakegame.PNG')",
        'home-desktop': "url('./src/assets/images/test5.png')",
        'home-mobile': "url('./src/assets/images/bg-mobile.PNG')",
      }),
    },
  },
  plugins: [],
}
