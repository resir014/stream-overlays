import * as React from 'react';
import { ListItem } from '../types';

import ScenesListItem from './ScenesListItem';

export interface ScenesListProps {
  items: ListItem[];
}

const ScenesList: React.FC<ScenesListProps> = ({ items }) => {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {items.map(scene => (
        <ScenesListItem key={scene.url} scene={scene} />
      ))}
    </div>
  );
};

export default ScenesList;
