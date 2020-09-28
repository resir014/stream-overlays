import * as React from 'react'
import { NextPage } from 'next'

import { colors } from '~/components/chungking-core'
import OverlayRoot from '~/components/overlay/OverlayRoot'
import PrestreamBlock from '~/modules/prestream/PrestreamBlock'
import { extendedColors } from '~/styles/variables'

const BeRightBackPage: NextPage = () => {
  return (
    <OverlayRoot isTransparent>
      <PrestreamBlock
        heading="Please stand by..."
        backgroundColor={colors.purple30}
        titleColor={extendedColors.cyan}
      />
    </OverlayRoot>
  )
}

export default BeRightBackPage
