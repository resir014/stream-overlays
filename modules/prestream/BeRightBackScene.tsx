import * as React from 'react';
import { SceneInner } from './components';
import { SceneWrapper } from '~/components/overlay';

const BeRightBackScene: React.FC = () => {
  return (
    <SceneWrapper>
      <SceneInner text="Please stand by..." variant="brb" />
    </SceneWrapper>
  );
};

export default BeRightBackScene;
