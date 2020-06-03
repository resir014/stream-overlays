import * as React from 'react'
import styled from '@emotion/styled'
import { AlertKinds } from 'interfaces/types'
import { colors } from 'styles/variables'
import { getAlertColor } from './alertUtils'

interface AlertMessageProps {
  className?: string
  style?: React.CSSProperties
  kind?: AlertKinds
  isUserMessage?: boolean
}

const Root = styled('div')<AlertMessageProps>`
  text-align: center;
  color: ${colors.white};
  font-size: ${props => (props.isUserMessage ? '24px' : '32px')};

  span {
    color: ${props => getAlertColor(props.kind)};
  }
`

const AlertMessage: React.FC<AlertMessageProps> = ({
  className,
  style,
  kind,
  isUserMessage,
  children
}) => {
  return (
    <Root className={className} style={style} kind={kind} isUserMessage={isUserMessage}>
      {children}
    </Root>
  )
}

AlertMessage.defaultProps = {
  kind: 'donation',
  isUserMessage: false
}

export default AlertMessage
