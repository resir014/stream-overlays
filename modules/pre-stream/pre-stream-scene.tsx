import * as React from 'react';
import { useOnMount } from '~/lib/hooks/use-on-mount';
import { SceneWrapper } from '../scenes/scene-wrapper';
import { PrestreamCountdown } from './pre-stream-countdown';
import { PrestreamDate } from './pre-stream-date';
import { PreStreamVariants } from './types';
import { useCurrentStream } from './utils/stream-schedule';

export interface PreStreamSceneProps {
  headerText: string;
  variant?: PreStreamVariants;
}

export function PreStreamScene({ headerText, variant = 'pre-stream' }: PreStreamSceneProps) {
  const [clockRendered, setClockRendered] = React.useState(false);
  const { currentStream } = useCurrentStream();

  console.log(currentStream);

  useOnMount(() => {
    setClockRendered(true);
  });

  const renderCountdown = (format?: string) => {
    if (clockRendered) {
      if (variant === 'pre-stream') {
        return (
          <PrestreamCountdown
            className="text-[216px] leading-none text-chungking-white font-bold tabular-nums helper-alternate-digits"
            timeFormat={format}
          />
        );
      }

      return null;
    }

    return null;
  };

  const renderDateTime = () => {
    if (clockRendered) {
      return (
        <div className="flex flex-col space-y-2">
          <PrestreamDate className="text-4xl leading-none text-chungking-white" dateFormat="EEEE" />
          <PrestreamDate className="text-4xl leading-none text-chungking-white font-bold" />
        </div>
      );
    }

    return null;
  };

  return (
    <SceneWrapper>
      <div className="grid grid-rows-scene-wrapper grid-cols-1 flex-1">
        <div className="grid w-full">
          <div className="grid grid-cols-3 gap-8 w-full pt-[96px] pb-[24px] px-[128px]">
            <div className="flex flex-col justify-center relative">
              <div className="flex flex-1 items-center">{renderDateTime()}</div>
              <div className="flex flex-col absolute bottom-6 left-0">{renderCountdown('mm')}</div>
            </div>
            <div className="flex flex-col col-span-2 justify-center relative">
              <div className="flex flex-1 items-center">
                <div className="flex flex-col space-y-2">
                  <span className="text-4xl leading-none text-chungking-white">{headerText}</span>
                  <span className="text-4xl leading-none text-chungking-white font-bold">
                    {currentStream?.stream_name ?? 'No current stream.'}
                  </span>
                </div>
              </div>
              <div className="flex flex-col absolute bottom-6 left-0">{renderCountdown('ss')}</div>
            </div>
          </div>
        </div>
      </div>
    </SceneWrapper>
  );
}
