/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors:{
        'Gunmetal':'#2d3142',
        'PayneGray':'#4f5d75',
        'Silver':'#bfc0c0',
        'White':'#ffffff',
        'cfondo':'#FF9D00',
        'Coral':'#ef8354',
        'Lime':'#cafe48',
      },
      backgroundImage:{
        'fondo':"url(../img/rainbow-vortex.svg)",
      },
      fontFamily:{
        'roboto':'Roboto Condensed'
      }
      
    },
  },
  plugins: [],
}
