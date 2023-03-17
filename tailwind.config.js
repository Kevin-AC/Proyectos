/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors:{
        'blue/dark':'#0A3871',
        'Lightgray':'#D8DFE8',
        'bg':'#E5E5E5',
        'Gray400':'#495057',
        'Gray500':'#343A40',
      },
      width:{
        '664':'664px',
        '332':'332px',
      },
      height:{
        'tablet':'500px',
      }
    },
  },
  plugins: [],
}
