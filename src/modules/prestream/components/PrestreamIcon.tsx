import { css } from '@emotion/react'
import { Box, BoxProps, colors } from '@resir014/chungking-react'
import * as React from 'react'
import { PrestreamVariants } from '~/interfaces/types'

interface PrestreamIconProps extends BoxProps {
  variant?: PrestreamVariants
}

const getColor = (variant?: PrestreamVariants) => {
  switch (variant) {
    case 'prestream': {
      return colors.blue[300]
    }
    case 'brb': {
      return colors.purple[300]
    }
    case 'end': {
      return colors.orange[300]
    }
    default: {
      return colors.grey[300]
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
