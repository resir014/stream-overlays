import * as React from 'react';
import { NextPage } from 'next';

import { OverlayRoot } from '~/components/overlay';
import { PreStreamHeader } from '~/modules/pre-stream/pre-stream-header';
import { PreStreamContent } from '~/modules/pre-stream/pre-stream-content';
import { CurrentStreamBlock } from '~/modules/pre-stream/current-stream-block';
import { ChatPanel } from '~/modules/pre-stream/chat-panel';
import { SceneWrapper } from '~/modules/scenes/scene-wrapper';

const EndScenePage: NextPage = () => {
  return (
    <OverlayRoot>
      <SceneWrapper>
        <div className="flex flex-row items-end justify-between flex-1 w-full">
          <div className="flex flex-col flex-1 h-full justify-between">
            <PreStreamHeader variant="end" />
            <PreStreamContent>
              <ChatPanel />
            </PreStreamContent>
            <CurrentStreamBlock variant="end" />
          </div>
        </div>
      </SceneWrapper>
    </OverlayRoot>
  );
};

export default EndScenePage;
