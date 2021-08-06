/* eslint-disable global-require */

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  presets: [require('@resir014/tailwind-preset-chungking')],
  theme: {
    extend: {
      gridTemplateRows: {
        'bottom-bar': '40px 24px',
      },
      gridTemplateColumns: {
        'bottom-bar': 'auto 320px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
