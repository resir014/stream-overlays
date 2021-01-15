import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import * as React from 'react'
import { OverlayRoot } from '~/components/overlay'

const SaweriaAlerts = dynamic(() => import('~/modules/alerts-v2/SaweriaAlerts'), { ssr: false })

const SaweriaOverlayPage: NextPage = () => {
  return (
    <OverlayRoot>
      <SaweriaAlerts />
    </OverlayRoot>
  )
}

export default SaweriaOverlayPage
