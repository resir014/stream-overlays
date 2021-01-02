import { Box, BoxProps, colors, Stack, Text } from '@resir014/chungking-react'
import { format } from 'date-fns'
import { transparentize } from 'polished'
import * as React from 'react'
import useClock from '~/utils/useClock'

type PrestreamIconProps = BoxProps

const PrestreamClock: React.FC<PrestreamIconProps> = props => {
  const time = useClock()

  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr"
      gridTemplateRows="1fr 8px"
      gridTemplateAreas={`
        "clock-inner"
        "bar"
      `}
      backgroundColor={transparentize(0.25, colors.black)}
      {...props}
    >
      <Box display="flex" alignItems="center" gridArea="clock-inner" px="md">
        <Stack spacing="xxs">
          <Text display="block" variant={700}>
            <Text fontWeight={600} mr="sm">
              {format(time, 'EEEE')}
            </Text>
            <Text color="blue.300">{format(time, 'dd MMMM yyyy')}</Text>
          </Text>
          <Text display="block" fontFamily="monospace" variant={900} fontWeight={700}>
            {format(time, 'HH:mm:ss')}
          </Text>
        </Stack>
      </Box>
      <Box gridArea="bar" position="relative">
        <Box
          position="absolute"
          backgroundColor="blue.500"
          top={0}
          bottom={0}
          left={0}
          width="62.5%"
        />
      </Box>
    </Box>
  )
}

export default PrestreamClock
