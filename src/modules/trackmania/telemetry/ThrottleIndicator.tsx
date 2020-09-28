import * as React from 'react'
import styled from '@emotion/styled'
import { colors } from '~/components/chungking-core'
import useGamepad from '~/utils/useGamepad'
import { InnerText } from '../components/TextStyles'
import telemetryStyles from '../utils/telemetryStyles'

const Root = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  text-align: center;
`

const ThrottleIndicator: React.FC = () => {
  const { controllerData } = useGamepad()

  return (
    <Root css={telemetryStyles(controllerData?.accelerate, colors.green30)}>
      <InnerText>Throttle</InnerText>
    </Root>
  )
}

export default ThrottleIndicator
