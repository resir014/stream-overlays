import * as React from 'react'
import styled from 'styled-components'

import { colors } from '../../styles/variables'
import GlobalStyles from './GlobalStyles'

interface RootProps {
  isGreenScreen?: boolean
}

const Base = styled('div')<RootProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${props => (props.isGreenScreen ? '#0f0' : colors.white)};
`

const LayoutRoot: React.FC<RootProps> = ({ children, isGreenScreen }) => (
  <Base isGreenScreen={isGreenScreen}>
    <GlobalStyles />
    {children}
  </Base>
)

LayoutRoot.defaultProps = {
  isGreenScreen: false
}

export default LayoutRoot
