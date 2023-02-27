/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Jamjuree:['Bai Jamjuree']
      },
      // backgroundImage: {
      //   'mobile': "url('/src/images/bg-header-mobile.png')",
      //   'desktop': "url('/src/images/bg-header-desktop.png')",
      // },
      colors:{
        strongcyan:'hsl(171, 66%, 44%)',
        GrayishBlue: 'hsl(201, 11%, 66%)',
        LightBlue: 'hsl(233, 100%, 69%)',
        DarkGrayishBlue: 'hsl(210, 10%, 33%)',
      }
    },
  },
  plugins: [
    // require('tailwindcss/plugins/backgroundImage')
  ],
}
