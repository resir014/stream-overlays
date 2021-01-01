/* eslint-disable jsx-a11y/anchor-is-valid */

import * as React from 'react'
import Link from 'next/link'
import { Box } from '@resir014/chungking-react'

import { DashboardSidebar, HeaderParagraph, HeaderTitle } from './components'
import { DashboardHeader, DashboardRoot } from '~/components/dashboard'

export default function OverlayDashboard(): JSX.Element {
  return (
    <DashboardRoot>
      <DashboardHeader />
      <Box as="section" display="grid" gridTemplateColumns="64px auto" height="calc(100vh - 60px)">
        <DashboardSidebar />
        <Box display="flex" flexDirection="column" p="lg">
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
      </Box>
    </DashboardRoot>
  )
}
