import * as React from 'react'
import { TaskTimer } from 'tasktimer'

export default function useClock() {
  const timer = new TaskTimer(500)
  const [time, setTime] = React.useState<Date>(new Date())

  const tick = {
    tickInterval: 1,
    callback: () => {
      setTime(new Date())
    }
  }

  React.useEffect(() => {
    timer.add(tick).start()

    return () => {
      timer.stop()
    }
  }, [])

  return time
}
