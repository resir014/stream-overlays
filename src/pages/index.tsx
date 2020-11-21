import * as React from 'react'

import HomeBlock from '~/modules/home/HomeBlock'
import OverlayRoot from '~/components/overlay/OverlayRoot'

export default function IndexPage() {
  return (
    <OverlayRoot>
      <HomeBlock />
    </OverlayRoot>
  )
}
