import * as React from 'react'
import { NextPage } from 'next'
import { css } from '@emotion/core'
import { DollarSign, Star, BarChart } from 'react-feather'

import LayoutRoot from 'components/layout/LayoutRoot'
import ContentBlock from 'components/stream-blocks/ContentBlock'

interface FooterPageProps {
  errors?: Error['message']
}

const SideBlockPage: NextPage<FooterPageProps> = () => {
  return (
    <LayoutRoot isTransparent>
      <div
        css={css`
          margin-bottom: 8px;
        `}
      >
        <ContentBlock>
          <div
            css={css`
              display: flex;
              align-items: center;
              height: 30px;
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
        </ContentBlock>
      </div>
      <div
        css={css`
          display: grid;
          grid-template-columns: auto 156px;
          grid-gap: 8px;
          margin-bottom: 8px;
        `}
      >
        <ContentBlock>
          <div
            css={css`
              display: flex;
              align-items: center;
              height: 30px;
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
        </ContentBlock>
        <ContentBlock>
          <div
            css={css`
              display: flex;
              align-items: center;
              height: 30px;
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
        </ContentBlock>
      </div>
      <ContentBlock style={{ height: 280 }} />
    </LayoutRoot>
  )
}

export default SideBlockPage
