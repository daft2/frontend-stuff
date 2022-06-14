/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'draxThemeOrange': '#FEDCC5',
        'draxBtnOrange': '#F25019'
      },
      spacing: {
        '45percent': '45%'
      }
    },
  },
  plugins: [],
}
