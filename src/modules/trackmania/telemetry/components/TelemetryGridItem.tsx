import * as React from 'react'
import { Box } from '@resir014/chungking-react'

const TelemetryGridItem: React.FC = ({ children }) => {
  return (
    <Box width="100%" borderRadius={8} overflow="hidden">
      {children}
    </Box>
  )
}

export default TelemetryGridItem
