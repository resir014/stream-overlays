import * as React from 'react'
import styled from '@emotion/styled'
import { colors } from '~/styles/variables'
import { BasicText } from './TextStyles'

const Root = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 160px;
  background-color: ${colors.red};
  color: ${colors.white};
`

const ControllerDisconnected: React.FC = () => {
  return (
    <Root>
      <BasicText>Controller Disconnected</BasicText>
    </Root>
  )
}

export default ControllerDisconnected
