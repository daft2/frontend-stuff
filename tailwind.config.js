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
        'draxBtnOrange': '#F25019',
        'neobrutalismDarkGreen': '#00AC83',
        'neobrutalismGreen': '#0FF2BC',
        'neobrutalismTheme': '#EEEDDE',
        'neobrutalismText': '#1F1F1F'
      },
      spacing: {
        '45percent': '45%'
      },
      boxShadow: {
        'neobrutalism': '3px 3px 1px black',
        'checkbox': '2px 2px 1px black'
      },
      lineHeight: {
        '1/10em':'0.1em'
      }
    },
  },
  plugins: [],
}
