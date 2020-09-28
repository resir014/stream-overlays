import * as React from 'react'
import { NextPage } from 'next'
import OverlayRoot from '~/components/overlay/OverlayRoot'
import HeaderWidget from '~/modules/widgets/HeaderWidget'

const HeaderPage: NextPage = () => {
  return (
    <OverlayRoot isTransparent>
      <HeaderWidget />
    </OverlayRoot>
  )
}

export default HeaderPage
