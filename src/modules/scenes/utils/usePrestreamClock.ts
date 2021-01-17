import * as React from 'react'
import { clamp, lerpInverse } from '@resir014/lerp'
import { format } from 'date-fns'
import useClock from '~/utils/useClock'

interface UsePrestreamClockResponse {
  time: Date
  percentage: number
}

export default function usePrestreamClock(): UsePrestreamClockResponse {
  const time = useClock()
  const currentDate = format(time, 'yyyy-MM-dd')

  const beginTime = new Date(`${currentDate}T20:50:00+07:00`)
  const streamStartTime = new Date(`${currentDate}T21:00:00+07:00`)

  const percentage = React.useMemo(
    () => clamp(lerpInverse(+time, +beginTime, +streamStartTime), 0, 1),
    [time, beginTime, streamStartTime]
  )

  return { time, percentage }
}
