import * as React from 'react'
import { NextPage } from 'next'

import OverlayRoot from 'components/overlay/OverlayRoot'
import PrestreamBlock from 'modules/prestream/PrestreamBlock'

import { colors } from 'styles/variables'

const EndScreenPage: NextPage = () => {
  return (
    <OverlayRoot isTransparent>
      <PrestreamBlock
        heading={<>Stream ended. Thanks&nbsp;for&nbsp;watching!</>}
        backgroundColor={colors.red}
        titleColor={colors.orange}
      />
    </OverlayRoot>
  )
}

export default EndScreenPage
