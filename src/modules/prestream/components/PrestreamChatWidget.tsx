import * as React from 'react'
import styled from '@emotion/styled'
import { variant as styledSystemVariant } from 'styled-system'
import { transparentize } from 'polished'

import { Box, colors } from '~/components/chungking-core'
import { PrestreamVariants } from '~/interfaces/types'

const StyledBox = styled(Box)`
  ${styledSystemVariant({
    variants: {
      prestream: {
        borderLeftColor: 'ultramarine30'
      },
      brb: {
        borderLeftColor: 'purple30'
      },
      end: {
        borderLeftColor: 'orange30'
      }
    }
  })}
`

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
        boxShadow="double"
        backgroundColor={transparentize(0.5, colors.grey90)}
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
