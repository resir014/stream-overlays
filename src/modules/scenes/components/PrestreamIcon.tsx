import { css } from '@emotion/react'
import { Box, BoxProps } from '@resir014/chungking-react'
import * as React from 'react'

type PrestreamIconProps = BoxProps

const PrestreamIcon: React.FC<PrestreamIconProps> = props => {
  return (
    <Box display="grid" gridTemplateColumns="1fr" gridTemplateRows="1fr 8px" {...props}>
      <Box backgroundColor="black">
        <img
          src="/static/resir014-logo.png"
          alt="resir014"
          css={css`
            margin: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          `}
        />
      </Box>
      <Box backgroundColor="blue.500" />
    </Box>
  )
}

export default PrestreamIcon
