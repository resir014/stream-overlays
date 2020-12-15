import * as React from 'react'
import styled from '@emotion/styled'
import { variant as styledSystemVariant } from 'styled-system'
import { transparentize } from 'polished'

import { Box, colors } from '@resir014/chungking-react'
import { PrestreamVariants } from '~/interfaces/types'

const StyledBox = styled(Box)`
  ${styledSystemVariant({
    variants: {
      prestream: {
        borderLeftColor: 'ultramarine.500'
      },
      brb: {
        borderLeftColor: 'purple.500'
      },
      end: {
        borderLeftColor: 'orange.400'
      }
    }
  })}
`

const getColor = (variant?: PrestreamVariants) => {
  switch (variant) {
    case 'prestream': {
      return colors.ultramarine[500]
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

interface PrestreamChatWidgetProps {
  variant?: PrestreamVariants
}

const PrestreamChatWidget: React.FC<PrestreamChatWidgetProps> = ({ variant }) => {
  return (
    <Box display="flex" alignItems="center">
      <StyledBox
        display="block"
        width="100%"
        maxWidth={640}
        height={600}
        boxShadow="single"
        backgroundColor={transparentize(0.75, getColor(variant))}
        borderLeft="8px solid"
        variant={variant}
      />
    </Box>
  )
}

PrestreamChatWidget.defaultProps = {
  variant: 'prestream'
}

export default PrestreamChatWidget
