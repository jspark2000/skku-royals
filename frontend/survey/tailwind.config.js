/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['NanumSquareNeo'],
        sans: ['NanumSquareNeo']
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
