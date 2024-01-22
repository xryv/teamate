import tailwindScrollbar from 'tailwind-scrollbar';
/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      custom: ['Roboto', 'sans-serif'],
    },
    backgroundImage: {
      'gradient': 'linear-gradient(to right, #0a3155, #172e60, #2e2966, #471d67, #5f0061)',
    },
    colors: {
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
};

export const plugins = [
  tailwindScrollbar,
  function ({ addUtilities }) {
    const newUtilities = {
      '.scrollBar::-webkit-scrollbar-thumb': {
        'border-radius': '20px',
      }
    };
    addUtilities(newUtilities, ['responsive', 'hover']);
  },
];