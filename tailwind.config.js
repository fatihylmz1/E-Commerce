/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      zIndex: {
        '1000': '1',
        '2000': '2',

      },
      spacing: {
        '160': '40rem',
      },
      colors: {
        "header-blue": "#252B42",
        "site-name": "#252B42",
        "link-color": "#737373",
        "login": "#23A6F0",
        "light-blue": "#6cefed",
        "light-green": "#2bebc5",
        'regal-blue': '#2a7cc7',
      }
    },
  },
  plugins: [],
}

