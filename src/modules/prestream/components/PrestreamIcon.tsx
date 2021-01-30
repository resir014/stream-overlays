import { css } from '@emotion/react'
import { Box, BoxProps, colors } from '@resir014/chungking-react'
import * as React from 'react'
import { PrestreamVariants } from '~/interfaces/types'

interface PrestreamIconProps extends BoxProps {
  variant?: PrestreamVariants
}

const getBarColor = (variant?: PrestreamVariants) => {
  switch (variant) {
    case 'prestream': {
      return colors.blue[500]
    }
    case 'brb': {
      return colors.purple[500]
    }
    case 'end': {
      return colors.orange[500]
    }
    default: {
      return colors.grey[500]
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
      <Box backgroundColor={getBarColor(variant)} />
    </Box>
  )
}

export default PrestreamIcon
