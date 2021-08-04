import { Box } from '@resir014/chungking-react'
import * as React from 'react'
import useClock from '~/utils/useClock'
import { TimeSignalConfig } from './types'

const TimeSignalWrapper: React.FC<TimeSignalConfig> = ({ h, m }) => {
  const time = useClock()
  const audio = React.useMemo(() => new Audio('/static/audio/timesignal.ogg'), [])

  const [hours, minutes, seconds] = [time.getHours(), time.getMinutes(), time.getSeconds()]

  React.useEffect(() => {
    // If top of the hour (m === 0):
    // - use previous hour, else keep current hour
    // - use minute 59, else m - 1
    if (hours === (m === 0 ? h - 1 : h) && minutes === (m === 0 ? 59 : m - 1) && seconds === 55) {
      audio.play()
    }
  }, [hours, minutes, seconds, h, m])

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      width="100%"
      height="100%"
      minHeight="100vh"
    />
  )
}

export default TimeSignalWrapper
