import * as React from 'react'
import styled from '@emotion/styled'
import { variant } from 'styled-system'
import shouldForwardProp from '@styled-system/should-forward-prop'

import { Box, BoxProps } from '../../foundations'

export type CardElevation = 'single' | 'double'

export interface CardProps extends BoxProps {
  elevation?: CardElevation
  children?: React.ReactNode
}

const shouldReallyForwardProp = (propName: string) => {
  return shouldForwardProp(propName) && propName !== 'elevation'
}

const Root = styled(Box, { shouldForwardProp: shouldReallyForwardProp })<CardProps>`
  ${variant({
    prop: 'elevation',
    variants: {
      single: {
        boxShadow: 'single'
      },
      double: {
        boxShadow: 'double'
      }
    }
  })}
`

const Card: React.FC<CardProps> = ({ className, style, children, elevation = 'single', ...rest }) => {
  return (
    <Root className={className} style={style} elevation={elevation} borderRadius={8} {...rest}>
      {children}
    </Root>
  )
}

export default Card
