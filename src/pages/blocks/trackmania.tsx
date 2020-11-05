import * as React from 'react'
import { NextPage } from 'next'
import { transparentize } from 'polished'

import OverlayRoot from '~/components/overlay/OverlayRoot'
import { Box, colors } from '~/components/chungking-core'

import ControllerTelemetry from '~/modules/trackmania/ControllerTelemetry'

const STEERING_DEADZONE = 0.01

const TrackManiaControlBlockPage: NextPage = () => {
  return (
    <OverlayRoot isTransparent>
      <Box display="flex" flexDirection="column" flex="1 1 auto">
        <Box
          py="md"
          px="lg"
          backgroundColor={transparentize(0.75, colors.blue[500])}
          borderTop="4px solid"
          borderTopColor="blue.500"
        >
          <ControllerTelemetry steeringDeadzone={STEERING_DEADZONE} />
        </Box>
      </Box>
    </OverlayRoot>
  )
}

export default TrackManiaControlBlockPage
