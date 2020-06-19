import * as React from 'react'
import { css } from '@emotion/core'

import ContentBlock from 'components/stream-blocks/ContentBlock'

interface PrestreamChatWidgetProps {
  textColor?: string
  backgroundColor?: string
}

const PrestreamChatWidget: React.FC<PrestreamChatWidgetProps> = ({
  textColor,
  backgroundColor
}) => {
  return (
    <ContentBlock
      hasShadow
      backgroundColor={backgroundColor}
      textColor={textColor}
      css={css`
        display: inline-block;
        width: 100%;
        max-width: 640px;
        height: 600px;
      `}
    />
  )
}

export default PrestreamChatWidget
