import * as React from 'react'
import { NextPage } from 'next'

import OverlayRoot from '~/components/overlay/OverlayRoot'
import BeRightBackScene from '~/modules/scenes/BeRightBackScene'

const BeRightBackScenePage: NextPage = () => {
  return (
    <OverlayRoot>
      <BeRightBackScene />
    </OverlayRoot>
  )
}

export default BeRightBackScenePage
