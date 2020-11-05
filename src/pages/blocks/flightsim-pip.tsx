import * as React from 'react'
import { NextPage } from 'next'
import { transparentize } from 'polished'

import OverlayRoot from '~/components/overlay/OverlayRoot'
import { Box, colors } from '~/components/chungking-core'

const FlightsimPIPPage: NextPage = () => {
  return (
    <OverlayRoot isTransparent>
      <Box
        flex="1 1 auto"
        backgroundColor={transparentize(0.75, colors.blue[500])}
        height="100%"
        maxHeight={376}
        borderTop="4px solid"
        borderTopColor="blue.500"
      />
    </OverlayRoot>
  )
}

export default FlightsimPIPPage
