import * as React from 'react'
import { NextPage } from 'next'

import OverlayRoot from '~/components/overlay/OverlayRoot'
import PrestreamBlock from '~/modules/prestream/PrestreamBlock'

const BeRightBackPage: NextPage = () => {
  return (
    <OverlayRoot isTransparent>
      <PrestreamBlock text="Please stand by..." variant="brb" />
    </OverlayRoot>
  )
}

export default BeRightBackPage
