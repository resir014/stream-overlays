import { css } from '@emotion/react'
import { Box, BoxProps, Stack, Text, theme } from '@resir014/chungking-react'
import * as React from 'react'
import { PrestreamVariants } from '~/interfaces/types'
import { useStreamSchedule } from '~/utils/useCurrentStream'

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

interface PrestreamDetailsProps extends BoxProps {
  text?: string
  variant?: PrestreamVariants
}

const PrestreamDetails: React.FC<PrestreamDetailsProps> = ({ text, variant, ...rest }) => {
  const { schedule } = useStreamSchedule()

  return (
    <Box
      display="flex"
      flexDirection="column"
      boxShadow={`inset 0 1px ${getColor(variant)}`}
      color="white"
      overflow="hidden"
      {...rest}
    >
      <Box pt="xs">
        <Text
          variant={500}
          display="block"
          fontFamily="monospace"
          color={getColor(variant)}
          fontWeight={700}
          css={css`
            text-transform: uppercase;
          `}
        >
          {text || "Today's Stream"}
        </Text>
      </Box>
      <Box display="flex" alignItems="center" flex="1 1 auto" pb="sm">
        <Stack spacing="xxs">
          <Text display="block" fontWeight={600} variant={800}>
            {schedule?.streamName || 'Untitled Stream'}
          </Text>
          <Text display="block" variant={600}>
            {schedule?.description || 'No description available.'}
          </Text>
        </Stack>
      </Box>
    </Box>
  )
}

export default PrestreamDetails
