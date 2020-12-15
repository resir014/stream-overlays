import * as React from 'react'
import { NextPage } from 'next'
import { transparentize } from 'polished'
import { Box, colors, Iframe } from '@resir014/chungking-react'

import OverlayRoot from '~/components/overlay/OverlayRoot'

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
            src="https://gamepadviewer.com/?p=1&amp;sc=0.375"
            width={300}
            height={268}
          />
        </Box>
      </Box>
    </OverlayRoot>
  )
}

export default TrackManiaControlBlockPage
