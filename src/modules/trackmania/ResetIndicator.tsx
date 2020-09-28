import * as React from 'react'
import { parseToHsl, hsl, darken } from 'polished'
import styled from '@emotion/styled'
import { colors } from '~/styles/variables'
import { InnerText } from './TextStyles'

interface ThrottleIndicatorProps {
  value?: number
}

const blueHsl = parseToHsl(colors.blue)

const BrakeHsla = ({ value }: ThrottleIndicatorProps) => {
  if (value && value > 0) {
    return hsl(blueHsl.hue, blueHsl.saturation, blueHsl.lightness * 0.75)
  }

  return hsl(blueHsl.hue, blueHsl.saturation, blueHsl.lightness * 0.25)
}

const Root = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 108px;
  height: 80px;
  background-color: ${BrakeHsla};
  color: ${props => (props.value && props.value > 0 ? colors.white : darken(0.25, colors.white))};
  text-align: center;
`

const ResetIndicator: React.FC<ThrottleIndicatorProps> = ({ value }) => {
  return (
    <Root value={value}>
      <InnerText>Reset</InnerText>
    </Root>
  )
}

export default ResetIndicator
