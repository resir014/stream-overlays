import * as React from 'react'
import { transparentize } from 'polished'
import { Box, colors } from '~/components/chungking-core'

const PrestreamFooterBlock: React.FC = ({ children }) => {
  return (
    <Box
      display="flex"
      alignItems="flex-start"
      height={52}
      px={48}
      color="white"
      backgroundColor={transparentize(0.6, colors.grey[900])}
      borderTop="4px solid"
      borderTopColor="grey.900"
    >
      {children}
    </Box>
  )
}

export default PrestreamFooterBlock
