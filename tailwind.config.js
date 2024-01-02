/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkContent: '#666666',
        solidHeading: '#42446E',
        lightContent: '#A7A7A7',
      },
      screens: {
        phone: "430px",
        ipad: "850px"
      }
    },
  },
  plugins: [],
}

