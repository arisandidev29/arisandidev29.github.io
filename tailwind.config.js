/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      "colors" : {
        "primary" : "#FFEDED",
        "primary-light" : "#FFCCD2",
        "primary-text" : "#362222",
        "secondary-text" : "#B3541E" 
      },
      "fontFamily" : {
        "primary" : "Single Day, cursive",
        "secondary" : "open sans, sans-serif"
      }

    },
  },
  plugins: [],
}

