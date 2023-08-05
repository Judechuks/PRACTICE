/** @type {import('tailwindcss').Config} */

/* const plugin = require('tailwindcss/plugin');
const rotateY = plugin(function ({ addUtilities }) {
  addUtilities ({
    '.rotate-y-180': {
     'transform': "rotateY(180deg)"
    },
    '.-rotate-y-180': {
     'transform': "rotateY(-180deg)"
    }
  })
}) */
// The above commented code didnt work because of the version of node that I was using, I had to add the custom css code in input.css for it to work.

module.exports = {
  content: ["./build/*.html", "./build/*.js"],
  theme: {
    extend: {
      colors: {
        'color-primary': '#01051e',
        'color-primary-light': '#020726',
        'color-primary-dark': '#010417',
        'color-secondary': '#ff7d3b',
        'color-gray': '#333',
        'color-blob': '#a427df',
      },
      screens: {
        'phone': '430px',
      },
      maxWidth: {
        '16': '16rem',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        md: '50px',
      }
    },
  },
  /* plugins: [rotateY], */ 
}
