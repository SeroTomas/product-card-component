/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      'desk': '1440px'
    },

    fontFamily: {
      "fraunces": ['Fraunces', 'serif'],
      "montserrat": ['Montserrat', 'sans-serif']
    },
    
    extend: {
      colors: {
        "p-darkCyan": "hsl(158, 36%, 37%)",
        "p-cream": "hsl(30, 38%, 92%)",
        "n-darkBlue": "hsl(212, 21%, 14%)",
        "n-grayishBlue": "hsl(228, 12%, 48%)"
      },
    },
  },
  plugins: [],
}