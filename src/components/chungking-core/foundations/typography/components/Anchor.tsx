import * as React from 'react'
import { css } from '@emotion/core'

import { Text, TextProps } from './Text'
import { colors, mediaQueries } from '../../../utils'

export type AnchorProps = TextProps & React.AnchorHTMLAttributes<HTMLAnchorElement>

const AnchorBase = css`
  color: ${colors.turquoise[400]};
  text-decoration: underline;

  strong {
    color: inherit;
  }

  ${mediaQueries.md} {
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`

/**
 * Anchor component provided as a styled component primitive.
 */
const Anchor: React.ForwardRefRenderFunction<HTMLAnchorElement, AnchorProps> = ({ children, className, style, ...rest }, ref) => {
  return (
    <Text as="a" ref={ref} className={className} style={style} css={AnchorBase} {...rest}>
      {children}
    </Text>
  )
}

Anchor.displayName = 'Anchor'

export default React.forwardRef(Anchor)
