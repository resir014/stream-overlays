import * as React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { colors, space } from '../../utils'
import { Box, BoxProps } from '../../foundations'

export interface MessageBoxProps extends BoxProps {
  className?: string
  variant?: 'default' | 'warning'
  children?: React.ReactNode
}

const DefaultStyles = css`
  border-color: ${colors.blue[500]};
  background-color: ${transparentize(0.75, colors.blue[500])};

  a {
    color: ${colors.turquoise[400]};
  }
`

const WarningStyles = css`
  border-color: ${colors.red[500]};
  background-color: ${transparentize(0.75, colors.red[500])};

  a {
    color: ${colors.orange[400]};
  }
`

const Root = styled(Box)<MessageBoxProps>`
  padding: ${space.md}px;
  border: 2px solid transparent;
  border-radius: 4px;

  a {
    color: ${colors.turquoise[400]};
  }

  ${(props) => props.variant === 'default' && DefaultStyles}
  ${(props) => props.variant === 'warning' && WarningStyles}
`

const MessageBox: React.FC<MessageBoxProps> = ({ className, children, ...rest }) => (
  <Root className={className} boxShadow="single" {...rest}>
    {children}
  </Root>
)

MessageBox.defaultProps = {
  className: undefined,
  variant: 'default'
}

export default MessageBox
