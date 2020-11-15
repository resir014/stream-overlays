import { css } from '@emotion/core'
import { format } from 'date-fns'
import * as React from 'react'
import useClock from '~/utils/useClock'
import { Box, Text } from '~/components/chungking-core'

const BottomBarClock: React.FC = () => {
  const time = useClock()

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
          css={css`
            font-variant-numeric: tabular-nums;
          `}
        >
          {format(time, 'HH:mm:ss')}
        </Text>
      </Box>
    </Box>
  )
}

export default BottomBarClock
