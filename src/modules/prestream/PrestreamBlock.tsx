import * as React from 'react'
import dynamic from 'next/dynamic'
import { PrestreamVariants } from '~/interfaces/types'

import {
  PrestreamRoot,
  PrestreamSection,
  PrestreamContentBlock,
  PrestreamChatWidget
} from './components'
import BottomBar from '../bottom-bar/BottomBar'

interface PrestreamBlockProps {
  text?: React.ReactNode
  variant?: PrestreamVariants
}

const PrestreamHeader = dynamic(() => import('./PrestreamHeader'))
const PrestreamDateTime = dynamic(() => import('./PrestreamDateTime'), {
  ssr: false
})

export default function PrestreamBlock({ text, variant }: PrestreamBlockProps) {
  return (
    <PrestreamRoot>
      <PrestreamHeader />
      <PrestreamContentBlock>
        <PrestreamSection>
          <PrestreamChatWidget variant={variant} />
          <PrestreamDateTime text={text} />
        </PrestreamSection>
      </PrestreamContentBlock>
      <BottomBar variant="prestream" />
    </PrestreamRoot>
  )
}

PrestreamBlock.defaultProps = {
  text: undefined,
  variant: 'prestream'
}
