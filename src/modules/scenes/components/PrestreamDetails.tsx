import { css } from '@emotion/react'
import { Box, BoxProps, colors, Stack, Text } from '@resir014/chungking-react'
import { transparentize } from 'polished'
import * as React from 'react'
import { PrestreamVariants } from '~/interfaces/types'
import { useStreamSchedule } from '~/utils/useCurrentStream'

const getColor = (variant?: PrestreamVariants) => {
  switch (variant) {
    case 'prestream': {
      return colors.blue[500]
    }
    case 'brb': {
      return colors.purple[500]
    }
    case 'end': {
      return colors.orange[400]
    }
    default: {
      return colors.grey[900]
    }
  }
}

interface PrestreamDetailsProps extends BoxProps {
  variant?: PrestreamVariants
}

const PrestreamDetails: React.FC<PrestreamDetailsProps> = ({ variant, ...rest }) => {
  const { schedule } = useStreamSchedule()

  return (
    <Box
      display="flex"
      flexDirection="column"
      backgroundColor={transparentize(0.1, colors.white)}
      color="black"
      overflow="hidden"
      {...rest}
    >
      <Box px="md" pt="sm">
        <Text
          variant={500}
          display="block"
          color={getColor(variant)}
          fontFamily="monospace"
          fontWeight={700}
          css={css`
            text-transform: uppercase;
          `}
        >
          Today&apos;s Stream
        </Text>
      </Box>
      <Box display="flex" alignItems="center" flex="1 1 auto" px="md" pb="sm">
        <Stack spacing="xs">
          <Stack spacing="xxs">
            <Text display="block" fontWeight={600} variant={800}>
              {schedule?.streamName || 'Untitled Stream'}
            </Text>
            <Text display="block" variant={600}>
              {schedule?.description || 'No description available.'}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}

export default PrestreamDetails
