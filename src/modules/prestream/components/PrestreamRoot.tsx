import { transparentize } from 'polished'
import * as React from 'react'

import { Box, colors } from '~/components/chungking-core'

const PrestreamRoot: React.FC = ({ children }) => {
  return (
    <Box
      as="section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      flex="1 1 auto"
      width="100%"
      minWidth={450}
      position="relative"
      fontSize="24px"
      color="white"
      zIndex={0}
    >
      <Box
        display="grid"
        gridTemplateColumns="1fr 1fr minmax(auto, 1920px) 1fr 1fr"
        gridTemplateRows="100vh"
        flex="1 1 auto"
        zIndex={2}
        backgroundColor={transparentize(0.25, colors.black)}
      >
        <Box display="flex" flexDirection="column" gridColumn="3/4" flex="1 1 auto">
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default PrestreamRoot
