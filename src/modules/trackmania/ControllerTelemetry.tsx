import * as React from 'react'
import { css } from '@emotion/core'
import { ControllerData } from 'interfaces/trackmania'

import ThrottleIndicator from './ThrottleIndicator'
import BrakeIndicator from './BrakeIndicator'
import SteeringIndicator from './SteeringIndicator'

interface ControllerTelemetryProps {
  controller?: ControllerData
  steeringDeadzone?: number
}

const ControllerTelemetry: React.FC<ControllerTelemetryProps> = ({
  controller,
  steeringDeadzone
}) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}
    >
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 24px;
          width: 100%;
          max-width: 600px;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          `}
        >
          <SteeringIndicator axisValue={controller?.steering} steeringDeadzone={steeringDeadzone} />
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <div
            css={css`
              width: 100%;
              border-radius: 8px;
              overflow: hidden;
            `}
          >
            <ThrottleIndicator pressed={controller?.accelerate} />
            <BrakeIndicator pressed={controller?.brake} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ControllerTelemetry
