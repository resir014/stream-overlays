import * as React from 'react';
import clsx from 'clsx';
import { useOnMount } from '~/lib/hooks/use-on-mount';
import { DeepDip2Leaderboard } from '../deep-dip/leaderboard';
import { SceneWrapper } from '../scenes/scene-wrapper';
import { DD2Logo } from '../deep-dip/dd2-logo';
import { PreStreamSceneProps } from './pre-stream-scene';
import { PreStreamWipeUpperLayer } from './pre-stream-wipe-upper-layer';
import { PreStreamWipeLowerLayer } from './pre-stream-wipe-lower-layer';
import { PrestreamCountdown } from './pre-stream-countdown';
import { PrestreamDate } from './pre-stream-date';

export function PreStreamDeepDipScene({ headerText, variant }: PreStreamSceneProps) {
  const [isClientReady, setIsClientReady] = React.useState(false);

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
        return 'bg-chungking-blue-500 text-chungking-white';
      }
      case 'brb': {
        return 'bg-chungking-turquoise-500 text-chungking-black';
      }
      case 'tech-issues': {
        return 'bg-chungking-magenta-500 text-chungking-white';
      }
      case 'end': {
        return 'bg-chungking-orange-500 text-chungking-black';
      }
      default: {
        return 'bg-chungking-blue-500 text-chungking-white';
      }
    }
  };

  const renderWipeUpperLayer = () => {
    if (isClientReady) {
      return <PreStreamWipeUpperLayer variant={variant} />;
    }
  };

  const renderWipeLowerLayer = () => {
    if (isClientReady) {
      return <PreStreamWipeLowerLayer className={getColorClassName()} variant={variant} />;
    }
  };

  return (
    <SceneWrapper>
      <div className="grid grid-rows-scene-wrapper grid-cols-1 flex-1">
        <div className="grid w-full relative">
          <div className="absolute top-0 left-0 w-full h-full z-30">{renderWipeUpperLayer()}</div>
          <div className="grid grid-cols-12 gap-3 pt-[96px] pb-12 px-[128px] z-20">
            <div className="flex flex-col items-start justify-between col-span-4 bg-chungking-black/90 rounded-lg">
              <div className="flex flex-col items-center w-full space-y-4 px-6 pt-12">
                <DD2Logo height={144} />
              </div>
              <div className="flex flex-col space-y-3 w-full px-6 pb-6">
                {variant === 'pre-stream' ? (
                  renderCountdown('mm:ss')
                ) : (
                  <div
                    className={clsx(
                      'flex items-center justify-center w-full p-4 rounded-md',
                      getColorClassName(),
                    )}
                  >
                    <span className="text-4xl leading-none font-bold">{headerText}</span>
                  </div>
                )}
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
