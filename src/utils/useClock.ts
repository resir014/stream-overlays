import * as React from 'react'
import { TaskTimer } from 'tasktimer'

export default function useClock() {
  const timer = new TaskTimer(1000)
  const [time, setTime] = React.useState<Date>(new Date())

  const tick = () => {
    setTime(new Date())
  }

  React.useEffect(() => {
    timer.on('tick', tick)
    timer.start()

    return () => {
      timer.off('tick', tick)
      timer.stop()
    }
  }, [])

  return time
}
