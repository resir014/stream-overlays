import * as React from 'react'
import { NextPage } from 'next'
import { Box, Text } from '@resir014/chungking-react'
import { css } from '@emotion/react'

import OverlayRoot from '~/components/overlay/OverlayRoot'
import getTimeRemaining from '~/modules/trackmania/aots-overlay/getTimeRemaing'
import padTimer from '~/modules/trackmania/aots-overlay/padTimer'

const AOTSCountdownScenePage: NextPage = () => {
  const [time, setTime] = React.useState<ReturnType<typeof getTimeRemaining>>()

  React.useEffect(() => {
    const timeInterval = setInterval(() => {
      const start = '2021-04-22T21:55:00'
      const remaining = getTimeRemaining(start)

      setTime(remaining)

      if (remaining.total <= 0) {
        clearInterval(timeInterval)
      }
    }, 1000)

    return () => {
      clearInterval(timeInterval)
    }
  }, [])

  return (
    <OverlayRoot>
      <Box position="relative" flex="1 1 auto" width="100%" height="100%" backgroundColor="#121220">
        <Box
          display="block"
          position="absolute"
          top={0}
          right={0}
          width="50%"
          height="100%"
          zIndex={1}
          background="linear-gradient(0deg, rgba(18, 18, 32, 0.25), rgba(18, 18, 32, 0.25)), url(/static/images/AsiaOce02.jpg)"
          backgroundPosition="center"
        />
        <Box
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          flex="1 1 auto"
          color="white"
          fontFamily="'Montserrat', system-ui, sans-serif"
          zIndex={10}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="space-between"
            width="calc(100% * 0.9)"
            height="calc(100% * 0.9)"
            background="linear-gradient(180deg, rgba(24, 29, 58, 0) 0%, rgba(24, 29, 58, 0.5) 100%)"
          >
            <Box>
              <img
                src="/static/images/aots-logo-horizontal.png"
                alt="AOTS logo"
                css={css`
                  width: 484px;
                  margin: 0;
                `}
              />
            </Box>
            <Box>
              <Box>
                <Text
                  display="inline-block"
                  px={16}
                  py={8}
                  fontSize="160px"
                  lineHeight={1}
                  fontWeight={800}
                  fontStyle="italic"
                  backgroundColor="#3182CE"
                >
                  {`${padTimer(time?.minutes || 0)}:${padTimer(time?.seconds || 0)}`}
                </Text>
              </Box>
              <Box>
                <Text
                  display="inline-block"
                  px={16}
                  py={8}
                  fontSize="72px"
                  lineHeight={1}
                  fontWeight={600}
                  fontStyle="italic"
                  backgroundColor="#F48432"
                  css={css`
                    text-transform: uppercase;
                  `}
                >
                  Showmatch starting soon...
                </Text>
              </Box>
            </Box>
            <Box>
              <img
                src="/static/images/aots-sponsors.png"
                alt="AOTS logo"
                css={css`
                  width: 464px;
                  margin: 0;
                `}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </OverlayRoot>
  )
}

export default AOTSCountdownScenePage
