import * as React from 'react'
import styled from 'styled-components'
import { AlertKinds } from '../../interfaces/types'
import { getAlertColor } from './alertUtils'

interface AlertHeaderProps {
  className?: string
  style?: React.CSSProperties
  kind?: AlertKinds
}

const Root = styled('div')<AlertHeaderProps>`
  padding: 10px 20px;
  background-color: ${props => getAlertColor(props.kind)};
`

const Heading = styled('h2')`
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.25px;
  color: #fff;
  text-shadow: 0px 0px 1px #000, 0px 0px 2px #000, 0px 0px 3px #000, 0px 0px 4px #000,
    0px 0px 5px #000;
`

const AlertHeader: React.FC<AlertHeaderProps> = ({ className, style, kind, children }) => {
  return (
    <Root className={className} style={style} kind={kind}>
      <Heading>{children}</Heading>
    </Root>
  )
}

AlertHeader.defaultProps = {
  kind: 'donation'
}

export default AlertHeader
