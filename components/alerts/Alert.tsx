import * as React from 'react'
import styled from '@emotion/styled'

import { AlertKinds } from '~/interfaces/types'

import AlertHeader from './AlertHeader'
import AlertText from './AlertText'
import AlertMessage from './AlertMessage'
import { getAlertHeader } from './alertUtils'

interface AlertProps {
  className?: string
  style?: React.CSSProperties
  kind?: AlertKinds
  donatee: string
  amount: number
  message: string
}

const Root = styled('div')`
  display: block;
  width: 780px;
  margin: 8px;
  background-color: #2d2d34;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 8px 0px;
  text-align: center;
  overflow: hidden;
`

const Alert: React.FC<AlertProps> = ({ className, style, kind, donatee, amount, message }) => {
  const formatCurrency = (raw: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(raw)
  }

  return (
    <Root className={className} style={style}>
      <AlertHeader>{getAlertHeader(kind)}</AlertHeader>
      <AlertText>
        <AlertMessage>
          <span>{donatee}</span> donated <span>{formatCurrency(amount)}</span>!
        </AlertMessage>
        <AlertMessage isUserMessage>{message}</AlertMessage>
      </AlertText>
    </Root>
  )
}

Alert.defaultProps = {
  kind: 'donation'
}

export default Alert
