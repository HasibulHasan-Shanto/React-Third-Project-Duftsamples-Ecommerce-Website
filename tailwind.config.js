/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mon: ['Montserrat'],
      },
      colors: {
        menuColor: '#000000',
        offblackColor: '#333333',
      },
      backgroundImage: {
        Banner: "url('/src/assets/Section.png')",
        secondBanner: "url('/src/assets/Section two.png')",
      }
    },
  },
  plugins: [],
}

