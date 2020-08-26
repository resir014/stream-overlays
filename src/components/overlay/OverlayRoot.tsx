import * as React from 'react'
import styled from '@emotion/styled'

import { colors } from 'styles/variables'

interface OverlayRootProps {
  isGreenScreen?: boolean
  isTransparent?: boolean
}

const backgroundColor = (isGreenScreen = false, isTransparent = false) => {
  if (isGreenScreen) {
    return colors.greenscreen
  }

  if (isTransparent) {
    return 'transparent'
  }

  return colors.white
}

const Base = styled('div')<OverlayRootProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${props => backgroundColor(props.isGreenScreen, props.isTransparent)};
`

const OverlayRoot: React.FC<OverlayRootProps> = ({ children, isGreenScreen, isTransparent }) => (
  <Base isGreenScreen={isGreenScreen} isTransparent={isTransparent}>
    {children}
  </Base>
)

OverlayRoot.defaultProps = {
  isGreenScreen: false,
  isTransparent: false
}

export default OverlayRoot
