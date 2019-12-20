import * as React from 'react'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import LayoutRoot from '../components/layout/LayoutRoot'

const SaweriaWidgetBox = dynamic(() => import('../components/alerts/SaweriaWidgetBox'), {
  ssr: false
})

const SaweriaAlerts: NextPage = () => {
  return (
    <LayoutRoot isGreenScreen>
      <SaweriaWidgetBox />
    </LayoutRoot>
  )
}

export default SaweriaAlerts
