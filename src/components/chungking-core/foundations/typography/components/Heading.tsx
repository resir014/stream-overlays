import * as React from 'react'
import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'

import { layout, space, color, typography, variant } from 'styled-system'

import { typeScale } from '../../../utils'

import { TypographyProps } from './Typography'

export type HeadingProps = TypographyProps

/**
 * This is a base `Text` element to handle typography elements.
 */
const StyledText = styled<'span', HeadingProps>('span', { shouldForwardProp })`
  ${variant({
    prop: 'variant',
    variants: typeScale
  })}

  ${layout}
  ${space}
  ${color}
  ${typography}
`

/**
 * Heading component provided as a styled component primitive.
 */
export const Heading: React.FC<HeadingProps> = ({ children, as, ...rest }) => (
  <StyledText as={as} {...rest}>
    {children}
  </StyledText>
)

Heading.defaultProps = {
  as: 'h2',
  fontWeight: 600,
  variant: 700
}

Heading.displayName = 'Heading'
