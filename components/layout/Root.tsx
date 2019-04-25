import styled from 'styled-components'
import { colors } from '../../styles/variables'

interface RootProps {
  isGreenScreen?: boolean
}

const Root = styled('div')<RootProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${props => (props.isGreenScreen ? '#0f0' : colors.white)};
`

export default Root
