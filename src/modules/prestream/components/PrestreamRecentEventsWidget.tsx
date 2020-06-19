import * as React from 'react'
import { css } from '@emotion/core'

import { fonts } from 'styles/variables'
import ContentBlock from 'components/stream-blocks/ContentBlock'

interface PrestreamRecentEventsWidgetProps {
  title: string
  textColor?: string
  backgroundColor?: string
}

const PrestreamRecentEventsWidget: React.FC<PrestreamRecentEventsWidgetProps> = ({
  title,
  backgroundColor,
  textColor
}) => {
  return (
    <ContentBlock
      hasShadow
      backgroundColor={backgroundColor}
      textColor={textColor}
      css={css`
        width: 100%;
        max-width: 640px;
        height: 60px;
        margin-top: 24px;
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
    </ContentBlock>
  )
}

export default PrestreamRecentEventsWidget
