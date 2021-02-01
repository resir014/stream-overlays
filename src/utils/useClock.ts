import * as React from 'react'
import { TaskTimer } from 'tasktimer'

export default function useClock() {
  const timer = new TaskTimer(500)
  const [time, setTime] = React.useState<Date>(new Date())

  const tick = () => {
    setTime(new Date())
  }

  timer.add({
    tickInterval: 1,
    callback: tick
  })

  React.useEffect(() => {
    timer.start()

    return () => {
      timer.stop()
    }
  }, [])

  return time
}
