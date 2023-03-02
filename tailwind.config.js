/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '1px',
        // => @media (min-width: 640px) { ... }

      }
    },
  },
  fontFamily: {
    os: [ 'Open Sans', 'sans-serif'],
    poppins: ['Poppins', 'sans-serif'],
  },
  plugins: [
    require('flowbite/plugin')
]
}