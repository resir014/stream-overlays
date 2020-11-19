import * as React from 'react'
import { Box } from '../chungking-core'

const OverlayRoot: React.FC = ({ children }) => (
  <Box
    display="flex"
    flexDirection="column"
    width="100%"
    height="100vh"
    backgroundColor="transparent"
    overflow="hidden"
  >
    {children}
  </Box>
)

export default OverlayRoot
