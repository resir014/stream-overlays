import * as React from 'react'
import { NextPage } from 'next'

import OverlayRoot from '~/components/overlay/OverlayRoot'
import PrestreamBlock from '~/modules/prestream/PrestreamBlock'
import { colors } from '~/components/chungking-core'

const PrestreamPage: NextPage = () => {
  return (
    <OverlayRoot isTransparent>
      <PrestreamBlock
        heading="Stream starting soon..."
        titleColor={colors.green30}
        backgroundColor={colors.ultramarine30}
      />
    </OverlayRoot>
  )
}

export default PrestreamPage
