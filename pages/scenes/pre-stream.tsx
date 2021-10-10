import * as React from 'react';
import { NextPage } from 'next';

import { OverlayRoot } from '~/components/overlay';
import { PreStreamSchedule } from '~/modules/pre-stream/pre-stream-schedule';
import { PreStreamChatPanel } from '~/modules/pre-stream/pre-stream-chat-panel';
import { SceneWrapper } from '~/modules/scenes/scene-wrapper';
import { PreStreamHeader } from '~/modules/pre-stream/pre-stream-header';

const PrestreamScenePage: NextPage = () => {
  return (
    <OverlayRoot>
      <SceneWrapper>
        <div className="flex flex-row items-end justify-between flex-1 w-full">
          <div className="flex flex-col flex-1 h-full justify-between">
            <PreStreamHeader variant="pre-stream" />
            <PreStreamChatPanel />
            <PreStreamSchedule variant="pre-stream" />
          </div>
        </div>
      </SceneWrapper>
    </OverlayRoot>
  );
};

export default PrestreamScenePage;
