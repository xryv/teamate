// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient': 'linear-gradient(to right, #0a3155, #172e60, #2e2966, #471d67, #5f0061)',
        'gradient2': 'linear-gradient(to right, #451d66, #4c1965, #521364, #590b63, #5f0061);',
        'conic-gradient': 'conic-gradient(#0a3155, #172e60, #2e2966, #471d67, #5f0061)',
      },
      colors: {
        'noirTransparent': {
          100: 'rgba(24, 24, 27, 0.1)',
          200: 'rgba(24, 24, 27, 0.2)',
          300: 'rgba(24, 24, 27, 0.3)',
          400: 'rgba(24, 24, 27, 0.4)',
          500: 'rgba(24, 24, 27, 0.5)',
          600: 'rgba(24, 24, 27, 0.6)',
          700: 'rgba(24, 24, 27, 0.7)',
          800: 'rgba(24, 24, 27, 0.8)',
          900: 'rgba(24, 24, 27, 0.9)',
        },

        'purplePV': {
          100: 'rgba(93, 3, 98, 0.1)',
          200: 'rgba(93, 3, 98, 0.2)',
          300: 'rgba(93, 3, 98, 0.3)',
          400: 'rgba(93, 3, 98, 0.4)',
          500: 'rgba(93, 3, 98, 0.5)', // Original color
          600: 'rgba(93, 3, 98, 0.6)',
          700: 'rgba(93, 3, 98, 0.7)',
          800: 'rgba(93, 3, 98, 0.8)',
          900: 'rgba(93, 3, 98, 0.9)',
          1000: 'rgba(93, 3, 98, 1)'
        },
        'bluePV': {
          100: 'rgba(11, 49, 86, 0.1)',
          200: 'rgba(11, 49, 86, 0.2)',
          300: 'rgba(11, 49, 86, 0.3)',
          400: 'rgba(11, 49, 86, 0.4)',
          500: 'rgba(11, 49, 86, 0.5)', // Original color
          600: 'rgba(11, 49, 86, 0.6)',
          700: 'rgba(11, 49, 86, 0.7)',
          800: 'rgba(11, 49, 86, 0.8)',
          900: 'rgba(11, 49, 86, 0.9)',
          1000: 'rgba(11, 49, 86, 1)'
        },
        'orangePV': {
          100: 'rgba(243, 129, 99, 0.1)',
          200: 'rgba(243, 129, 99, 0.2)',
          300: 'rgba(243, 129, 99, 0.3)',
          400: 'rgba(243, 129, 99, 0.4)',
          500: 'rgba(243, 129, 99, 0.5)', // Original color
          600: 'rgba(243, 129, 99, 0.6)',
          700: 'rgba(243, 129, 99, 0.7)',
          800: 'rgba(243, 129, 99, 0.8)',
          900: 'rgba(243, 129, 99, 0.9)',
          1000: 'rgba(243, 129, 99, 1)'
        },
        'transparant': {
          100: 'rgba(177, 188, 195, 0.1)',
          200: 'rgba(177, 188, 195, 0.2)',
          300: 'rgba(177, 188, 195, 0.3)',
          400: 'rgba(177, 188, 195, 0.4)',
          500: 'rgba(177, 188, 195, 0.5)',
          600: 'rgba(177, 188, 195, 0.6)',
          700: 'rgba(177, 188, 195, 0.7)',
          800: 'rgba(177, 188, 195, 0.8)',
          900: 'rgba(177, 188, 195, 0.9)',
          1000: 'rgba(177, 188, 195, 1)'
        }
      },
    },
  },
  plugins: [
    require ( 'tailwind-scrollbar' ) ( {  nocompatible : true  } ) , 
    function({ addUtilities }) {
      const newUtilities = {
        '.inset-shadow': {
          boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
