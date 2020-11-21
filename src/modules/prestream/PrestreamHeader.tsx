/* eslint-disable react/jsx-no-comment-textnodes */
import * as React from 'react'
import { transparentize } from 'polished'
import styled from '@emotion/styled'
import format from 'date-fns/format'
import { useStreamSchedule } from '~/utils/useCurrentStream'
import { Box, colors, Text } from '~/components/chungking-core'

const Root = styled('header')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px 48px 0;
  letter-spacing: 0.05rem;
`

export default function PrestreamHeader() {
  const { schedule } = useStreamSchedule()

  return (
    <Root>
      <Box
        display="flex"
        flexDirection="row"
        borderLeft="8px solid"
        borderLeftColor="blue.500"
        backgroundColor={transparentize(0.75, colors.blue[500])}
        py="xs"
        px="lg"
        boxShadow="single"
      >
        <Box>
          <Text display="block" fontSize="24px" lineHeight="32px" fontWeight={700}>
            {schedule && <>{format(Date.parse(schedule.date), 'yyyy.MM.dd')} — </>}
            {schedule ? schedule.streamName : 'Untitled Stream'}
          </Text>
          <Text display="block" fontSize="24px" lineHeight="32px" fontWeight={400}>
            {schedule ? schedule.description : 'No description given.'}
          </Text>
        </Box>
      </Box>
    </Root>
  )
}
