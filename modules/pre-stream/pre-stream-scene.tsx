import * as React from 'react';
import clsx from 'clsx';
import { useClock } from '~/lib/hooks/use-clock';
import { useOnMount } from '~/lib/hooks/use-on-mount';
import { useOverlayData } from '../overlay-data/use-overlay-data';
import { SceneWrapper } from '../scenes/scene-wrapper';
import { useCurrentStream } from './utils/stream-schedule';
import { PrestreamCountdown } from './pre-stream-countdown';
import { PrestreamDate } from './pre-stream-date';
import { PreStreamVariants } from './types';
import { PreStreamWipeUpperLayer } from './pre-stream-wipe-upper-layer';
import { PreStreamWipeLowerLayer } from './pre-stream-wipe-lower-layer';

export interface PreStreamSceneProps {
  headerText: string;
  variant?: PreStreamVariants;
}

export function PreStreamScene({ headerText, variant = 'pre-stream' }: PreStreamSceneProps) {
  const time = useClock();
  const [isClientReady, setIsClientReady] = React.useState(false);
  const { overlayData } = useOverlayData();
  const { currentStream } = useCurrentStream();

  const streamStart = React.useMemo(
    () => (overlayData?.streamStart ? new Date(overlayData.streamStart) : undefined),
    [overlayData?.streamStart],
  );

  const isAnimationActive = React.useMemo(() => {
    if (variant !== 'pre-stream') {
      return false;
    }

    if (streamStart) {
      return time.toISOString() >= streamStart.toISOString();
    }

    return false;
  }, [streamStart, time, variant]);

  useOnMount(() => {
    setIsClientReady(true);
  });

  const getColorClassName = () => {
    switch (variant) {
      case 'pre-stream': {
        return 'bg-chungking-blue-500';
      }
      case 'brb': {
        return 'bg-chungking-green-500';
      }
      case 'tech-issues': {
        return 'bg-chungking-magenta-500';
      }
      case 'end': {
        return 'bg-chungking-orange-500';
      }
      default: {
        return 'bg-chungking-blue-500';
      }
    }
  };

  const renderCountdown = (format?: string) => {
    if (isClientReady) {
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
    if (isClientReady) {
      return (
        <div className="flex flex-col space-y-2">
          <PrestreamDate className="text-4xl leading-none text-chungking-white" dateFormat="EEEE" />
          <PrestreamDate className="text-4xl leading-none text-chungking-white font-bold" />
        </div>
      );
    }

    return null;
  };

  const renderWipeUpperLayer = () => {
    if (isClientReady) {
      return <PreStreamWipeUpperLayer isVisible={isAnimationActive} />;
    }
  };

  const renderWipeLowerLayer = () => {
    if (isClientReady) {
      return <PreStreamWipeLowerLayer isVisible={isAnimationActive} />;
    }
  };

  return (
    <SceneWrapper>
      <div className="grid grid-rows-scene-wrapper grid-cols-1 flex-1">
        <div className="grid w-full relative">
          <div className="absolute top-0 left-0 w-full h-full z-30">{renderWipeUpperLayer()}</div>
          <div className="grid grid-cols-3 gap-8 w-full pt-[96px] pb-[24px] px-[128px] z-20">
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
          <div className="absolute top-0 left-0 w-full h-full z-10">
            <div
              className={clsx(
                'absolute w-full h-full -translate-x-[90%] shadow-drop-layers',
                getColorClassName(),
              )}
            />
            {renderWipeLowerLayer()}
          </div>
        </div>
      </div>
    </SceneWrapper>
  );
}
