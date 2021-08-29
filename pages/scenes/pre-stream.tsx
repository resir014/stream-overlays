import * as React from 'react';
import { NextPage } from 'next';

import { OverlayRoot, SceneWrapper } from '~/components/overlay';
import { PreStreamHeader } from '~/components/pre-stream/pre-stream-header';
import { useOnMount } from '~/lib/hooks/use-on-mount';
import { PreStreamSchedule } from '~/components/pre-stream/pre-stream-schedule';

const PrestreamScenePage: NextPage = () => {
  const [isHeaderRendered, setIsHeaderRendered] = React.useState(false);

  useOnMount(() => {
    setIsHeaderRendered(true);
  });

  return (
    <OverlayRoot>
      <SceneWrapper>
        {isHeaderRendered ? <PreStreamHeader /> : <div className="h-[48px]" />}
        <div className="flex flex-row items-end justify-between flex-1 pt-6 pb-12 w-full">
          <PreStreamSchedule />
          <div className="ml-12 flex-1 h-full max-h-[720px]">
            <div className="w-full h-full p-6 rounded-2xl shadow-xl bg-chungking-black bg-opacity-75" />
          </div>
        </div>
      </SceneWrapper>
    </OverlayRoot>
  );
};

export default PrestreamScenePage;
