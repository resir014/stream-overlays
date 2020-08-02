import * as React from 'react'
import { css } from '@emotion/core'
import { ControllerData } from 'interfaces/trackmania'

import ThrottleIndicator from './ThrottleIndicator'
import BrakeIndicator from './BrakeIndicator'
import SteeringIndicator from './SteeringIndicator'
import ResetIndicator from './ResetIndicator'

interface ControllerTelemetryProps {
  controller?: ControllerData
  steeringDeadzone?: number
  showReset?: boolean
}

const ControllerTelemetry: React.FC<ControllerTelemetryProps> = ({
  controller,
  steeringDeadzone,
  showReset
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
          grid-template-columns: 204px auto;
          grid-gap: 24px;
          width: 100%;
          max-width: 768px;
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
            justify-content: center;
          `}
        >
          <div
            css={css`
              display: grid;
              grid-template-columns: ${showReset ? '1fr 108px' : '1fr'};
              grid-gap: 8px;
              width: 100%;
            `}
          >
            <div
              css={css`
                width: 100%;
                border-radius: 8px;
                overflow: hidden;
              `}
            >
              <ThrottleIndicator value={controller?.accelerate} />
              <BrakeIndicator value={controller?.brake} />
            </div>
            {showReset && (
              <div
                css={css`
                  width: 100%;
                  border-radius: 8px;
                  overflow: hidden;
                `}
              >
                <ResetIndicator value={controller?.reset} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ControllerTelemetry
