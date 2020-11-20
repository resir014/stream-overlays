import * as React from 'react'
import { NextPage } from 'next'
import { transparentize } from 'polished'

import OverlayRoot from '~/components/overlay/OverlayRoot'
import { PrestreamRoot } from '~/modules/prestream/components'
import { Box, colors, Stack, Text } from '~/components/chungking-core'

const Overlay20Page: NextPage = () => {
  return (
    <OverlayRoot>
      <PrestreamRoot>
        <Box
          position="absolute"
          top={24}
          left={48}
          px="md"
          py="xs"
          borderLeft="8px solid"
          borderLeftColor="blue.500"
          backgroundColor={transparentize(0.75, colors.blue[500])}
          boxShadow="single"
        >
          <Text variant={700}>
            <Text fontWeight={600}>resir014</Text> &#47;&#47; resir014.xyz
          </Text>
        </Box>
        <Box
          display="flex"
          flex="1 1 auto"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Stack
            spacing="xs"
            borderTop="12px solid"
            borderTopColor="blue.500"
            textAlign="center"
            p={32}
            backgroundColor={transparentize(0.75, colors.blue[500])}
            boxShadow="double"
          >
            <Text display="block" variant={900}>
              Tuesday, 24 November 2020
            </Text>
            <Text
              display="block"
              fontSize="96px"
              lineHeight="104px"
              color="blue.400"
              fontWeight={700}
            >
              twitch.tv/resir014
            </Text>
          </Stack>
        </Box>
      </PrestreamRoot>
    </OverlayRoot>
  )
}

export default Overlay20Page
