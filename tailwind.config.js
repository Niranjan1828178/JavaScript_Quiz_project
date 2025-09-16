/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html","./src/js/*.js"],
  theme: {
    extend: {
      screens:{
        'xs':'550px',
        '5xl':'2300px',
      },
    },
  },
  plugins: [],
}

