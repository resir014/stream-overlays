import { css } from '@emotion/react'
import { Box, BoxProps, colors, Stack, Text } from '@resir014/chungking-react'
import { format } from 'date-fns'
import { transparentize } from 'polished'
import * as React from 'react'
import { PrestreamVariants } from '~/interfaces/types'
import usePrestreamClock from '../utils/usePrestreamClock'

interface PrestreamIconProps extends BoxProps {
  variant?: PrestreamVariants
}

const getTextColor = (variant?: PrestreamVariants) => {
  switch (variant) {
    case 'prestream': {
      return colors.blue[300]
    }
    case 'brb': {
      return colors.purple[300]
    }
    case 'end': {
      return colors.orange[300]
    }
    default: {
      return colors.grey[300]
    }
  }
}

const getBarColor = (variant?: PrestreamVariants) => {
  switch (variant) {
    case 'prestream': {
      return colors.blue[500]
    }
    case 'brb': {
      return colors.purple[500]
    }
    case 'end': {
      return colors.orange[500]
    }
    default: {
      return colors.grey[500]
    }
  }
}

const PrestreamClock: React.FC<PrestreamIconProps> = ({ variant, ...rest }) => {
  const { time, percentage } = usePrestreamClock()

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
      {...rest}
    >
      <Box display="flex" alignItems="center" gridArea="clock-inner" px="md">
        <Stack spacing="xxs">
          <Text display="block" variant={700}>
            <Text fontWeight={600} mr="sm">
              {format(time, 'EEEE')}
            </Text>
            <Text color={getTextColor(variant)}>{format(time, 'dd MMMM yyyy')}</Text>
          </Text>
          <Text display="block" fontFamily="monospace" variant={900} fontWeight={700}>
            {format(time, 'HH:mm:ss')}
          </Text>
        </Stack>
      </Box>
      <Box gridArea="bar" position="relative">
        <Box
          position="absolute"
          backgroundColor={getBarColor(variant)}
          top={0}
          bottom={0}
          left={0}
          style={{ width: `${Math.ceil(percentage * 100)}%` }}
          css={css`
            transition: all 6s linear;
          `}
        />
      </Box>
    </Box>
  )
}

export default PrestreamClock
