import { css } from '@emotion/core'
import * as React from 'react'
import { colors } from '~/styles/variables'
import BottomBarClockWrapper from './BottomBarClockWrapper'
import BottomBarEvents from './BottomBarEvents'

const BottomBar: React.FC = () => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-rows: 56px 40px 48px;
        grid-template-columns: auto 320px;
        grid-template-areas:
          'caption clock'
          'events clock'
          'footer footer';
        width: 100%;
        height: 100%;
        max-height: 144px;
      `}
    >
      <div
        css={css`
          display: block;
          grid-area: caption;
          background-color: #000;
        `}
      />
      <BottomBarEvents />
      <BottomBarClockWrapper />
      <div
        css={css`
          display: block;
          grid-area: footer;
          background-color: ${colors.black};
          border-top: 1px solid ${colors.grey90};
        `}
      />
    </div>
  )
}

export default BottomBar
