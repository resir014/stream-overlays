import dynamic from 'next/dynamic'
import * as React from 'react'
import { Box } from '~/components/chungking-core'
import BottomBarEvents from './BottomBarEvents'

const BottomBarClock = dynamic(() => import('./BottomBarClock'), {
  ssr: false
})

const BottomBar: React.FC = () => {
  return (
    <Box
      display="grid"
      gridTemplateRows="56px 40px 48px"
      gridTemplateColumns="auto 320px"
      gridTemplateAreas={`
        "caption clock"
        "events clock"
        "footer footer"
      `}
      width="100%"
      height="100%"
      backgroundColor="black"
      maxHeight={144}
    >
      <Box display="block" gridArea="caption" backgroundColor="#000" />
      <BottomBarEvents />
      <BottomBarClock />
      <Box
        display="block"
        gridArea="footer"
        backgroundColor="black"
        borderTop="1px solid"
        borderTopColor="grey90"
      />
    </Box>
  )
}

export default BottomBar
