import * as React from 'react'
import dynamic from 'next/dynamic'

import {
  PrestreamRoot,
  PrestreamSection,
  PrestreamFooterBlock,
  PrestreamContentBlock,
  PrestreamChatWidget
} from './components'

interface PrestreamBlockProps {
  heading?: React.ReactNode
  titleColor?: string
  backgroundColor?: string
  textColor?: string
}

const PrestreamHeader = dynamic(() => import('./PrestreamHeader'))
const PrestreamDateTime = dynamic(() => import('./PrestreamDateTime'), {
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
          <PrestreamChatWidget backgroundColor={backgroundColor} textColor={textColor} />
          <PrestreamDateTime titleColor={titleColor} text={heading || 'Untitled'} />
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
