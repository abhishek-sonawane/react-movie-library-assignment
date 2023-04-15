/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        appBg_dark: {
          50:'#272727',
          100: '#111111',
          200: '#0D0D0D',
          400: '#131313'
      }
      }
    },
  },
  plugins: [],
}

