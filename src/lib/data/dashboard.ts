import blocksData from '~/_data/dashboard/blocks.json';
import overlaysData from '~/_data/dashboard/overlays.json';
import scenesData from '~/_data/dashboard/scenes.json';

export interface DashboardBlock {
  readonly title: string;
  readonly url: string;
}

export const blocks = blocksData as unknown as DashboardBlock[];

export const overlays = overlaysData as unknown as DashboardBlock[];

export const scenes = scenesData as unknown as DashboardBlock[];
