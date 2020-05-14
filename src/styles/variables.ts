import { AlertKinds } from 'interfaces/types'

export const alertColors: Record<AlertKinds, string> = {
  raid: '#ff369a',
  cheer: '#9b45ff',
  host: '#2234ce',
  donation: '#0076ff',
  follow: '#00bf80',
  sub: '#f5a623z'
}

export const colors = {
  red: '#e00',
  orange: '#f5a623',
  purple: '#9b45ff',
  blue: '#0076ff',
  cyan: '#79ffe1',
  ultramarine: '#2234ce',
  magenta: '#ff1493',
  green: '#00d28a',
  greenscreen: '#0f0',
  grey10: '#e8e8e8',
  grey20: '#d0d0d2',
  grey30: '#b9b9bb',
  grey40: '#a2a2a5',
  grey50: '#8b8b8e',
  grey60: '#737377',
  grey70: '#5c5c61',
  grey80: '#45454a',
  grey90: '#2d2d34',
  white: '#ffffff',
  black: '#16161d',
  ...alertColors
}

export const fonts = {
  serif: "'Crimson Text', Georgia, Times New Roman, Times, serif",
  sansSerif: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  monospace: `Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono',
    'Bitstream Vera Sans Mono', 'Courier New', monospace, monospace`
}

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}

export const widths = {
  md: 750,
  lg: 970,
  xl: 1140
}
