import * as React from 'react'
import { css } from '@emotion/core'
import useClock from 'utils/useClock'
import { colors } from 'styles/variables'
import { format } from 'date-fns'

const BottomBarClock: React.FC = () => {
  const time = useClock()

  return (
    <div
      css={css`
        display: block;
        padding: 0 16px;
        text-align: right;
        border-right: 4px solid ${colors.blue};
      `}
    >
      <span
        css={css`
          display: block;
          color: ${colors.white};
          font-size: 20px;
          line-height: 24px;
          font-variant-numeric: tabular-nums;
        `}
      >
        <strong>{format(time, 'ccc')}</strong> {format(time, 'dd MMM yyyy')}
      </span>
      <span
        css={css`
          display: block;
          color: ${colors.white};
          margin-top: 8px;
          font-size: 32px;
          line-height: 36px;
          font-weight: 600;
          font-variant-numeric: tabular-nums;
        `}
      >
        {format(time, 'HH:mm:ss')}
      </span>
    </div>
  )
}

export default BottomBarClock
