import { Box, BoxProps, Stack, Text, theme } from '@resir014/chungking-react'
import { format } from 'date-fns'
import { transparentize } from 'polished'
import * as React from 'react'
import { PrestreamVariants } from '~/interfaces/types'
import usePrestreamClock from '../utils/usePrestreamClock'

interface PrestreamIconProps extends BoxProps {
  variant?: PrestreamVariants
  startH?: number
  startM?: number
}

const getColor = (variant?: PrestreamVariants) => {
  switch (variant) {
    case 'prestream': {
      return theme.colors.blue[300]
    }
    case 'brb': {
      return theme.colors.purple[300]
    }
    case 'end': {
      return theme.colors.orange[300]
    }
    default: {
      return theme.colors.grey[300]
    }
  }
}

const PrestreamClock: React.FC<PrestreamIconProps> = ({ variant, startH, startM, ...rest }) => {
  const { time, percentage } = usePrestreamClock(startH, startM)

  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr"
      gridTemplateRows="8px 1fr"
      gridTemplateAreas={`
        "bar"
        "clock-inner"
      `}
      {...rest}
    >
      <Box display="flex" alignItems="center" gridArea="clock-inner">
        <Stack spacing="xxs">
          <Text display="block" variant={700}>
            <Text display="inline-block" fontWeight={600} mr="sm">
              {format(time, 'EEEE')}
            </Text>
            <Text display="inline-block" color={getColor(variant)}>
              {format(time, 'dd MMMM yyyy')}
            </Text>
          </Text>
          <Text display="block" fontFamily="monospace" variant={900} fontWeight={700}>
            {format(time, 'HH:mm:ss')}
          </Text>
        </Stack>
      </Box>
      <Box
        gridArea="bar"
        position="relative"
        boxShadow={`inset 0 -1px ${transparentize(0.1, getColor(variant))}`}
      >
        <Box
          position="absolute"
          backgroundColor={percentage >= 1 ? 'green.500' : 'white'}
          top={0}
          bottom={0}
          left={0}
          style={{ width: `${(percentage * 100).toFixed(1)}%` }}
        />
      </Box>
    </Box>
  )
}

export default PrestreamClock
