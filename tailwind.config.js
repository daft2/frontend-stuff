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
      },
      boxShadow: {
        'neobrutalism': '3px 3px 1px black',
        'checkbox': '2px 2px 1px black',
        'around': '0 0 10px rgb(0 0 0 / 0.1)'
      },
      lineHeight: {
        '1/10em':'0.1em'
      }
    },
  },
  plugins: [],
}
