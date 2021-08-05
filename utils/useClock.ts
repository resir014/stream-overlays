import * as React from 'react'

export default function useClock() {
  const raf = React.useRef<number>()
  const [time, setTime] = React.useState<Date>(new Date())

  const tick = () => {
    setTime(new Date())
    raf.current = requestAnimationFrame(tick)
  }

  React.useEffect(() => {
    raf.current = requestAnimationFrame(tick)

    return () => {
      if (raf.current) {
        cancelAnimationFrame(raf.current)
      }
    }
  }, [])

  return time
}
