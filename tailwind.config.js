/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        splineSansMono: ['"Spline Sans Mono"', 'serif']
      },
      screens: {
        'xs': '320px',
      },      
    },
  },
  plugins: [],
};
