import * as React from 'react'
import { Box } from '@resir014/chungking-react'

const DashboardRoot: React.FC = ({ children }) => (
  <Box
    as="main"
    display="flex"
    flexDirection="column"
    width="100%"
    height="100%"
    minHeight="100vh"
    overflow="hidden"
    backgroundColor="black"
    color="white"
  >
    {children}
  </Box>
)

export default DashboardRoot
