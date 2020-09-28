import * as React from 'react'
import { format } from 'date-fns'
import { css } from '@emotion/core'

import useClock from '~/utils/useClock'
import { Box, Text } from '~/components/chungking-core'

interface PrestreamDateTimeProps {
  titleColor?: string
  text?: React.ReactNode
}

const PrestreamDateTime: React.FC<PrestreamDateTimeProps> = ({ titleColor, text }) => {
  const time = useClock()

  return (
    <Box display="flex" alignItems="center" justifyContent="flex-end">
      <Box textAlign="right">
        <Text as="time" variant={900} fontWeight={300} dateTime={time.toISOString()}>
          <Text as="strong" fontWeight={600}>
            {format(time, 'EEEE')}
          </Text>{' '}
          {format(time, 'dd MMMM yyyy')}
        </Text>
        <Text
          display="block"
          margin={0}
          fontSize="140px"
          lineHeight="148px"
          fontWeight={600}
          color={titleColor || 'white'}
          css={css`
            font-variant-numeric: tabular-nums;
          `}
        >
          {format(time, 'HH:mm:ss')}
        </Text>
        {text && (
          <Text variant={900} fontWeight={300}>
            {text}
          </Text>
        )}
      </Box>
    </Box>
  )
}

export default PrestreamDateTime
