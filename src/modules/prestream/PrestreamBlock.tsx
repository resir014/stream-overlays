import * as React from 'react'
import dynamic from 'next/dynamic'
import { css } from '@emotion/core'
import { format } from 'date-fns'

import welcomeSplashes from 'utils/welcomeSplashes'

import ContentBlock from 'components/stream-blocks/ContentBlock'

import BlockContent from 'components/layout/BlockContent'
import PrestreamRoot from 'components/prestream/PrestreamRoot'
import PrestreamSection from 'components/prestream/PrestreamSection'
import PrestreamLogo from 'components/prestream/PrestreamLogo'

interface PrestreamBlockProps {
  heading?: React.ReactNode
  title: string
  subheading?: string
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
  description,
  title,
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
      subtitle={description || 'No description given.'}
      splashes={splashes}
    >
      <BlockContent>
        <PrestreamSection>
          <ContentBlock
            hasShadow
            css={css`
              height: 640px;
            `}
            backgroundColor={backgroundColor}
            textColor={textColor}
          >
            <div
              css={css`
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 24px;
                flex: 1;
              `}
            >
              <PrestreamLogo />
              <PrestreamDateTime titleColor={titleColor} text={heading || 'Untitled'} />
            </div>
          </ContentBlock>
        </PrestreamSection>
      </BlockContent>
    </PrestreamRoot>
  )
}
