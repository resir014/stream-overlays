import * as React from 'react'
import { clamp, lerpInverse } from '@resir014/lerp'
import { format } from 'date-fns'
import useClock from '~/utils/useClock'
import { useStreamSchedule } from '~/utils/useCurrentStream'

interface UsePrestreamClockResponse {
  time: Date
  percentage: number
}

function toTimeString(time: string | number) {
  return time.toString().padStart(2, '0')
}

const TEN_MINUTES_IN_MILLISECONDS = 60 * 10 * 1000

export default function usePrestreamClock(startH = 21, startM = 0): UsePrestreamClockResponse {
  const time = useClock()
  const { schedule } = useStreamSchedule()

  const topOfTheHour = React.useMemo(() => {
    if (schedule) {
      const [date, h, m, s] = [
        format(new Date(schedule.date), 'yyyy-MM-dd'),
        toTimeString(startH),
        toTimeString(startM),
        toTimeString(0)
      ]

      return new Date(`${date}T${h}:${m}:${s}+07:00`).getTime()
    }

    return undefined
  }, [schedule])

  const percentage = React.useMemo(() => {
    const timeStamp = time.getTime()
    const topFormatted = topOfTheHour || 0
    const startFormatted = topOfTheHour ? topOfTheHour - TEN_MINUTES_IN_MILLISECONDS : 0

    return clamp(lerpInverse(timeStamp, startFormatted, topFormatted), 0, 1)
  }, [time, topOfTheHour])

  return { time, percentage }
}
