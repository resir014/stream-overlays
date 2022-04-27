import * as React from 'react';
import { NextPage } from 'next';
import { OverlayLayout } from '~/layouts/overlay-layout';
import { PreStreamContent } from '~/modules/pre-stream/pre-stream-content';
import { ChatPanel } from '~/modules/pre-stream/chat-panel';
import { SceneWrapper } from '~/modules/scenes/scene-wrapper';
import { createNextPage } from '~/lib/create-next-page';
import { NYEHeader } from '~/modules/nye/nye-header';
import { useOnMount } from '~/lib/hooks/use-on-mount';
import { StudioClockInterface } from '~/modules/studio-clock/studio-clock-interface';

const NYEClockScenePage: NextPage = () => {
  const [isClockRendered, setIsClockRendered] = React.useState(false);

  useOnMount(() => {
    setIsClockRendered(true);
  });

  return (
    <SceneWrapper>
      <div className="flex flex-row items-end justify-between flex-1 w-full">
        <div className="flex flex-col flex-1 h-full justify-between">
          <NYEHeader />
          <PreStreamContent>
            <ChatPanel className="max-h-[504px]" />
            {isClockRendered && <StudioClockInterface />}
          </PreStreamContent>
        </div>
      </div>
    </SceneWrapper>
  );
};

export default createNextPage(NYEClockScenePage, {
  layout: OverlayLayout,
});
