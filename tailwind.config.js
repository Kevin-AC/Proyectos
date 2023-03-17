/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors:{
        'blue':'#0B3142',
      },
      backgroundImage:{
        'fondo':'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'
      }
    },
  },
  plugins: [],
}
