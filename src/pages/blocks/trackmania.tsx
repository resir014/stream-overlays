import * as React from 'react'
import { NextPage } from 'next'

import OverlayRoot from 'components/overlay/OverlayRoot'
import ContentBlock from 'components/stream-blocks/ContentBlock'

import { ControllerData } from 'interfaces/trackmania'
import useInterval from 'utils/useInterval'
import ControllerTelemetry from 'modules/trackmania/ControllerTelemetry'
import { css } from '@emotion/core'

interface FooterPageProps {
  errors?: Error['message']
}

const MILLISECONDS_PER_FRAME = 1000 / 60
const ACCELERATE_BUTTON = 0
const RESET_BUTTON = 1
const BRAKE_BUTTON = 2
const STEERING_DEADZONE = 0.01

const TrackManiaControlBlockPage: NextPage<FooterPageProps> = () => {
  const [, setIsControllerConnected] = React.useState(false)
  const [controllerData, setControllerData] = React.useState<ControllerData | undefined>(undefined)

  const handleGamepadConnected = (e: GamepadEvent) => {
    // eslint-disable-next-line no-console
    console.log(
      'Gamepad connected at index %d: %s. %d buttons, %d axes.',
      e.gamepad.index,
      e.gamepad.id,
      e.gamepad.buttons.length,
      e.gamepad.axes.length
    )
    setIsControllerConnected(true)
  }

  const handleGamepadDisconnected = (e: GamepadEvent) => {
    // eslint-disable-next-line no-console
    console.log('Gamepad disconnected from index %d: %s', e.gamepad.index, e.gamepad.id)
    // eslint-disable-next-line no-alert
    alert('Gamepad disconnected! Replug it to initate detection.')
    setIsControllerConnected(false)
    setControllerData(undefined)
  }

  React.useEffect(() => {
    window.addEventListener<any>('gamepadconnected', handleGamepadConnected)
    window.addEventListener<any>('gamepaddisconnected', handleGamepadDisconnected)

    return () => {
      window.removeEventListener<any>('gamepadconnected', handleGamepadConnected)
      window.removeEventListener<any>('gamepaddisconnected', handleGamepadDisconnected)
    }
  }, [])

  useInterval(() => {
    if ('getGamepads' in navigator) {
      const activeGamepad = navigator.getGamepads()[0]

      if (activeGamepad) {
        // eslint-disable-next-line no-console
        const accelerate = activeGamepad.buttons[ACCELERATE_BUTTON].value
        const brake = activeGamepad.buttons[BRAKE_BUTTON].value
        const reset = activeGamepad.buttons[RESET_BUTTON].value
        const steering = activeGamepad.axes[0]
        setControllerData({ accelerate, brake, reset, steering })
      }
    }
  }, MILLISECONDS_PER_FRAME)

  return (
    <OverlayRoot isTransparent>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
          padding: 4px 8px;
        `}
      >
        <ContentBlock
          css={css`
            height: 128px;
          `}
          hasShadow
        >
          <ControllerTelemetry controller={controllerData} steeringDeadzone={STEERING_DEADZONE} />
        </ContentBlock>
      </div>
    </OverlayRoot>
  )
}

export default TrackManiaControlBlockPage
