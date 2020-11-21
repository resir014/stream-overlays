import * as React from 'react'
import { NextPage } from 'next'
import { transparentize } from 'polished'

import OverlayRoot from '~/components/overlay/OverlayRoot'
import { Box, colors, Iframe } from '~/components/chungking-core'

const TrackManiaControlBlockPage: NextPage = () => {
  return (
    <OverlayRoot>
      <Box display="flex" flexDirection="column" flex="1 1 auto">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          py="md"
          px="lg"
          backgroundColor={transparentize(0.75, colors.blue[500])}
          borderTop="4px solid"
          borderTopColor="blue.500"
        >
          <Iframe
            title="overlay"
            src="https://tmviz.vercel.app/overlay?accelerateButton=0&amp;accelerateColor=%231fc791&amp;brakeButton=2&amp;brakeColor=%23ee0000&amp;framerate=60&amp;steeringAxis=0&amp;steeringColor=%23cb891d&amp;steeringDeadzone=0.01"
            width={256}
            height={140}
          />
        </Box>
      </Box>
    </OverlayRoot>
  )
}

export default TrackManiaControlBlockPage
