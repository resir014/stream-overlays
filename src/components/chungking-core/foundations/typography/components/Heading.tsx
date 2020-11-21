import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'

import { layout, space, color, typography, variant as styledSystemVariant } from 'styled-system'

import { typeScale } from '../../../utils'

import { TypographyProps } from './Typography'

export type HeadingProps = TypographyProps

/**
 * Heading component provided as a styled component primitive.
 */
const Heading = styled<'span', HeadingProps>('span', { shouldForwardProp })`
  ${styledSystemVariant({
    prop: 'variant',
    variants: typeScale
  })}

  ${layout}
  ${space}
  ${color}
  ${typography}
`

Heading.defaultProps = {
  as: 'h2',
  fontWeight: 600,
  variant: 700
}

Heading.displayName = 'Heading'

export default Heading
