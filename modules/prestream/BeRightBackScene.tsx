import * as React from 'react';
import { SceneInner, SceneWrapper } from './components';

const BeRightBackScene: React.FC = () => {
  return (
    <SceneWrapper _innerProps={{ justifyContent: 'space-between' }}>
      <SceneInner text="Please stand by..." variant="brb" />
    </SceneWrapper>
  );
};

export default BeRightBackScene;
