/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '10rem',
        xl: '10rem',
        '2xl': '10rem',
      },
    },
    extend: {
      textColor:{
        "primary":"#fda335",
        "secondary":"#19232b"
      },
      backgroundColor:{
        "primary":"#fda335",
        "secondary":"#0e6e63"
      },
      fontFamily:{
        "primary":["Yantramanav", "serif"],
        "secondary":["Poppins", "serif"]
      }
    },
  },
  plugins: [],
}