import * as React from 'react'
import { NextPage } from 'next'

import OverlayRoot from '~/components/overlay/OverlayRoot'
import EndScene from '~/modules/prestream/EndScene'

const BeRightBackScenePage: NextPage = () => {
  return (
    <OverlayRoot>
      <EndScene />
    </OverlayRoot>
  )
}

export default BeRightBackScenePage
