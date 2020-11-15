import dynamic from 'next/dynamic'
import { transparentize } from 'polished'
import * as React from 'react'
import { Box, colors } from '~/components/chungking-core'
import BottomBarSocialLinks from './BottomBarSocialLinks'
import BottomBarEvents from './BottomBarEvents'

const BottomBarClock = dynamic(() => import('./BottomBarClock'), {
  ssr: false
})

interface BottomBarProps {
  variant?: 'default' | 'prestream'
}

const BottomBar: React.FC<BottomBarProps> = ({ variant }) => {
  const hideClock = React.useMemo(() => variant === 'prestream', [variant])

  return (
    <Box
      display="grid"
      gridTemplateRows="40px 76px"
      gridTemplateColumns="auto 320px"
      gridTemplateAreas={`
      "events clock"
      "footer footer"
    `}
      width="100%"
      height="100%"
      backgroundColor={transparentize(0.25, colors.black)}
      color="white"
      maxHeight={hideClock ? 88 : 144}
    >
      <BottomBarEvents />
      {hideClock ? <BottomBarSocialLinks /> : <BottomBarClock />}
      <Box display="block" gridArea="footer" borderTop="1px solid" borderTopColor="grey.900" />
    </Box>
  )
}

export default BottomBar
