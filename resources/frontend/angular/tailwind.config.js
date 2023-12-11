/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'display': ['Oswald'],
      'body': ['Raleway']
    },
    extend: {
      colors: {
        'vb-green': '#3C4C41',
        'vb-dark': '#262626',
      },
      spacing: {
        'logo': '360px',
        'logo-plus': '380px',
        '70': '70vh',
        '65': '90%',
        '1/20': '5%',
        '9/20': '45%',
        '1/12': '8.33%',
        '11/12': '91.67%',
        '110': '110vw',
        '800': '800px',
        '1000': '1000px'
      },
    },
  },
  plugins: [],
}

