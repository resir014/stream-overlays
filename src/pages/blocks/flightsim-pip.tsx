import * as React from 'react'
import { NextPage } from 'next'

import OverlayRoot from '~/components/overlay/OverlayRoot'
import { Box } from '~/components/chungking-core'

const FlightsimPIPPage: NextPage = () => {
  return (
    <OverlayRoot isTransparent>
      <Box
        flex="1 1 auto"
        backgroundColor="black"
        height="100%"
        maxHeight={376}
        borderTop="4px solid"
        borderTopColor="blue30"
      />
    </OverlayRoot>
  )
}

export default FlightsimPIPPage
