import * as React from 'react'
import { NextPage } from 'next'
import { parseToHsl, hsl } from 'polished'

import LayoutRoot from 'components/layout/LayoutRoot'
import ContentBlock from 'components/stream-blocks/ContentBlock'

import { colors } from 'styles/variables'
import { ControllerData } from 'interfaces/trackmania'
import useInterval from 'utils/useInterval'
import ControllerTelemetry from 'modules/trackmania/ControllerTelemetry'

interface FooterPageProps {
  errors?: Error['message']
}

const MILLISECONDS_PER_FRAME = 1000 / 60
const ACCELERATE_BUTTON = 0
const BRAKE_BUTTON = 2
const STEERING_DEADZONE = 0.01

const TrackManiaControlBlockPage: NextPage<FooterPageProps> = () => {
  const [, setIsControllerConnected] = React.useState(false)
  const [controllerData, setControllerData] = React.useState<ControllerData | undefined>(undefined)
  const greyHsla = parseToHsl(colors.grey90)

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
        const accelerate = activeGamepad.buttons[ACCELERATE_BUTTON].pressed
        const brake = activeGamepad.buttons[BRAKE_BUTTON].pressed
        const steering = activeGamepad.axes[0]
        setControllerData({ accelerate, brake, steering })
      }
    }
  }, MILLISECONDS_PER_FRAME)

  return (
    <LayoutRoot isTransparent>
      <ContentBlock
        style={{
          height: 128,
          backgroundColor: hsl(greyHsla.hue, greyHsla.saturation, greyHsla.lightness * 0.5)
        }}
      >
        <ControllerTelemetry controller={controllerData} steeringDeadzone={STEERING_DEADZONE} />
      </ContentBlock>
    </LayoutRoot>
  )
}

export default TrackManiaControlBlockPage
