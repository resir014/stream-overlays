import { css } from '@emotion/react'
import { darken, hsl, parseToHsl } from 'polished'
import { theme } from '@resir014/chungking-react'

export default function telemetryStyles(value?: number, color = theme.colors.blue[500]) {
  const colorHsl = parseToHsl(color)

  if (value && value > 0) {
    return css`
      color: ${theme.colors.white};
      background-color: ${hsl(colorHsl.hue, colorHsl.saturation, colorHsl.lightness * 0.75)};
    `
  }

  return css`
    color: ${darken(0.25, theme.colors.white)};
    background-color: ${hsl(colorHsl.hue, colorHsl.saturation, colorHsl.lightness * 0.25)};
  `
}
