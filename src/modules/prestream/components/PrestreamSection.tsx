import * as React from 'react'
import { Box } from '~/components/chungking-core'

const PrestreamSection: React.FC = ({ children }) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr 1fr"
      gridGap="lg"
      width="100%"
      height="100%"
      maxHeight={640}
      alignSelf="center"
    >
      {children}
    </Box>
  )
}

export default PrestreamSection
