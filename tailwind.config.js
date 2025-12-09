const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './posts/**/*.{md,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Merriweather', ...fontFamily.serif],
        sans: ['Inter', ...fontFamily.sans],
      },
      colors: {
        primary: {
          light: '#efefef',
          DEFAULT: '#f5f5f5',
          dark: '#e5e5e5',
        },
        accent: {
          DEFAULT: '#6b4c3b',
          dark: '#533b2b',
        },
      },
    },
  },
  plugins: [],
};
