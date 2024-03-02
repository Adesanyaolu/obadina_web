/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {},

    textColor: {
      'primaryGreen': '#16A34A',
      'lightGreen': '#EFFFF5',
      'white': '#FCFCFC',
    },

    fontSize: {
      ag1: ['3.5rem', '5.125rem'],
      ag2: ['2.5rem', 'auto'],
      ag3: ['2rem','2.625rem'],
      ag4: ['1.375rem', '1.75rem'],
      ag5: ['1.125rem', '1.5rem'],
      agsm: ['0.875rem', '1.5rem'],
      agmd: ['1rem', '1.5rem'],
    },

    backgroundColor: theme => ({
      ...theme('colors'),
      'primaryGreen': '#16A34A',
      'lightGreenBg': '#EFFFF5',
      'whiteBg': '#FCFCFC',
      'danger': '#e3342f',
     }),
  },
  plugins: ['flowbite/plugin'],

}