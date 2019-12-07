import styled from 'styled-components'
import { colors } from '../../styles/variables'

interface BlockRootProps {
  isWindowStream?: boolean
}

const BlockRoot = styled('div')<BlockRootProps>`
  display: flex;
  flex-direction: ${props => (props.isWindowStream ? 'column-reverse' : 'column')};
  flex: 1;
  width: 100%;
  min-width: 450px;
  font-size: 24px;
  color: ${colors.white};
  background-color: ${colors.black};
`

export default BlockRoot
