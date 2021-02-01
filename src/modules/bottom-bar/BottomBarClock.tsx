import { format } from 'date-fns'
import * as React from 'react'
import { Box, Text } from '@resir014/chungking-react'
import useClock from '~/utils/useClock'

const BottomBarClock: React.FC = () => {
  const time = useClock()

  const clockSeparator = React.useMemo(() => {
    const ms = time.getMilliseconds()

    if (ms < 500) {
      return ':'
    }

    return ' '
  }, [time])

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      gridArea="clock"
      py="xs"
      px="xxl"
    >
      <Box
        display="block"
        px="md"
        textAlign="right"
        borderRight="2px solid"
        borderRightColor="blue.500"
      >
        <Text
          display="block"
          color="white"
          fontSize="24px"
          lineHeight="24px"
          fontWeight={600}
          fontFamily="monospace"
        >
          {format(time, 'HH')}
          {clockSeparator}
          {format(time, 'mm')}
        </Text>
      </Box>
    </Box>
  )
}

export default BottomBarClock
