import * as React from 'react'
import { NextPage } from 'next'

import OverlayRoot from '~/components/overlay/OverlayRoot'
import PrestreamBlock from '~/modules/prestream/PrestreamBlock'

const PrestreamPage: NextPage = () => {
  return (
    <OverlayRoot isTransparent>
      <PrestreamBlock text="Stream starting soon..." variant="prestream" />
    </OverlayRoot>
  )
}

export default PrestreamPage
