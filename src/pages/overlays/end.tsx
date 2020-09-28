import * as React from 'react'
import { NextPage } from 'next'

import OverlayRoot from '~/components/overlay/OverlayRoot'
import PrestreamBlock from '~/modules/prestream/PrestreamBlock'
import { colors } from '~/components/chungking-core'

const EndScreenPage: NextPage = () => {
  return (
    <OverlayRoot isTransparent>
      <PrestreamBlock
        heading={<>Stream ended. Thanks&nbsp;for&nbsp;watching!</>}
        backgroundColor={colors.red30}
        titleColor={colors.orange30}
      />
    </OverlayRoot>
  )
}

export default EndScreenPage
