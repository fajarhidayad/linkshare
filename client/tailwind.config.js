/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Instrument Sans', 'serif'],
    },
    extend: {
      colors: {
        'm-purple': '#633CFF',
        'm-purple-hover': '#BEADFF',
        'm-purple-light': '#EFEBFF',
        'm-grey-d': '#333333',
        'm-grey': '#737373',
        borders: '#D9D9D9',
        'm-grey-light': '#FAFAFA',
        'm-red': '#FF3939',
      },
    },
  },
  plugins: [],
};
