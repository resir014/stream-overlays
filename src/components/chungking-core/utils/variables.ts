export const systemFonts =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"

export const fonts = {
  sansSerif: `"Inter", ${systemFonts}`,
  serif: 'Georgia, "Times New Roman", Times, serif',
  monospace:
    '"JetBrains Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'
}

export const shadows = {
  single: '0 4px 8px rgba(0, 0, 0, 0.25)',
  double: '0 8px 16px rgba(0, 0, 0, 0.25)'
}

export const colors = {
  red20: '#ff3333',
  red30: '#ee0000',
  red40: '#e60000',
  orange20: '#f7b955',
  orange30: '#f5a623',
  orange40: '#f49b0b',
  purple20: '#af6aff',
  purple30: '#9b45ff',
  purple40: '#7c37cc',
  blue20: '#3291ff',
  blue30: '#0070f3',
  blue40: '#0366d6',
  ultramarine20: '#3848d3',
  ultramarine30: '#2234ce',
  ultramarine40: '#1f2fb9',
  magenta20: '#ff369a',
  magenta30: '#ff1493',
  magenta40: '#e60984',
  green20: '#39ffd3',
  green30: '#08ffc8',
  green40: '#0bd0a6',
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
  black: '#16161d'
}

/** Space values (in px) mapped by size designators */
export const space = {
  /** Equivalent to 2px */
  xxxs: 2,
  /** Equivalent to 4px */
  xxs: 4,
  /** Equivalent to 8px */
  xs: 8,
  /** Equivalent to 12px */
  sm: 12,
  /** Equivalent to 16px */
  md: 16,
  /** Equivalent to 24px */
  lg: 24,
  /** Equivalent to 32px */
  xl: 32,
  /** Equivalent to 48px */
  xxl: 48
}

export const breakpoints = [0, '576px', '768px', '992px', '1200px']

export const mediaQueries = {
  xs: `@media screen and (min-width: ${breakpoints[0]})`,
  sm: `@media screen and (min-width: ${breakpoints[1]})`,
  md: `@media screen and (min-width: ${breakpoints[2]})`,
  lg: `@media screen and (min-width: ${breakpoints[3]})`,
  xl: `@media screen and (min-width: ${breakpoints[4]})`
}

export const widths = {
  md: 750,
  lg: 970,
  xl: 1140
}

/**
 * Typography scaling following BBC's GEL:
 * https://www.bbc.co.uk/gel/guidelines/typography
 */
export const typeScale = {
  900: {
    fontSize: '32px',
    lineHeight: '36px',
    [mediaQueries.lg]: {
      fontSize: '44px',
      lineHeight: '48px'
    }
  },
  800: {
    fontSize: '24px',
    lineHeight: '28px',
    [mediaQueries.lg]: {
      fontSize: '32px',
      lineHeight: '36px'
    }
  },
  700: {
    fontSize: '22px',
    lineHeight: '26px',
    [mediaQueries.lg]: {
      fontSize: '28px',
      lineHeight: '32px'
    }
  },
  600: {
    fontSize: '20px',
    lineHeight: '24px',
    [mediaQueries.lg]: {
      fontSize: '24px',
      lineHeight: '28px'
    }
  },
  500: {
    fontSize: '18px',
    lineHeight: '22px',
    [mediaQueries.lg]: {
      fontSize: '20px',
      lineHeight: '24px'
    }
  },
  body: {
    fontSize: '16px',
    lineHeight: '24px',
    [mediaQueries.lg]: {
      fontSize: '16px',
      lineHeight: '24px'
    }
  },
  400: {
    fontSize: '16px',
    lineHeight: '20px',
    [mediaQueries.lg]: {
      fontSize: '16px',
      lineHeight: '20px'
    }
  },
  300: {
    fontSize: '15px',
    lineHeight: '18px',
    [mediaQueries.lg]: {
      fontSize: '14px',
      lineHeight: '18px'
    }
  },
  200: {
    fontSize: '14px',
    lineHeight: '18px',
    [mediaQueries.lg]: {
      fontSize: '13px',
      lineHeight: '16px'
    }
  },
  100: {
    fontSize: '12px',
    lineHeight: '16px',
    [mediaQueries.lg]: {
      fontSize: '12px',
      lineHeight: '16px'
    }
  }
}

export const paragraphScale = {
  500: {
    fontSize: '18px',
    lineHeight: '24px',
    [mediaQueries.lg]: {
      fontSize: '20px',
      lineHeight: '24px'
    }
  },
  400: {
    fontSize: '16px',
    lineHeight: '24px',
    [mediaQueries.lg]: {
      fontSize: '16px',
      lineHeight: '24px'
    }
  },
  300: {
    fontSize: '15px',
    lineHeight: '24px',
    [mediaQueries.lg]: {
      fontSize: '14px',
      lineHeight: '24px'
    }
  }
}
