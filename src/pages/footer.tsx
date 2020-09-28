import * as React from 'react'
import { NextPage } from 'next'
import OverlayRoot from '~/components/overlay/OverlayRoot'
import FooterWidget from '~/modules/widgets/FooterWidget'

interface FooterPageProps {
  errors?: Error['message']
}

const FooterPage: NextPage<FooterPageProps> = () => {
  return (
    <OverlayRoot isTransparent>
      <FooterWidget hasLabels />
    </OverlayRoot>
  )
}

export default FooterPage
