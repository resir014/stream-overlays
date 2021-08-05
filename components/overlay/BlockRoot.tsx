import styled from '@emotion/styled'
import { theme } from '@resir014/chungking-react'

const BlockRoot = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  min-width: 450px;
  font-size: 24px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.black};
`

export default BlockRoot
