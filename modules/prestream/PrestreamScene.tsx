import * as React from 'react';
import { SceneInner, SceneWrapper } from './components';

const PrestreamScene: React.FC = () => {
  return (
    <SceneWrapper>
      <SceneInner text="Coming Up..." variant="prestream" />
    </SceneWrapper>
  );
};

export default PrestreamScene;
