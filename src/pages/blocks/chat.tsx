import * as React from 'react'
import { NextPage } from 'next'

import LayoutRoot from 'components/layout/LayoutRoot'
import ContentBlock from 'components/stream-blocks/ContentBlock'

interface FooterPageProps {
  errors?: Error['message']
}

const ChatBlockPage: NextPage<FooterPageProps> = () => {
  return (
    <LayoutRoot isTransparent>
      <ContentBlock style={{ height: 240 }} title="Chat Box" />
    </LayoutRoot>
  )
}

export default ChatBlockPage
