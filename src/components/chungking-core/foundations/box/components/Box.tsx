import * as React from 'react'
import styled from '@emotion/styled'
import {
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps,
  position,
  PositionProps,
  grid,
  GridProps,
  space,
  SpaceProps,
  background,
  BackgroundProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
  border,
  BorderProps,
  shadow,
  ShadowProps
} from 'styled-system'
import shouldForwardProp from '@styled-system/should-forward-prop'
import { Color } from '../../../Theme'

export interface BoxProps
  extends LayoutProps,
    FlexboxProps,
    PositionProps,
    GridProps,
    SpaceProps,
    BackgroundProps,
    ColorProps,
    TypographyProps,
    BorderProps,
    ShadowProps {
  /** Additional CSS classes to add to the component. */
  className?: string
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties
  /** Override color props */
  color?: Color | string
}

/**
 * Box is a view with all styled-system hooks added to it. You can use it as a
 * base component for all display elements.
 */
export const Box = styled<'div', BoxProps>('div', {
  shouldForwardProp: (propName) => shouldForwardProp(propName) && propName !== 'spacing'
})`
  ${layout}
  ${flexbox}
  ${position}
  ${grid}
  ${space}
  ${background}
  ${color}
  ${typography}
  ${border}
  ${shadow}
`

Box.displayName = 'Box'
