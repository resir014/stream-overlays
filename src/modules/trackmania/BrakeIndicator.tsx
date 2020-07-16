import * as React from 'react'
import { parseToHsl, hsl, darken } from 'polished'
import styled from '@emotion/styled'
import { colors } from 'styles/variables'
import { InnerText } from './TextStyles'

interface ThrottleIndicatorProps {
  pressed?: boolean
}

const redHsl = parseToHsl(colors.red)

const BrakeHsla = ({ pressed }: ThrottleIndicatorProps) => {
  if (pressed) {
    return hsl(redHsl.hue, redHsl.saturation, redHsl.lightness * 0.75)
  }

  return hsl(redHsl.hue, redHsl.saturation, redHsl.lightness * 0.25)
}

const Root = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 36px;
  background-color: ${BrakeHsla};
  color: ${props => (props.pressed ? colors.white : darken(0.25, colors.white))};
  text-align: center;
`

const BrakeIndicator: React.FC<ThrottleIndicatorProps> = ({ pressed }) => {
  return (
    <Root pressed={pressed}>
      <InnerText>Brake</InnerText>
    </Root>
  )
}

export default BrakeIndicator
