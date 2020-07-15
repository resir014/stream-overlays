import * as React from 'react'
import { parseToHsl, hsl, darken } from 'polished'
import styled from '@emotion/styled'
import { colors } from 'styles/variables'
import { InnerText } from './TextStyles'

interface ThrottleIndicatorProps {
  pressed?: boolean
}

const greenHsl = parseToHsl(colors.green)

const ThrottleHsla = ({ pressed }: ThrottleIndicatorProps) => {
  if (pressed) {
    return hsl(greenHsl.hue, greenHsl.saturation, greenHsl.lightness * 0.75)
  }

  return hsl(greenHsl.hue, greenHsl.saturation, greenHsl.lightness * 0.25)
}

const Root = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 36px;
  background-color: ${ThrottleHsla};
  color: ${props => (props.pressed ? colors.white : darken(0.25, colors.white))};
  text-align: center;
`

const ThrottleIndicator: React.FC<ThrottleIndicatorProps> = ({ pressed }) => {
  return (
    <Root pressed={pressed}>
      <InnerText>Throttle</InnerText>
    </Root>
  )
}

export default ThrottleIndicator
