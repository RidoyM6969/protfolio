/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        savilina:["Sevillana","cursive"],
        robot:["Roboto","sans-serif"],
        mono:["Roboto Mono","monospace"],
        san:["Open Sans","sans-serif"],
      }
    },
  },
  plugins: [],
}