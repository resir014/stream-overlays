import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { Box, BoxProps } from '../../foundations'
import { colors } from '../../utils'

export interface BadgeProps extends BoxProps {
  className?: string
  style?: React.CSSProperties
  variant?: 'grey' | 'white'
  children?: React.ReactNode
}

const WhiteColorStyles = css`
  color: #202340;
  background-color: #d7d7db;
`

const GreyColorStyles = css`
  color: ${colors.grey[50]};
  background-color: ${colors.grey[800]};
`

const Root = styled(Box)`
  padding: 0 4px;
  font-size: 14px;
  line-height: 20px;
  border: 1px solid transparent;
  border-radius: 3px;

  ${(props) => props.variant === 'white' && WhiteColorStyles}
  ${(props) => props.variant === 'grey' && GreyColorStyles}
`

const Badge: React.FC<BadgeProps> = ({ children, className, style, ...rest }) => {
  return (
    <Root as="span" display="inline-flex" alignItems="center" className={className} style={style} {...rest}>
      {children}
    </Root>
  )
}

Badge.defaultProps = {
  className: undefined,
  style: undefined,
  variant: 'white'
}

export default Badge
