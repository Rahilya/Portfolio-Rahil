/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        'quicksand': ['Quicksand', 'sans-serif'],
        'playfair':['Playfair Display', 'Georgia', 'serif']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'yellown': '#f9bf3f;',
      },
    },
  },
  plugins: [],
}
