/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
      extend: {
        fontFamily: {
          figtree: ['Figtree', 'sans-serif'], // 'figtree' is the class name you will use
        },
      },
  plugins: [],
  }
}