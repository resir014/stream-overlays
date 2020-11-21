import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'

import { layout, space, color, typography, variant } from 'styled-system'

import { TypographyProps } from './Typography'
import { typeScale } from '../../../utils'

export type TextProps = TypographyProps

/**
 * Text component provided as a styled component primitive.
 */
export const Text = styled<'span', TextProps>('span', { shouldForwardProp })`
  ${variant({
    prop: 'variant',
    variants: typeScale
  })}

  ${layout}
  ${space}
  ${color}
  ${typography}
`

Text.defaultProps = {
  as: 'span'
}

Text.displayName = 'Text'
