import * as React from 'react'
import { Box } from '~/components/chungking-core'

import { ThrottleIndicator, BrakeIndicator, SteeringIndicator, ResetIndicator } from './telemetry'
import TelemetryGridItem from './components/TelemetryGridItem'

interface ControllerTelemetryProps {
  steeringDeadzone?: number
  showReset?: boolean
}

const ControllerTelemetry: React.FC<ControllerTelemetryProps> = ({
  steeringDeadzone,
  showReset
}) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Box display="grid" gridTemplateRows="1fr 1fr" gridGap="md" width="100%" maxWidth={320}>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <SteeringIndicator steeringDeadzone={steeringDeadzone} />
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Box
            display="grid"
            gridTemplateColumns={showReset ? '1fr 108px' : '1fr'}
            gridGap="xs"
            width="100%"
          >
            <TelemetryGridItem>
              <ThrottleIndicator />
              <BrakeIndicator />
            </TelemetryGridItem>
            {showReset && (
              <TelemetryGridItem>
                <ResetIndicator />
              </TelemetryGridItem>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ControllerTelemetry
