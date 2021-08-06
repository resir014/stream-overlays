/* eslint-disable jsx-a11y/anchor-is-valid */

import * as React from 'react';

import { DashboardPageContent, DashboardPageHeader } from './components/page';
import { DashboardSection, DashboardSectionHeader } from './components/section';
import { DashboardSidebar } from './components/layout';
import { ScenesList } from './scenes-list';

import scenes from './_data/scenes.json';
import overlays from './_data/overlays.json';
import blocks from './_data/blocks.json';
import { DashboardHeader, DashboardRoot } from '~/components/dashboard';

export default function OverlayDashboard(): JSX.Element {
  return (
    <DashboardRoot>
      <DashboardHeader />
      <section className="flex h-[calc(100vh-60px)]">
        <DashboardSidebar />
        <div className="flex flex-col flex-auto">
          <DashboardPageHeader title="Home" />
          <DashboardPageContent>
            <div className="space-y-8">
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
            </div>
          </DashboardPageContent>
        </div>
      </section>
    </DashboardRoot>
  );
}
