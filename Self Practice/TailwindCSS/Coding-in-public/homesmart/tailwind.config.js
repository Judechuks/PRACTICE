/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html', './build/js/*.js'],
  theme: {
    extend: {
      screens: {
        'phone': '430px',
      },
      maxWidth: {
        '16': '16rem',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}
