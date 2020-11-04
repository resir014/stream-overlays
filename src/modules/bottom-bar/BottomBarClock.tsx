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
      backgroundColor="black"
    >
      <Box
        display="block"
        px="md"
        textAlign="right"
        borderRight="4px solid"
        borderRightColor="blue.500"
      >
        <Text
          display="block"
          color="white"
          variant={500}
          css={css`
            font-variant-numeric: tabular-nums;
          `}
        >
          <strong>{format(time, 'ccc')}</strong> {format(time, 'dd MMM yyyy')}
        </Text>
        <Text
          display="block"
          color="white"
          mt="xs"
          variant={800}
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
