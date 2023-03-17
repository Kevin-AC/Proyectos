/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily:{
        'Poppins':'Poppins'
      },
      colors:{
        'Red':'hsl(0, 100%, 74%)',
        'redShadow':'rgba(192, 92, 92, 0.548)',
        'Green':'hsl(154, 59%, 51%)',
        'Blue':'hsl(248, 32%, 49%)',
        'BlueShadow':'rgba(97, 85, 172, 0.373)',
        'DarkBlue':'hsl(249, 10%, 26%)',
        'GrayishBlue':'hsl(246, 25%, 77%)',
      },
      backgroundImage:{
        'fondoM':"url('/images/bg-intro-mobile.png')"
      },
      width:{
        '375':'375px',
        '500':'500px'
      },
      boxShadow:{
        'ShadowBlue': '0px 6px 0px rgba(97, 85, 172, 0.373)',
        'RedShadow': '0px 6px 0px rgba(192, 92, 92, 0.548)',
        'GreenShadow':'0px 5px 0px 0px rgb(55, 190, 132)'
      }
    },
  },
  plugins: [],
}
