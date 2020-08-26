import * as React from 'react'
import { NextPage } from 'next'
import { css } from '@emotion/core'
import { DollarSign, Star, BarChart } from 'react-feather'

import OverlayRoot from 'components/overlay/OverlayRoot'
import ContentBlock from 'components/stream-blocks/ContentBlock'

interface FooterPageProps {
  errors?: Error['message']
}

const SideBlockPage: NextPage<FooterPageProps> = () => {
  return (
    <OverlayRoot isTransparent>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
          padding: 4px 8px;
        `}
      >
        <div
          css={css`
            margin-bottom: 8px;
          `}
        >
          <ContentBlock hasShadow>
            <div
              css={css`
                display: flex;
                align-items: center;
                height: 24px;
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
          <ContentBlock hasShadow>
            <div
              css={css`
                display: flex;
                align-items: center;
                height: 24px;
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
          <ContentBlock hasShadow>
            <div
              css={css`
                display: flex;
                align-items: center;
                height: 24px;
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
        <ContentBlock
          css={css`
            flex: 1 1 auto;
          `}
          hasShadow
        />
      </div>
    </OverlayRoot>
  )
}

export default SideBlockPage
