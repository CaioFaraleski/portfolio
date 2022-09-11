/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './**/*.jsx'
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
        'setvet': "url('./assets/images/setvet.png')",
        'sudoku': "url('./assets/images/sudoku.png')",
        'bombinhas': "url('./assets/images/bombinhas.png')",
        'pokedex': "url('./assets/images/pokedex.png')",
        'ignitelab': "url('./assets/images/ignitelab.png')",
        'snakegame': "url('./assets/images/snakegame.png')",
        'home-desktop': "url('https://caiofaraleski.github.io/portfolio/assets/images/bg.png')",
        'home-mobile': "url('https://caiofaraleski.github.io/portfolio/assets/images/bg-mobile.png')",
      }),
    },
  },
  plugins: [],
}
