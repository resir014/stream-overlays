/* eslint-disable global-require */

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  presets: [require('@resir014/tailwind-preset-chungking')],
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
