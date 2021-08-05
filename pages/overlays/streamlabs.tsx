import { NextPage } from 'next'
import * as React from 'react'
import { OverlayRoot } from '~/components/overlay'
import StreamlabsAlerts from '~/modules/alerts-v2/StreamlabsAlerts'

const AlertsOverlayPage: NextPage = () => {
  return (
    <OverlayRoot>
      <StreamlabsAlerts />
    </OverlayRoot>
  )
}

export default AlertsOverlayPage
