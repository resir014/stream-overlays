import * as React from 'react'
import { ControllerData } from '~/interfaces/trackmania'
import useInterval from './useInterval'

const MILLISECONDS_PER_FRAME = 1000 / 60
const ACCELERATE_BUTTON = 0
const RESET_BUTTON = 1
const BRAKE_BUTTON = 2

export const STEERING_DEADZONE = 0.01

export default function useGamepad() {
  const [isControllerConnected, setIsControllerConnected] = React.useState(false)
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

  return { isControllerConnected, controllerData }
}
