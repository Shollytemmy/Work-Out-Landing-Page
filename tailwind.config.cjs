/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      main: "#1E1E1E",
      primary: "#FAFAF9",
      subPrimary: "rgba(239, 237, 232, 0.65)"
    }, 
    

    extend: {},
  },
  plugins: [],
}
