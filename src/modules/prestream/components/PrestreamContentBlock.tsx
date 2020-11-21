import * as React from 'react'
import { Box } from '~/components/chungking-core'

const PrestreamContentBlock: React.FC = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      flex="1 1 auto"
      width="100%"
      m={0}
      px={48}
    >
      {children}
    </Box>
  )
}

export default PrestreamContentBlock
