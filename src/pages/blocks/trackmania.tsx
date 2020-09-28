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
      <Box display="flex" flexDirection="column" flex="1 1 auto" my="xxs" mx="xs">
        <Box
          backgroundColor={transparentize(0.5, colors.grey90)}
          borderTop="4px solid"
          borderTopColor="blue30"
        >
          <ControllerTelemetry steeringDeadzone={STEERING_DEADZONE} />
        </Box>
      </Box>
    </OverlayRoot>
  )
}

export default TrackManiaControlBlockPage
