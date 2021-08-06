import * as React from 'react';
import { SceneInner, SceneWrapper } from './components';

const EndScene: React.FC = () => {
  return (
    <SceneWrapper>
      <SceneInner text="Thanks for watching!" variant="end" />
    </SceneWrapper>
  );
};

export default EndScene;
