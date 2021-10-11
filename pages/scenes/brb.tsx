import * as React from 'react';
import { NextPage } from 'next';

import { OverlayRoot } from '~/components/overlay';
import { PreStreamHeader } from '~/modules/pre-stream/pre-stream-header';
import { PreStreamSchedule } from '~/modules/pre-stream/current-stream-block';
import { PreStreamChatPanel } from '~/modules/pre-stream/chat-panel';
import { SceneWrapper } from '~/modules/scenes/scene-wrapper';

const BeRightBackScenePage: NextPage = () => {
  return (
    <OverlayRoot>
      <SceneWrapper>
        <div className="flex flex-row items-end justify-between flex-1 w-full">
          <div className="flex flex-col flex-1 h-full justify-between">
            <PreStreamHeader variant="brb" />
            <PreStreamChatPanel />
            <PreStreamSchedule variant="brb" />
          </div>
        </div>
      </SceneWrapper>
    </OverlayRoot>
  );
};

export default BeRightBackScenePage;
