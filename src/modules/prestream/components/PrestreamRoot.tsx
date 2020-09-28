import * as React from 'react'
import { css } from '@emotion/core'

import { Box } from '~/components/chungking-core'
import topoPattern from '~/styles/topoPattern'

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
      fontSize="24px"
      color="white"
      zIndex={1}
      css={css`
        ${topoPattern}
      `}
    >
      <Box
        display="grid"
        gridTemplateColumns="1fr 1fr minmax(auto, 1920px) 1fr 1fr"
        gridTemplateRows="100vh"
        flex="1 1 auto"
        zIndex={2}
      >
        <Box display="flex" flexDirection="column" gridColumn="3/4" flex="1 1 auto">
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default PrestreamRoot
