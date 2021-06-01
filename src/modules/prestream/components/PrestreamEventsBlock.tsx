import { css } from '@emotion/react'
import { Box, BoxProps, theme } from '@resir014/chungking-react'
import { transparentize } from 'polished'
import * as React from 'react'

type PrestreamEventsBlockProps = BoxProps

const PrestreamEventsBlock: React.FC<PrestreamEventsBlockProps> = ({ ...rest }) => {
  return (
    <Box
      position="relative"
      backgroundColor={transparentize(0.5, theme.colors.black)}
      overflow="hidden"
      {...rest}
      css={css`
        &::after {
          position: absolute;
          content: '';
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          opacity: 0.2;
          background-image: url('/static/topography.svg');
          background-repeat: repeat;
          background-size: cover;
        }
      `}
    />
  )
}

export default PrestreamEventsBlock
