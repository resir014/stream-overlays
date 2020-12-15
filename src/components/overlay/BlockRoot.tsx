import styled from '@emotion/styled'
import { colors } from '@resir014/chungking-react'

const BlockRoot = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  min-width: 450px;
  font-size: 24px;
  color: ${colors.white};
  background-color: ${colors.black};
`

export default BlockRoot
