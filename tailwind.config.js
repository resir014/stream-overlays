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
        'scene-wrapper': '1fr 56px auto',
      },
      gridTemplateColumns: {
        'bottom-bar': 'auto 320px',
      },
      transitionTimingFunction: {
        'in-out-alerts': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
