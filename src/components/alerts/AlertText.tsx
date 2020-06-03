import * as React from 'react'
import styled from '@emotion/styled'
import { AlertKinds } from 'interfaces/types'

interface AlertTextProps {
  className?: string
  style?: React.CSSProperties
  kind?: AlertKinds
}

const Root = styled('div')<AlertTextProps>`
  text-align: center;
`

const Inner = styled('div')`
  display: block !important;
  padding: 20px;
  text-shadow: 0px 0px 1px #000, 0px 0px 2px #000, 0px 0px 3px #000, 0px 0px 4px #000,
    0px 0px 5px #000;
`

const AlertText: React.FC<AlertTextProps> = ({ className, style, kind, children }) => {
  return (
    <Root className={className} style={style} kind={kind}>
      <Inner>{children}</Inner>
    </Root>
  )
}

export default AlertText
