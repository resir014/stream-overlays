import * as React from 'react'
import { parseToHsl, hsl, darken } from 'polished'
import styled from '@emotion/styled'
import { colors } from '~/styles/variables'
import { InnerText } from './TextStyles'

interface ThrottleIndicatorProps {
  value?: number
}

const greenHsl = parseToHsl(colors.green)

const ThrottleHsla = ({ value }: ThrottleIndicatorProps) => {
  if (value && value > 0) {
    return hsl(greenHsl.hue, greenHsl.saturation, greenHsl.lightness * 0.75)
  }

  return hsl(greenHsl.hue, greenHsl.saturation, greenHsl.lightness * 0.25)
}

const Root = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  background-color: ${ThrottleHsla};
  color: ${props => (props.value && props.value > 0 ? colors.white : darken(0.25, colors.white))};
  text-align: center;
`

const ThrottleIndicator: React.FC<ThrottleIndicatorProps> = ({ value }) => {
  return (
    <Root value={value}>
      <InnerText>Throttle</InnerText>
    </Root>
  )
}

export default ThrottleIndicator
