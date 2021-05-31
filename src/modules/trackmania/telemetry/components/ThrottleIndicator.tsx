import * as React from 'react'
import styled from '@emotion/styled'
import { theme } from '@resir014/chungking-react'
import useGamepad from '~/utils/useGamepad'
import { InnerText } from './TextStyles'
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
    <Root css={telemetryStyles(controllerData?.accelerate, theme.colors.green[500])}>
      <InnerText>Throttle</InnerText>
    </Root>
  )
}

export default ThrottleIndicator
