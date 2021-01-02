import { css } from '@emotion/react'
import { Box, BoxProps, colors, Stack, Text } from '@resir014/chungking-react'
import { transparentize } from 'polished'
import * as React from 'react'
import { useStreamSchedule } from '~/utils/useCurrentStream'

type PrestreamDetailsProps = BoxProps

const PrestreamDetails: React.FC<PrestreamDetailsProps> = ({ ...rest }) => {
  const { schedule } = useStreamSchedule()

  return (
    <Box
      display="flex"
      alignItems="center"
      backgroundColor={transparentize(0.1, colors.white)}
      color="black"
      overflow="hidden"
      px="md"
      py="xs"
      {...rest}
    >
      <Stack spacing="xs">
        <Text
          variant={400}
          display="block"
          color="blue.500"
          fontFamily="monospace"
          fontWeight={700}
          css={css`
            text-transform: uppercase;
          `}
        >
          Upcoming Stream
        </Text>
        <Stack spacing="xxs">
          <Text display="block" fontWeight={700} variant={700}>
            {schedule?.streamName || 'Untitled Stream'}
          </Text>
          <Text display="block" variant={500}>
            {schedule?.description || 'No description available.'}
          </Text>
        </Stack>
      </Stack>
    </Box>
  )
}

export default PrestreamDetails
