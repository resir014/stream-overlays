import { Box, colors } from '@resir014/chungking-react'
import dynamic from 'next/dynamic'
import { transparentize } from 'polished'
import * as React from 'react'
import { PrestreamDetails, PrestreamEventsBlock, PrestreamIcon, SceneWrapper } from './components'

const PrestreamClock = dynamic(() => import('./PrestreamClock'), { ssr: false })

const PrestreamScene: React.FC = () => {
  return (
    <SceneWrapper _innerProps={{ justifyContent: 'center' }}>
      <Box
        display="grid"
        gridTemplateColumns="256px 1fr 128px"
        gridTemplateRows="136px 128px 1fr"
        gridTemplateAreas={`
          "clock clock icon"
          "details details details"
          "events chat chat"
        `}
        width="100%"
        maxWidth={1024}
        height="100%"
        maxHeight={768}
        boxShadow="double"
      >
        <PrestreamClock gridArea="clock" />
        <PrestreamIcon gridArea="icon" />
        <PrestreamDetails gridArea="details" />
        <PrestreamEventsBlock gridArea="events" />
        <Box backgroundColor={transparentize(0.1, colors.grey[900])} gridArea="chat" />
      </Box>
    </SceneWrapper>
  )
}

export default PrestreamScene
