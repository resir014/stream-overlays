import { AlertKinds } from '~/interfaces/types';

export const alertColors: Record<AlertKinds, string> = {
  raid: '#ff369a',
  cheer: '#9b45ff',
  host: '#2234ce',
  donation: '#0076ff',
  follow: '#00bf80',
  sub: '#f5a623',
};

export const extendedColors = {
  cyan: '#79ffe1',
  greenscreen: '#0f0',
  ...alertColors,
};

export const fonts = {
  serif: "'Crimson Text', Georgia, Times New Roman, Times, serif",
  sansSerif: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  monospace: `'Roboto Mono', Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono',
    'Bitstream Vera Sans Mono', 'Courier New', monospace, monospace`,
};

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const widths = {
  md: 750,
  lg: 970,
  xl: 1140,
};
