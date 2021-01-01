import * as React from 'react'
import { Box } from '@resir014/chungking-react'
import { Global } from '@emotion/react'
import overlayGlobalStyles from './utils/overlayGlobalStyles'

const OverlayRoot: React.FC = ({ children }) => (
  <Box
    display="flex"
    flexDirection="column"
    width="100%"
    height="100vh"
    backgroundColor="transparent"
    overflow="hidden"
  >
    <Global styles={overlayGlobalStyles} />
    {children}
  </Box>
)

export default OverlayRoot
