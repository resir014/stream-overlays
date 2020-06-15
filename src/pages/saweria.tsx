import * as React from 'react'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import LayoutRoot from 'components/layout/LayoutRoot'

const SaweriaWidgetBox = dynamic(() => import('modules/widgets/SaweriaWidgetBox'), {
  ssr: false
})

const SaweriaAlerts: NextPage = () => {
  return (
    <LayoutRoot isTransparent>
      <SaweriaWidgetBox />
    </LayoutRoot>
  )
}

export default SaweriaAlerts
