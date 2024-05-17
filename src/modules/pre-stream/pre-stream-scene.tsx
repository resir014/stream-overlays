import { Suspense } from 'react';
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
  const { currentStream } = useCurrentStream();

  const isPrestream = variant === 'pre-stream' || variant === 'pre-stream-cerveza';

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

  return (
    <SceneWrapper>
      <div className="grid grid-rows-scene-wrapper grid-cols-1 flex-1">
        <div className="grid w-full relative">
          <div className="absolute top-0 left-0 w-full h-full z-30">
            <Suspense>
              <PreStreamWipeUpperLayer variant={variant} />
            </Suspense>
          </div>
          <div className="grid grid-cols-3 gap-8 w-full pt-[96px] pb-[24px] px-[128px] z-20">
            <div className="flex flex-col justify-center relative">
              <div className="flex flex-1 items-center">
                <Suspense>
                  <div className="flex flex-col space-y-2">
                    <PrestreamDate
                      className="text-4xl leading-none text-chungking-white"
                      dateFormat="EEEE"
                    />
                    <PrestreamDate className="text-4xl leading-none text-chungking-white font-bold" />
                  </div>
                </Suspense>
              </div>
              <div className="flex flex-col absolute bottom-6 left-0">
                {isPrestream ? (
                  <Suspense>
                    <PrestreamCountdown
                      className="text-[216px] leading-none text-chungking-white font-bold tabular-nums helper-alternate-digits"
                      timeFormat="mm"
                    />
                  </Suspense>
                ) : null}
              </div>
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
              <div className="flex flex-col absolute bottom-6 left-0">
                {isPrestream ? (
                  <Suspense>
                    <PrestreamCountdown
                      className="text-[216px] leading-none text-chungking-white font-bold tabular-nums helper-alternate-digits"
                      timeFormat="ss"
                    />
                  </Suspense>
                ) : null}
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full z-10">
            <Suspense>
              <PreStreamWipeLowerLayer className={getColorClassName()} variant={variant} />
            </Suspense>
          </div>
        </div>
      </div>
    </SceneWrapper>
  );
}
