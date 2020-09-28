import OverlayRoot from '~/components/overlay/OverlayRoot'
import BottomBar from '~/modules/bottom-bar/BottomBar'
import { NextPage } from 'next'
import * as React from 'react'

const BottomBarPage: NextPage = () => {
  return (
    <OverlayRoot isTransparent>
      <BottomBar />
    </OverlayRoot>
  )
}

export default BottomBarPage
