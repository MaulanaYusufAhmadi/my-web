/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#00A3AD',
        secondary: '#70FACB',
        green: '#0C4F69',
        dark: '#020617',
        gray: '#111827'
      },
      screens: {
        '2xl': '1230px',
      }
    },
  },
  plugins: [],
}

