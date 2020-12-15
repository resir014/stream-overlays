import * as React from 'react'
import styled from '@emotion/styled'
import { colors } from '@resir014/chungking-react'
import useGamepad from '~/utils/useGamepad'
import { InnerText } from '../components/TextStyles'
import telemetryStyles from '../utils/telemetryStyles'

const Root = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 108px;
  height: 80px;
  text-align: center;
`

const ResetIndicator: React.FC = () => {
  const { controllerData } = useGamepad()

  return (
    <Root css={telemetryStyles(controllerData?.reset, colors.blue[500])}>
      <InnerText>Reset</InnerText>
    </Root>
  )
}

export default ResetIndicator
