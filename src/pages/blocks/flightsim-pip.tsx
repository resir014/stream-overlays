import * as React from 'react'
import { NextPage } from 'next'

import OverlayRoot from 'components/overlay/OverlayRoot'
import ContentBlock from 'components/stream-blocks/ContentBlock'

interface FooterPageProps {
  errors?: Error['message']
}

const FlightsimPIPPage: NextPage<FooterPageProps> = () => {
  return (
    <OverlayRoot isTransparent>
      <ContentBlock style={{ height: 376 }} title="Picture-in-Picture" />
    </OverlayRoot>
  )
}

export default FlightsimPIPPage
