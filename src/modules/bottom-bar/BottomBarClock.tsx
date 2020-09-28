import { css } from '@emotion/core'
import { format } from 'date-fns'
import * as React from 'react'
import useClock from '~/utils/useClock'
import { Box, Text } from '~/components/chungking-core'

const BottomBarClock: React.FC = () => {
  const time = useClock()

  return (
    <Box
      display="block"
      px="md"
      textAlign="right"
      borderRight="4px solid"
      borderRightColor="blue30"
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
        variant={700}
        fontWeight={600}
        css={css`
          font-variant-numeric: tabular-nums;
        `}
      >
        {format(time, 'HH:mm:ss')}
      </Text>
    </Box>
  )
}

export default BottomBarClock