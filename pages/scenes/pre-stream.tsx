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
        <div className="flex flex-row items-end justify-between flex-1 pt-6 pb-12 w-full">
          <div className="flex flex-col items-start justify-between w-full max-w-[1280px] h-full max-h-[720px] p-6 rounded-2xl shadow-xl bg-gradient-to-r from-[rgba(72,209,168,0.4)] to-[rgba(0,112,243,0.4)]">
            <div className="text-chungking-white">
              <p className="text-2xl uppercase tracking-wider">Stream Starting Soon...</p>
            </div>
            <div className="space-y-2">
              <h1 className="text-chungking-white text-6xl max-w-[75%] font-semibold">
                Trackmania
              </h1>
              <p className="text-chungking-white text-3xl">
                Washed up gamer hunts for Author medals... again.
              </p>
            </div>
          </div>
          <div className="ml-12 flex-1 h-full max-h-[720px]">
            <div className="w-full h-full p-6 rounded-2xl shadow-xl bg-chungking-black bg-opacity-75" />
          </div>
        </div>
      </SceneWrapper>
    </OverlayRoot>
  );
};

export default PrestreamScenePage;
