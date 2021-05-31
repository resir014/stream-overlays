import { css } from '@emotion/react'
import { Box, BoxProps, theme } from '@resir014/chungking-react'
import * as React from 'react'
import { PrestreamVariants } from '~/interfaces/types'

interface PrestreamIconProps extends BoxProps {
  variant?: PrestreamVariants
}

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

const PrestreamIcon: React.FC<PrestreamIconProps> = ({ variant, ...rest }) => {
  return (
    <Box display="grid" gridTemplateColumns="1fr" gridTemplateRows="1fr 8px" {...rest}>
      <Box backgroundColor="black">
        <img
          src="/static/resir014-logo.png"
          alt="resir014"
          css={css`
            margin: 0;
            width: 128px;
            height: 120px;
            object-fit: cover;
          `}
        />
      </Box>
      <Box backgroundColor={getColor(variant)} />
    </Box>
  )
}

export default PrestreamIcon
