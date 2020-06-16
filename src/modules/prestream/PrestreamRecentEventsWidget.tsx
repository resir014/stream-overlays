import * as React from 'react'
import { css } from '@emotion/core'
import { transparentize } from 'polished'

import { colors, fonts } from 'styles/variables'

interface PrestreamRecentEventsWidgetProps {
  title: string
}

const PrestreamRecentEventsWidget: React.FC<PrestreamRecentEventsWidgetProps> = ({ title }) => {
  return (
    <div
      css={css`
        display: inline-flex;
        align-items: center;
        width: 100%;
        max-width: 640px;
        height: 48px;
        margin-top: 8px;
        padding: 0 16px;
        background-color: ${transparentize(0.7, colors.black)};
        border-radius: 8px;
      `}
    >
      <div
        css={css`
          font-size: 16px;
          font-family: ${fonts.monospace};
          text-transform: uppercase;
        `}
      >
        {title}
      </div>
      <div
        css={css`
          flex: 1 1 auto;
        `}
      />
    </div>
  )
}

export default PrestreamRecentEventsWidget
