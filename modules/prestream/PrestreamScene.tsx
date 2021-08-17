import * as React from 'react';
import { SceneInner } from './components';
import { SceneWrapper } from '~/components/overlay';

const PrestreamScene: React.FC = () => {
  return (
    <SceneWrapper>
      <SceneInner text="Coming Up..." variant="prestream" />
    </SceneWrapper>
  );
};

export default PrestreamScene;
