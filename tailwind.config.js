/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '20px',
    },
    extend: {
      colors: {
        primary: '#0ea5e9',
        primary2: '#0EE9BF',
        primary3: '#0E38E9',
        secondary: '#6b7280',
        dark: '#0f172a'
      },
      screens: {
        'xl': '1220px',
      }
    },

  },
  plugins: [],
}

