import * as React from 'react'
import { format } from 'date-fns'
import styled from '@emotion/styled'

import useClock from 'utils/useClock'
import { colors } from 'styles/variables'

interface PrestreamDateTimeProps {
  titleColor?: string
}

const HeaderDate = styled('p')`
  margin: 0;
  margin-right: 4px;
  font-size: 28px;
  line-height: 1.5;
  font-weight: 300;
  font-variant-numeric: tabular-nums;

  span {
    font-weight: 600;
  }
`

const HeaderTime = styled('span')<Pick<PrestreamDateTimeProps, 'titleColor'>>`
  display: block;
  margin: 0;
  font-size: 96px;
  line-height: 104px;
  color: ${props => props.titleColor || colors.white};
  font-weight: 600;
`

const PrestreamDateTime: React.FC<PrestreamDateTimeProps> = ({ titleColor }) => {
  const time = useClock()

  return (
    <>
      <HeaderDate>
        <span>{format(time, 'EEEE')}</span> {format(time, 'dd MMMM yyyy')}
      </HeaderDate>
      <HeaderTime titleColor={titleColor}>{format(time, 'HH:mm:ss')}</HeaderTime>
    </>
  )
}

export default PrestreamDateTime
