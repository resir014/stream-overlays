import { Box, colors } from '@resir014/chungking-react'
import dynamic from 'next/dynamic'
import { transparentize } from 'polished'
import * as React from 'react'
import { PrestreamDetails, PrestreamEventsBlock, SceneWrapper } from './components'

const PrestreamDateTime = dynamic(() => import('../prestream/PrestreamDateTime'), { ssr: false })

const PrestreamScene: React.FC = () => {
  return (
    <SceneWrapper _innerProps={{ justifyContent: 'space-between' }}>
      <Box
        display="grid"
        gridTemplateColumns="256px 1fr"
        gridTemplateRows="128px 1fr"
        gridTemplateAreas={`
          "details details"
          "events chat"
        `}
        width="100%"
        maxWidth={896}
        height="100%"
        maxHeight={728}
        boxShadow="double"
      >
        <PrestreamDetails gridArea="details" />
        <PrestreamEventsBlock gridArea="events" />
        <Box backgroundColor={transparentize(0.1, colors.grey[900])} gridArea="chat" />
      </Box>
      <PrestreamDateTime text="Stream starting soon..." />
    </SceneWrapper>
  )
}

export default PrestreamScene
