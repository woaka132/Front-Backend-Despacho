/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Monserrat']
      },
      animation:{
        blob:"blob 7s forwards",
        blob2:"blob 7s infinite"
      },
      keyframes: {
        blob: {
          "0%":{
            transform:" translate(0px, 0px) scale(1)",
          },
          "33%":{
            transform:"translate(30px, -50px) scale(1.1)",
          }
          ,
          "66%":{
            transform:"translate(-20px, 20px) scale(0.9)",
          },
          "100%":{
            transform:"translate(0px, 0px) translate(0px, 0px) scale(1)",
          }
        }
    },
    height: {
      'mob': '40rem',
      'desk': '50rem',
      '80vh': '80vh',
      '85vh': '85vh',
      '50vh': '50vh',
      '65vh': '65vh',
      '100vh': '100vh',
      '100':	'26rem' /* 384px */
    }
  },
  plugins: [],
}
}

