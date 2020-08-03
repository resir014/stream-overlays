import * as React from 'react'
import { css } from '@emotion/core'
import { NextPage } from 'next'

import LayoutRoot from 'components/layout/LayoutRoot'
import ContentBlock from 'components/stream-blocks/ContentBlock'

const EmptyBoxPage: NextPage = () => {
  return (
    <LayoutRoot isTransparent>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
          padding: 4px 8px;
        `}
      >
        <ContentBlock
          css={css`
            flex: 1 1 auto;
          `}
          hasShadow
        />
      </div>
    </LayoutRoot>
  )
}

export default EmptyBoxPage
