import * as React from 'react';
import { useClock } from '~/lib/hooks/use-clock';
import { useOnMount } from '~/lib/hooks/use-on-mount';
import { DeepDip2Leaderboard } from '../deep-dip/leaderboard';
import { useOverlayData } from '../overlay-data/use-overlay-data';
import { SceneWrapper } from '../scenes/scene-wrapper';
import { PreStreamSceneProps } from './pre-stream-scene';
import { PreStreamWipeUpperLayer } from './pre-stream-wipe-upper-layer';
import { PreStreamWipeLowerLayer } from './pre-stream-wipe-lower-layer';
import { PrestreamCountdown } from './pre-stream-countdown';
import { PrestreamDate } from './pre-stream-date';

export function PreStreamDeepDipScene({ headerText, variant }: PreStreamSceneProps) {
  const time = useClock();
  const [isClientReady, setIsClientReady] = React.useState(false);
  const { overlayData } = useOverlayData();

  const streamStart = React.useMemo(
    () => (overlayData?.streamStart ? new Date(overlayData.streamStart) : undefined),
    [overlayData?.streamStart],
  );

  const isAnimationActive = React.useMemo(() => {
    if (variant !== 'pre-stream' && variant !== 'pre-stream-cerveza') {
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

  const renderCountdown = (format?: string) => {
    if (isClientReady) {
      if (variant === 'pre-stream' || variant === 'pre-stream-cerveza') {
        return (
          <div className="flex items-center justify-center w-full p-4 rounded-md bg-chungking-blue-500">
            <PrestreamCountdown
              className="text-8xl leading-none text-chungking-white font-bold tabular-nums helper-alternate-digits"
              timeFormat={format}
            />
          </div>
        );
      }

      return null;
    }

    return null;
  };

  const renderDateTime = () => {
    if (isClientReady) {
      return (
        <div className="flex items-center justify-center space-x-2 w-full p-4 rounded-md bg-chungking-white">
          <PrestreamDate
            className="text-4xl leading-none text-chungking-black font-bold"
            dateFormat="EEEE"
          />
          <PrestreamDate className="text-4xl leading-none text-chungking-black" />
        </div>
      );
    }

    return null;
  };

  const getColorClassName = () => {
    switch (variant) {
      case 'pre-stream':
      case 'pre-stream-cerveza': {
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

  const renderWipeUpperLayer = () => {
    if (isClientReady) {
      return (
        <PreStreamWipeUpperLayer
          isVisible={isAnimationActive}
          cerveza={variant === 'pre-stream-cerveza'}
        />
      );
    }
  };

  const renderWipeLowerLayer = () => {
    if (isClientReady) {
      return (
        <PreStreamWipeLowerLayer className={getColorClassName()} isVisible={isAnimationActive} />
      );
    }
  };

  return (
    <SceneWrapper>
      <div className="grid grid-rows-scene-wrapper grid-cols-1 flex-1">
        <div className="grid w-full relative">
          <div className="absolute top-0 left-0 w-full h-full z-30">{renderWipeUpperLayer()}</div>
          <div className="grid grid-cols-12 gap-3 pt-[96px] pb-12 px-[128px] z-20">
            <div className="flex flex-col items-start justify-between col-span-4 p-6 bg-chungking-black/90 rounded-lg">
              <div className="flex flex-col space-y-2">
                <span className="text-4xl leading-none text-chungking-white font-bold">
                  Deep Dip 2
                </span>
                <span className="text-4xl leading-none text-chungking-white">{headerText}</span>
              </div>
              <div className="flex flex-col space-y-3 w-full">
                {renderCountdown('mm:ss')}
                {renderDateTime()}
              </div>
            </div>
            <DeepDip2Leaderboard className="col-span-8" />
          </div>
          <div className="absolute top-0 left-0 w-full h-full z-10">{renderWipeLowerLayer()}</div>
        </div>
      </div>
    </SceneWrapper>
  );
}
