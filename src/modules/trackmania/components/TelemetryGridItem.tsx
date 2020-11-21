import * as React from 'react'
import { Box } from '~/components/chungking-core'

const TelemetryGridItem: React.FC = ({ children }) => {
  return (
    <Box width="100%" borderRadius={8} overflow="hidden">
      {children}
    </Box>
  )
}

export default TelemetryGridItem
