import { NextPage } from 'next'
import * as React from 'react'
import OverlayRoot from '~/components/overlay/OverlayRoot'
import BottomBar from '~/modules/bottom-bar/BottomBar'

const BottomBarPage: NextPage = () => {
  return (
    <OverlayRoot isTransparent>
      <BottomBar />
    </OverlayRoot>
  )
}

export default BottomBarPage
