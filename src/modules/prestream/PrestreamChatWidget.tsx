import * as React from 'react'
import { css } from '@emotion/core'
import { transparentize } from 'polished'

import { colors } from 'styles/variables'

const PrestreamChatWidget: React.FC = () => {
  return (
    <div
      css={css`
        display: inline-block;
        width: 100%;
        max-width: 640px;
        height: 480px;
        background-color: ${transparentize(0.7, colors.black)};
        border-radius: 8px;
      `}
    />
  )
}

export default PrestreamChatWidget
