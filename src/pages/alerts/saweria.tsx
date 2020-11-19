import * as React from 'react'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import OverlayRoot from '~/components/overlay/OverlayRoot'

const SaweriaWidgetBox = dynamic(() => import('~/modules/widgets/SaweriaWidget'), {
  ssr: false
})

const SaweriaAlerts: NextPage = () => {
  return (
    <OverlayRoot>
      <SaweriaWidgetBox />
    </OverlayRoot>
  )
}

export default SaweriaAlerts
