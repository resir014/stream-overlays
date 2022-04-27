/* eslint-disable global-require */

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
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
        'pre-stream': '320px 84px auto 416px',
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
