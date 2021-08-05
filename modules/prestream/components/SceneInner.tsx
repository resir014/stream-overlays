import { Box, theme } from '@resir014/chungking-react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { transparentize } from 'polished'
import * as React from 'react'
import { PrestreamVariants } from '~/interfaces/types'
import parseStreamTimeQuery from '../utils/parseStreamTimeQuery'
import PrestreamDetails from './PrestreamDetails'

const PrestreamClock = dynamic(() => import('./PrestreamClock'), {
  ssr: false,
  loading: () => <Box gridArea="clock" backgroundColor={transparentize(0.25, theme.colors.black)} />
})

interface SceneInnerProps {
  variant?: PrestreamVariants
  text: string
}

const SceneInner: React.FC<SceneInnerProps> = ({ variant, text }) => {
  const router = useRouter()
  const { startH, startM } = React.useMemo(() => parseStreamTimeQuery(router.query), [router.query])

  return (
    <>
      <Box
        display="grid"
        gridTemplateColumns="128px 1fr 256px"
        gridTemplateRows="128px 128px 1fr"
        gridTemplateAreas={`
          "clock clock clock"
          "details details details"
          "chat chat events"
        `}
        width="100%"
        maxWidth={896}
        height="100%"
        maxHeight={728}
      >
        <PrestreamClock gridArea="clock" variant={variant} startH={startH} startM={startM} />
        <PrestreamDetails text={text} gridArea="details" variant={variant} />
        <Box gridArea="events" backgroundColor={transparentize(0.25, theme.colors.black)} />
        <Box gridArea="chat" backgroundColor={transparentize(0.25, theme.colors.black)} />
      </Box>
    </>
  )
}

export default SceneInner
