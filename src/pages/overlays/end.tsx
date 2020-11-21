import * as React from 'react'
import { NextPage } from 'next'

import OverlayRoot from '~/components/overlay/OverlayRoot'
import PrestreamBlock from '~/modules/prestream/PrestreamBlock'

const EndScreenPage: NextPage = () => {
  return (
    <OverlayRoot>
      <PrestreamBlock text={<>Stream ended. Thanks&nbsp;for&nbsp;watching!</>} variant="end" />
    </OverlayRoot>
  )
}

export default EndScreenPage
