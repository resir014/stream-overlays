/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './templates/**/*.{html,js,ts,jsx,tsx}'],
  presets: [require('@resir014/tailwind-preset-chungking')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
      gridTemplateRows: {
        'bottom-bar': '40px 24px',
        'scene-wrapper': '1fr 32px 64px',
      },
      gridTemplateColumns: {
        'bottom-bar': 'auto 320px',
        'pre-stream': '110px auto 562px',
      },
      transitionTimingFunction: {
        'in-out-alerts': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      boxShadow: {
        'drop-layers': '0px 0px 150px 0px #000',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
