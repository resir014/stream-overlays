import * as React from 'react';
import { SceneInner } from './components';
import { SceneWrapper } from '~/components/overlay';

const EndScene: React.FC = () => {
  return (
    <SceneWrapper>
      <SceneInner text="Thanks for watching!" variant="end" />
    </SceneWrapper>
  );
};

export default EndScene;
