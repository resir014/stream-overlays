import tailwindPresetChungking from '@resir014/tailwind-preset-chungking';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  presets: [tailwindPresetChungking],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono Variable', ...defaultTheme.fontFamily.mono],
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
