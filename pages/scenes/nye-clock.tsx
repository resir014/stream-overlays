import * as React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { OverlayLayout } from '~/layouts/overlay-layout';
import { PreStreamContent } from '~/modules/pre-stream/pre-stream-content';
import { ChatPanel } from '~/modules/pre-stream/chat-panel';
import { SceneWrapper } from '~/modules/scenes/scene-wrapper';
import { createNextPage } from '~/lib/create-next-page';
import { NYEHeader } from '~/modules/nye/nye-header';

const NYEClock = dynamic(() => import('~/modules/nye/nye-clock'), {
  ssr: false,
});

const NYEClockScenePage: NextPage = () => {
  return (
    <SceneWrapper>
      <div className="flex flex-row items-end justify-between flex-1 w-full">
        <div className="flex flex-col flex-1 h-full justify-between">
          <NYEHeader />
          <PreStreamContent>
            <ChatPanel className="max-h-[504px]" />
            <NYEClock />
          </PreStreamContent>
        </div>
      </div>
    </SceneWrapper>
  );
};

export default createNextPage(NYEClockScenePage, {
  layout: OverlayLayout,
});
