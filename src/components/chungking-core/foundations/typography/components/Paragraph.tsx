import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'

import { layout, space as styledSpace, color, typography, variant } from 'styled-system'

import { colors, paragraphScale } from '../../../utils'
import { TypographyProps } from './Typography'

export type ParagraphProps = TypographyProps

/**
 * Heading component provided as a styled component primitive.
 */
export const Paragraph = styled<'p', ParagraphProps>('p', {
  shouldForwardProp
})`
  a {
    color: ${colors.turquoise[400]};
  }

  ${variant({
    prop: 'variant',
    variants: paragraphScale
  })}

  ${layout}
  ${styledSpace}
  ${color}
  ${typography}
`

Paragraph.defaultProps = {
  as: 'p',
  variant: 400
}

Paragraph.displayName = 'Heading'
