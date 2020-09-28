import * as React from 'react'
import { NextPage } from 'next'

import OverlayRoot from '~/components/overlay/OverlayRoot'
import PrestreamBlock from '~/modules/prestream/PrestreamBlock'

import { colors } from '~/styles/variables'

const PrestreamPage: NextPage = () => {
  return (
    <OverlayRoot isTransparent>
      <PrestreamBlock
        heading="Stream starting soon..."
        titleColor={colors.green}
        backgroundColor={colors.ultramarine}
      />
    </OverlayRoot>
  )
}

export default PrestreamPage
