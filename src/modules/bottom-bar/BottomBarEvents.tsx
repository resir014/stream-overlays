import { css } from '@emotion/core'
import * as React from 'react'
import { BarChart, DollarSign, Star } from 'react-feather'
import { colors } from 'styles/variables'

const BottomBarEvents: React.FC = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        grid-area: events;
        padding-left: 48px;
        padding-right: 16px;
        background-color: ${colors.black};
        color: ${colors.white};
      `}
    >
      <div
        css={css`
          display: flex;
          flex: 1 1 auto;
          align-items: center;
          height: 24px;
          padding: 0 12px;
          border-left: 2px solid ${colors.blue};
        `}
      >
        <DollarSign
          css={css`
            margin-right: 16px;
          `}
        />
        <div
          css={css`
            flex: 1 1 auto;
            height: 24px;
          `}
        />
      </div>
      <div
        css={css`
          display: flex;
          flex: 1 1 auto;
          align-items: center;
          height: 24px;
          padding: 0 12px;
          border-left: 2px solid ${colors.orange};
        `}
      >
        <Star
          css={css`
            margin-right: 16px;
          `}
        />
        <div
          css={css`
            flex: 1 1 auto;
            height: 24px;
          `}
        />
      </div>
      <div
        css={css`
          display: flex;
          flex: 1 1 auto;
          align-items: center;
          height: 24px;
          padding: 0 12px;
          border-left: 2px solid ${colors.green};
        `}
      >
        <BarChart
          css={css`
            margin-right: 16px;
          `}
        />
        <div
          css={css`
            flex: 1 1 auto;
            height: 24px;
          `}
        />
      </div>
    </div>
  )
}

export default BottomBarEvents
