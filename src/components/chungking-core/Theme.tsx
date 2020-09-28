import * as React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { colors, space, fonts, shadows, breakpoints, mediaQueries, typeScale, paragraphScale } from './utils/variables'

export const themeProps = {
  colors,
  space,
  fonts,
  shadows,
  typeScale,
  paragraphScale,
  breakpoints,
  mediaQueries
}

export const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={themeProps}>{children}</ThemeProvider>
}

export type Color = keyof typeof themeProps['colors']
export type Space = keyof typeof themeProps['space']
export type TypeScale = keyof typeof themeProps['typeScale']
export type ParagraphScale = keyof typeof themeProps['paragraphScale']
