import * as React from 'react'
import { NextPage } from 'next'
import { OverlayRoot } from '~/components/overlay'
import MatchmakingBlock from '~/modules/trackmania/matchmaking/MatchmakingBlock'

const TrackmaniaMMRBlock: NextPage = () => {
  return (
    <OverlayRoot>
      <MatchmakingBlock />
    </OverlayRoot>
  )
}

export default TrackmaniaMMRBlock
