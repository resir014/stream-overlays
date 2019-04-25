import * as React from 'react'
import useInterval from './useInterval'

export default function useClock() {
  const [time, setTime] = React.useState<Date>(new Date())

  const tick = () => {
    setTime(new Date())
  }

  useInterval(tick, 500)
  return time
}
