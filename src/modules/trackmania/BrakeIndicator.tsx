import * as React from 'react'
import { parseToHsl, hsl, darken } from 'polished'
import styled from '@emotion/styled'
import { colors } from 'styles/variables'
import { InnerText } from './TextStyles'

interface ThrottleIndicatorProps {
  value?: number
}

const redHsl = parseToHsl(colors.red)

const BrakeHsla = ({ value }: ThrottleIndicatorProps) => {
  if (value && value > 0) {
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
  color: ${props => (props.value && props.value > 0 ? colors.white : darken(0.25, colors.white))};
  text-align: center;
`

const BrakeIndicator: React.FC<ThrottleIndicatorProps> = ({ value }) => {
  return (
    <Root value={value}>
      <InnerText>Brake</InnerText>
    </Root>
  )
}

export default BrakeIndicator
