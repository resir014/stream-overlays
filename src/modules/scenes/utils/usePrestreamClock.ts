import * as React from 'react'
import { clamp, lerpInverse } from '@resir014/lerp'
import { format } from 'date-fns'
import useClock from '~/utils/useClock'
import { useStreamSchedule } from '~/utils/useCurrentStream'

interface UsePrestreamClockResponse {
  time: Date
  percentage: number
}

export default function usePrestreamClock(): UsePrestreamClockResponse {
  const time = useClock()
  const { schedule } = useStreamSchedule()

  const scheduledDate = React.useMemo(() => {
    if (schedule) {
      return new Date(schedule.date)
    }

    return undefined
  }, [schedule])

  console.log(time)

  const beginTime = scheduledDate
    ? new Date(`${format(scheduledDate, 'yyyy-MM-dd')}T20:50:00+07:00`)
    : undefined
  const streamStartTime = scheduledDate
    ? new Date(`${format(scheduledDate, 'yyyy-MM-dd')}T21:00:00+07:00`)
    : undefined

  const percentage = React.useMemo(
    () => clamp(lerpInverse(+time, +(beginTime || 0), +(streamStartTime || 0)), 0, 1),
    [time, beginTime, streamStartTime]
  )

  return { time, percentage }
}
