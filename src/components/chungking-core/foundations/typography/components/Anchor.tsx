import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { Text, TextProps } from './Text'
import { colors, mediaQueries } from '../../../utils'

export type AnchorProps = TextProps & React.AnchorHTMLAttributes<HTMLAnchorElement>

const AnchorBase = css`
  color: ${colors.green30};
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

const AnchorRoot: React.FC<AnchorProps> = ({ children, className, style, ...rest }) => {
  return (
    <Text as="a" className={className} style={style} {...rest}>
      {children}
    </Text>
  )
}

/**
 * Anchor component provided as a styled component primitive.
 */
export const Anchor = styled(AnchorRoot)(AnchorBase)

Anchor.displayName = 'Anchor'
