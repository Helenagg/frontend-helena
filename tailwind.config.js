/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3E7FA2',
        secondary: '#F55B46',
        'primary-dark': '#315F78',
        'primary-light': '#62BCEC',
        'secondary-light': '#F09285',
        'secondary-dark': '#9F2A1A',
      },
      fontFamily: {
        'moirai': ['Moirai One', 'system-ui']
      }
    },
  },
  plugins: [],
}

