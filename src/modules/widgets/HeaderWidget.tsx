/* eslint-disable react/jsx-no-comment-textnodes */
import * as React from 'react'
import { css } from '@emotion/core'
import { transparentize } from 'polished'
import { useStreamSchedule } from '~/utils/useCurrentStream'
import { Box, colors, Text } from '~/components/chungking-core'

interface BlockHeaderInnerProps {
  right?: boolean
}

export default function HeaderWidget() {
  const { schedule } = useStreamSchedule()

  return (
    <Box
      px="xxl"
      backgroundColor={transparentize(0.25, colors.black)}
      color="white"
      css={css`
        letter-spacing: 0.05rem;
      `}
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        height={36}
      >
        <Box borderLeft="2px solid" borderLeftColor="blue.500" px="md">
          <Text as="h1" variant={500} fontWeight={400}>
            <Text as="strong" fontWeight={600}>
              @resir014
            </Text>{' '}
            // resir014.xyz
          </Text>
        </Box>
        <Box textAlign="right" borderRight="2px solid" borderRightColor="blue.500" px="md">
          <Text as="h2" variant={500} fontWeight={400}>
            {schedule ? schedule.streamName : 'Untitled Stream'}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

HeaderWidget.defaultProps = {
  title: undefined
}
