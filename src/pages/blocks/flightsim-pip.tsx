import * as React from 'react'
import { NextPage } from 'next'
import { transparentize } from 'polished'

import OverlayRoot from '~/components/overlay/OverlayRoot'
import { Box, colors } from '~/components/chungking-core'

const FlightsimPIPPage: NextPage = () => {
  return (
    <OverlayRoot isTransparent>
      <Box
        backgroundColor={transparentize(0.5, colors.grey90)}
        height={376}
        borderTop="4px solid"
        borderTopColor="blue30"
      />
    </OverlayRoot>
  )
}

export default FlightsimPIPPage
