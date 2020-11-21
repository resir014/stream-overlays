/* eslint-disable jsx-a11y/anchor-is-valid */

import * as React from 'react'
import Link from 'next/link'

import { Box } from '~/components/chungking-core'
import { HeaderParagraph, HeaderTitle } from './components'

export default function HomeBlock() {
  return (
    <Box
      as="section"
      display="block"
      flex="1 1 auto"
      p="lg"
      backgroundColor="grey.900"
      color="white"
    >
      <HeaderTitle>Scenes</HeaderTitle>
      <HeaderParagraph>
        <Link href="/overlays/pre-stream">
          <a>Pre-Stream Screen</a>
        </Link>
      </HeaderParagraph>
      <HeaderParagraph>
        <Link href="/overlays/brb">
          <a>Be Right Back Screen</a>
        </Link>
      </HeaderParagraph>
      <HeaderParagraph>
        <Link href="/overlays/end">
          <a>End Screen</a>
        </Link>
      </HeaderParagraph>
      <HeaderTitle>Blocks</HeaderTitle>
      <HeaderParagraph>
        <Link href="/blocks/header">
          <a>Header</a>
        </Link>
      </HeaderParagraph>
      <HeaderParagraph>
        <Link href="/blocks/bottom-bar">
          <a>BottomBar&trade;</a>
        </Link>
      </HeaderParagraph>
      <HeaderParagraph>
        <Link href="/blocks/trackmania">
          <a>TrackMania Gamepad</a>
        </Link>
      </HeaderParagraph>
      <HeaderParagraph>
        <Link href="/blocks/flightsim-pip">
          <a>Picture-in-Picture Wrapper</a>
        </Link>
      </HeaderParagraph>
    </Box>
  )
}
