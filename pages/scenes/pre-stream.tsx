import * as React from 'react';
import { NextPage } from 'next';

import { OverlayRoot, SceneWrapper } from '~/components/overlay';
import { PreStreamHeader } from '~/components/pre-stream/pre-stream-header';
import { useOnMount } from '~/lib/hooks/use-on-mount';

const PrestreamScenePage: NextPage = () => {
  const [isHeaderRendered, setIsHeaderRendered] = React.useState(false);

  useOnMount(() => {
    setIsHeaderRendered(true);
  });

  return (
    <OverlayRoot>
      <SceneWrapper>
        {isHeaderRendered ? <PreStreamHeader /> : <div className="h-[48px]" />}
      </SceneWrapper>
    </OverlayRoot>
  );
};

export default PrestreamScenePage;
