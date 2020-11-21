export const systemFonts =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"

export const fonts = {
  sansSerif: `"Inter", ${systemFonts}`,
  serif: 'Georgia, "Times New Roman", Times, serif',
  monospace:
    '"JetBrains Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'
}

export const shadows = {
  single: '0 4px 8px 0 rgba(0, 0, 0, 0.25)',
  double: '0 8px 16px 0 rgba(0, 0, 0, 0.25)'
}

export const colors = {
  white: '#ffffff',
  black: '#16161d',
  grey: {
    '50': '#e7e7e8',
    '100': '#cfcfd1',
    '200': '#b8b8ba',
    '300': '#a1a1a5',
    '400': '#8b8b8f',
    '500': '#76757a',
    '600': '#616166',
    '700': '#4d4d53',
    '800': '#393940',
    '900': '#27272e'
  },
  red: {
    '50': '#fde7e7',
    '100': '#fab7b7',
    '200': '#f78787',
    '300': '#f45858',
    '400': '#f12828',
    '500': '#ee0000',
    '600': '#b60000',
    '700': '#860000',
    '800': '#550000',
    '900': '#250000'
  },
  orange: {
    '50': '#fef5e7',
    '100': '#fce2b6',
    '200': '#f9cf85',
    '300': '#f7bb54',
    '400': '#f5a623',
    '500': '#cb891d',
    '600': '#a16c17',
    '700': '#764f10',
    '800': '#4c320a',
    '900': '#211604'
  },
  green: {
    '50': '#ebfaf6',
    '100': '#c2f0e4',
    '200': '#99e5d1',
    '300': '#70dbbd',
    '400': '#48d1a8',
    '500': '#1fc791',
    '600': '#00bf80',
    '700': '#008456',
    '800': '#005437',
    '900': '#002517'
  },
  turquoise: {
    '50': '#e6fffc',
    '100': '#b3fff5',
    '200': '#80ffec',
    '300': '#4dffe2',
    '400': '#1affd6',
    '500': '#00ffcd',
    '600': '#00b690',
    '700': '#008668',
    '800': '#005641',
    '900': '#00251c'
  },
  blue: {
    '50': '#e7f3fe',
    '100': '#b6dcfc',
    '200': '#85c2f9',
    '300': '#55a5f7',
    '400': '#2488f5',
    '500': '#0070f3',
    '600': '#0050b6',
    '700': '#003986',
    '800': '#002255',
    '900': '#000e25'
  },
  ultramarine: {
    '50': '#eaeefa',
    '100': '#c0c9f1',
    '200': '#97a4e8',
    '300': '#6d7edf',
    '400': '#4355d5',
    '500': '#2234ce',
    '600': '#1a249c',
    '700': '#131973',
    '800': '#0c0f49',
    '900': '#050620'
  },
  purple: {
    '50': '#f4ebfa',
    '100': '#dec2f0',
    '200': '#c599e6',
    '300': '#ab70dc',
    '400': '#8f47d2',
    '500': '#7928ca',
    '600': '#581e98',
    '700': '#3f1670',
    '800': '#260e47',
    '900': '#10061f'
  },
  magenta: {
    '50': '#ffe6f6',
    '100': '#ffb3e3',
    '200': '#ff80cc',
    '300': '#ff4db2',
    '400': '#ff1493',
    '500': '#d71176',
    '600': '#aa0d58',
    '700': '#7d093d',
    '800': '#500625',
    '900': '#23020f'
  }
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
