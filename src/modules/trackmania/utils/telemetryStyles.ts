import { css } from '@emotion/core'
import { darken, hsl, parseToHsl } from 'polished'
import { colors } from '@resir014/chungking-react'

export default function telemetryStyles(value?: number, color = colors.blue[500]) {
  const colorHsl = parseToHsl(color)

  if (value && value > 0) {
    return css`
      color: ${colors.white};
      background-color: ${hsl(colorHsl.hue, colorHsl.saturation, colorHsl.lightness * 0.75)};
    `
  }

  return css`
    color: ${darken(0.25, colors.white)};
    background-color: ${hsl(colorHsl.hue, colorHsl.saturation, colorHsl.lightness * 0.25)};
  `
}
