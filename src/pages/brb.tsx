import * as React from 'react'
import { NextPage } from 'next'

import OverlayRoot from 'components/overlay/OverlayRoot'
import PrestreamBlock from 'modules/prestream/PrestreamBlock'

import { colors } from 'styles/variables'

const BeRightBackPage: NextPage = () => {
  return (
    <OverlayRoot isTransparent>
      <PrestreamBlock
        heading="Please stand by..."
        backgroundColor={colors.purple}
        titleColor={colors.cyan}
      />
    </OverlayRoot>
  )
}

export default BeRightBackPage
