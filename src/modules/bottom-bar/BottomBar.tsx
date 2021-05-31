import dynamic from 'next/dynamic'
import { transparentize } from 'polished'
import * as React from 'react'
import { Box, BoxProps, theme } from '@resir014/chungking-react'
import BottomBarSocialLinks from './BottomBarSocialLinks'
import BottomBarEvents from './BottomBarEvents'

const BottomBarClock = dynamic(() => import('./BottomBarClock'), {
  ssr: false
})

interface BottomBarProps extends BoxProps {
  variant?: 'default' | 'prestream' | 'nye'
}

const BottomBar: React.FC<BottomBarProps> = ({ variant, ...rest }) => {
  const hideClock = React.useMemo(() => variant === 'prestream', [variant])
  const nyeVariant = React.useMemo(() => variant === 'nye', [variant])

  return (
    <Box
      display="grid"
      gridTemplateRows="40px 24px"
      gridTemplateColumns="auto 320px"
      gridTemplateAreas={`
      "events clock"
      "footer footer"
    `}
      width="100%"
      height="100%"
      backgroundColor={transparentize(0.1, theme.colors.black)}
      color="white"
      maxHeight={hideClock ? 88 : 64}
      {...rest}
    >
      <BottomBarEvents />
      {hideClock || nyeVariant ? <BottomBarSocialLinks /> : <BottomBarClock />}
      <Box display="block" gridArea="footer" />
    </Box>
  )
}

export default BottomBar
