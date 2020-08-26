import * as React from 'react'
import dynamic from 'next/dynamic'
import { css } from '@emotion/core'
import { format } from 'date-fns'

import welcomeSplashes from 'utils/welcomeSplashes'

import PrestreamRoot from 'components/prestream/PrestreamRoot'
import PrestreamSection from 'components/prestream/PrestreamSection'

import PrestreamContentBlock from './components/PrestreamContentBlock'
import PrestreamChatWidget from './components/PrestreamChatWidget'

interface PrestreamBlockProps {
  heading?: React.ReactNode
  title?: string
  date?: string
  description?: string
  titleColor?: string
  backgroundColor?: string
  textColor?: string
  splashes?: string[]
}

const PrestreamDateTime = dynamic(() => import('components/prestream/PrestreamDateTime'), {
  ssr: false
})

export default function PrestreamBlock({
  heading,
  description = 'No description given.',
  title = 'Untitled Stream',
  date,
  titleColor,
  backgroundColor,
  textColor,
  splashes = welcomeSplashes
}: PrestreamBlockProps) {
  return (
    <PrestreamRoot
      title={title}
      date={date ? format(Date.parse(date), 'yyyy.MM.dd') : undefined}
      subtitle={description}
      splashes={splashes}
    >
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
    </PrestreamRoot>
  )
}

PrestreamBlock.defaultProps = {
  heading: undefined,
  description: 'No description given.',
  title: 'Untitled Stream',
  date: undefined,
  titleColor: undefined,
  backgroundColor: undefined,
  textColor: undefined,
  splashes: welcomeSplashes
}
