import { css } from '@emotion/react'
import { Box } from '@resir014/chungking-react'
import * as React from 'react'
import MatchmakingDataItem from './MatchmakingDataItem'
import matchmakingMap from './matchmakingMap'
import useMatchmakingData from './useMatchmakingData'

const MatchmakingBlock: React.FC = () => {
  const { results } = useMatchmakingData('15d23e07-07ac-4093-bbfd-28d393daf0c0', {
    apiUrl: '/api/trackmania/matchmaking-mmr'
  })

  const currentRank = React.useMemo(() => {
    if (results) {
      const { score } = results[0]
      const rank = matchmakingMap.filter(table => table.mmr <= score).pop()
      return rank?.name
    }

    return undefined
  }, [results])

  return (
    <Box
      display="flex"
      flexDirection="row"
      p="xs"
      borderTop="4px solid"
      borderTopColor="blue.500"
      css={css`
        > :not(style) ~ :not(style) {
          margin-inline-start: 8px;
          margin-top: 0;
        }
      `}
    >
      <MatchmakingDataItem name="MMR" value={results?.[0].score || '???'} />
      <MatchmakingDataItem name="RANK" value={currentRank || '???'} />
    </Box>
  )
}

export default MatchmakingBlock
