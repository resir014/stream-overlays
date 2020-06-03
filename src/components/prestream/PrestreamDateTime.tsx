import * as React from 'react'
import { format } from 'date-fns'
import styled from '@emotion/styled'

import useClock from 'utils/useClock'

const HeaderDate = styled('p')`
  margin: 0;
  font-size: 24px;
  line-height: 32px;
  font-weight: 400;

  span {
    margin-right: 8px;
    font-weight: 600;
  }
`

const HeaderTime = styled('p')`
  margin: 0;
  font-size: 24px;
  line-height: 32px;
  font-weight: 400;
  font-variant-numeric: tabular-nums;
`

const PrestreamDateTime = () => {
  const time = useClock()

  return (
    <>
      <HeaderDate>
        <span>{format(time, 'EEEE')}</span> {format(time, 'dd MMMM yyyy')}
      </HeaderDate>
      <HeaderTime>{format(time, 'HH:mm:ss')}</HeaderTime>
    </>
  )
}

export default PrestreamDateTime
