/* eslint-disable jsx-a11y/anchor-is-valid */

import * as React from 'react'
import { Box, Stack } from '@resir014/chungking-react'

import { DashboardHeader, DashboardRoot } from '~/components/dashboard'
import { DashboardPageContent, DashboardPageHeader } from './components/page'
import { DashboardSection, DashboardSectionHeader } from './components/section'
import { DashboardSidebar } from './components/layout'
import { ScenesList } from './scenes-list'

import scenes from './_data/scenes.json'
import overlays from './_data/overlays.json'
import blocks from './_data/blocks.json'

export default function OverlayDashboard(): JSX.Element {
  return (
    <DashboardRoot>
      <DashboardHeader />
      <Box as="section" display="grid" gridTemplateColumns="64px auto" height="calc(100vh - 60px)">
        <DashboardSidebar />
        <Box display="flex" flexDirection="column">
          <DashboardPageHeader title="Home" />
          <DashboardPageContent>
            <Stack spacing="xl">
              <DashboardSection>
                <DashboardSectionHeader>Scenes</DashboardSectionHeader>
                <ScenesList items={scenes} />
              </DashboardSection>
              <DashboardSection>
                <DashboardSectionHeader>Overlays</DashboardSectionHeader>
                <ScenesList items={overlays} />
              </DashboardSection>
              <DashboardSection>
                <DashboardSectionHeader>Blocks</DashboardSectionHeader>
                <ScenesList items={blocks} />
              </DashboardSection>
            </Stack>
          </DashboardPageContent>
        </Box>
      </Box>
    </DashboardRoot>
  )
}
