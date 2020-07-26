import * as React from 'react'
import { NextPage } from 'next'

import LayoutRoot from 'components/layout/LayoutRoot'
import ContentBlock from 'components/stream-blocks/ContentBlock'

interface FooterPageProps {
  errors?: Error['message']
}

const FlightsimPIPPage: NextPage<FooterPageProps> = () => {
  return (
    <LayoutRoot isTransparent>
      <ContentBlock style={{ height: 376 }} title="Pitcure-in-Picture" />
    </LayoutRoot>
  )
}

export default FlightsimPIPPage
