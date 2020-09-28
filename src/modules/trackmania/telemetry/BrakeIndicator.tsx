import * as React from 'react'
import styled from '@emotion/styled'
import { InnerText } from '../components/TextStyles'
import { colors } from '~/components/chungking-core'
import useGamepad from '~/utils/useGamepad'
import telemetryStyles from '../utils/telemetryStyles'

const Root = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  text-align: center;
`

const BrakeIndicator: React.FC = () => {
  const { controllerData } = useGamepad()

  return (
    <Root css={telemetryStyles(controllerData?.brake, colors.red30)}>
      <InnerText>Brake</InnerText>
    </Root>
  )
}

export default BrakeIndicator
