import * as React from 'react'
import { transparentize } from 'polished'
import { format } from 'date-fns'
import { css } from '@emotion/react'
import { Box, colors, Text } from '@resir014/chungking-react'

import useClock from '~/utils/useClock'
import { PrestreamVariants } from '~/interfaces/types'

interface PrestreamDateTimeProps {
  titleColor?: string
  text?: React.ReactNode
  variant?: PrestreamVariants
}

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

const PrestreamDateTime: React.FC<PrestreamDateTimeProps> = ({ titleColor, text, variant }) => {
  const time = useClock()

  return (
    <Box display="flex" alignItems="center" justifyContent="flex-end">
      <Box
        textAlign="right"
        boxShadow="double"
        px="xxl"
        py="lg"
        backgroundColor={transparentize(0.5, getColor(variant))}
      >
        <Text variant={800} fontWeight={300}>
          <Text as="strong" fontWeight={600}>
            {format(time, 'EEEE')}
          </Text>{' '}
          {format(time, 'dd MMMM yyyy')}
        </Text>
        <Text
          display="block"
          margin={0}
          fontSize="116px"
          lineHeight="124px"
          fontFamily="monospace"
          fontWeight={600}
          color={titleColor || 'white'}
          css={css`
            font-variant-numeric: tabular-nums;
          `}
        >
          {format(time, 'HH:mm:ss')}
        </Text>
        {text && (
          <Text variant={800} fontWeight={300}>
            {text}
          </Text>
        )}
      </Box>
    </Box>
  )
}

export default PrestreamDateTime
