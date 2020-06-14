import * as React from 'react'
import { format } from 'date-fns'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import useClock from 'utils/useClock'
import { colors } from 'styles/variables'

interface PrestreamDateTimeProps {
  titleColor?: string
  text?: React.ReactNode
}

const TimestampText = styled('time')`
  margin: 0;
  margin-right: 4px;
  font-size: 44px;
  line-height: 48px;
  font-weight: 300;
  font-variant-numeric: tabular-nums;

  span {
    font-weight: 600;
  }
`

const TimestampTime = styled('span')<Pick<PrestreamDateTimeProps, 'titleColor'>>`
  display: block;
  margin: 0;
  font-size: 140px;
  line-height: 148px;
  color: ${props => props.titleColor || colors.white};
  font-weight: 600;
  font-variant-numeric: tabular-nums;
`

const PrestreamDateTime: React.FC<PrestreamDateTimeProps> = ({ titleColor, text }) => {
  const time = useClock()

  return (
    <div
      css={css`
        margin-right: 32px;
        text-align: right;
      `}
    >
      <TimestampText dateTime={time.toISOString()}>
        <span>{format(time, 'EEEE')}</span> {format(time, 'dd MMMM yyyy')}
      </TimestampText>
      <TimestampTime titleColor={titleColor}>{format(time, 'HH:mm:ss')}</TimestampTime>
      {text && <TimestampText>{text}</TimestampText>}
    </div>
  )
}

export default PrestreamDateTime
