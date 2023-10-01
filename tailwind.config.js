/* eslint-disable global-require */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [require('@resir014/tailwind-preset-chungking')],
  theme: {
    extend: {
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
