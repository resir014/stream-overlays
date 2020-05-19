import * as React from 'react'
import { NextPage } from 'next'

import LayoutRoot from 'components/layout/LayoutRoot'
import ContentBlock from 'components/stream-blocks/ContentBlock'

interface FooterPageProps {
  errors?: Error['message']
}

const EventsBlockPage: NextPage<FooterPageProps> = () => {
  return (
    <LayoutRoot isTransparent>
      <ContentBlock style={{ height: 240 }} title="Events" />
    </LayoutRoot>
  )
}

export default EventsBlockPage
