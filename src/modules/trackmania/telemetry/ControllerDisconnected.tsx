import * as React from 'react'
import styled from '@emotion/styled'
import { theme } from '@resir014/chungking-react'
import { BasicText } from './components'

const Root = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 160px;
  background-color: ${theme.colors.red[500]};
  color: ${theme.colors.white};
`

const ControllerDisconnected: React.FC = () => {
  return (
    <Root>
      <BasicText>Controller Disconnected</BasicText>
    </Root>
  )
}

export default ControllerDisconnected
