import * as React from 'react'
import dynamic from 'next/dynamic'
import { css } from '@emotion/core'

import PrestreamRoot from 'components/prestream/PrestreamRoot'
import PrestreamHeader from 'components/prestream/PrestreamHeader'
import PrestreamSection from 'components/prestream/PrestreamSection'
import PrestreamFooterBlock from 'components/prestream/PrestreamFooterBlock'

import PrestreamContentBlock from './components/PrestreamContentBlock'
import PrestreamChatWidget from './components/PrestreamChatWidget'

interface PrestreamBlockProps {
  heading?: React.ReactNode
  titleColor?: string
  backgroundColor?: string
  textColor?: string
}

const PrestreamDateTime = dynamic(() => import('components/prestream/PrestreamDateTime'), {
  ssr: false
})

export default function PrestreamBlock({
  heading,
  titleColor,
  backgroundColor,
  textColor
}: PrestreamBlockProps) {
  return (
    <PrestreamRoot>
      <PrestreamHeader />
      <PrestreamContentBlock>
        <PrestreamSection>
          <div
            css={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              height: 640px;
            `}
          >
            <div
              css={css`
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 24px;
                flex: 1;
              `}
            >
              <div
                css={css`
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                `}
              >
                <PrestreamChatWidget backgroundColor={backgroundColor} textColor={textColor} />
              </div>
              <div
                css={css`
                  display: flex;
                  flex-direction: column;
                  align-items: flex-end;
                  justify-content: center;
                `}
              >
                <PrestreamDateTime titleColor={titleColor} text={heading || 'Untitled'} />
              </div>
            </div>
          </div>
        </PrestreamSection>
      </PrestreamContentBlock>
      <PrestreamFooterBlock />
    </PrestreamRoot>
  )
}

PrestreamBlock.defaultProps = {
  heading: undefined,
  titleColor: undefined,
  backgroundColor: undefined,
  textColor: undefined
}
