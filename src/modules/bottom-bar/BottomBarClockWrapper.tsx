import { css } from '@emotion/core'
import * as React from 'react'
import dynamic from 'next/dynamic'
import { colors } from 'styles/variables'

const BottomBarClock = dynamic(() => import('./BottomBarClock'), {
  ssr: false
})

const BottomBarClockWrapper: React.FC = () => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: flex-end;
        grid-area: clock;
        padding: 8px 48px;
        background-color: ${colors.black};
      `}
    >
      <BottomBarClock />
    </div>
  )
}

export default BottomBarClockWrapper
