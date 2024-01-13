/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray/600': ['#4B5563'],
        'orange/500': ['#FF5A1F'],
        'gray/800': ['#1F2A37'],
        'gray/900': ['#111928'],
      },
      fontFamily: {
        'Inter': ['"Inter"']
      }
    },
  },
  plugins: [],
}