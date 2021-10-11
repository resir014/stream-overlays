import * as React from 'react';
import { NextPage } from 'next';

import { OverlayRoot } from '~/components/overlay';
import { CurrentStreamBlock } from '~/modules/pre-stream/current-stream-block';
import { ChatPanel } from '~/modules/pre-stream/chat-panel';
import { PreStreamHeader } from '~/modules/pre-stream/pre-stream-header';
import { PreStreamContent } from '~/modules/pre-stream/pre-stream-content';
import { SceneWrapper } from '~/modules/scenes/scene-wrapper';
import { UpcomingStreamsBlock } from '~/modules/pre-stream/upcoming-streams-block';

const PrestreamScenePage: NextPage = () => {
  return (
    <OverlayRoot>
      <SceneWrapper>
        <div className="flex flex-row items-end justify-between flex-1 w-full">
          <div className="flex flex-col flex-1 h-full justify-between">
            <PreStreamHeader variant="pre-stream" />
            <PreStreamContent>
              <ChatPanel />
              <UpcomingStreamsBlock />
            </PreStreamContent>
            <CurrentStreamBlock variant="pre-stream" />
          </div>
        </div>
      </SceneWrapper>
    </OverlayRoot>
  );
};

export default PrestreamScenePage;
