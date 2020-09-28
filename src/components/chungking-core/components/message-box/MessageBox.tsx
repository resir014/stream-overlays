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
  border-color: ${colors.blue30};
  background-color: ${transparentize(0.75, colors.blue30)};

  a {
    color: ${colors.green30};
  }
`

const WarningStyles = css`
  border-color: ${colors.red30};
  background-color: ${transparentize(0.75, colors.red30)};

  a {
    color: ${colors.orange30};
  }
`

const Root = styled(Box)<MessageBoxProps>`
  padding: ${space.md}px;
  border: 2px solid transparent;
  border-radius: 4px;

  a {
    color: ${colors.green30};
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
