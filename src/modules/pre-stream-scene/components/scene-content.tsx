import type { PreStreamVariants } from '~/@pre-stream/shared/types';
import { TRPCProvider } from '~/lib/trpc/trpc-provider';
import { StreamTitle } from './stream-title';
import { StreamDateTime } from './stream-date-time';
import { StreamCountdown } from './stream-countdown';

export interface SceneContentProps {
  headerText: string;
  variant?: PreStreamVariants;
}

export function SceneContent({ headerText, variant }: SceneContentProps) {
  const isPrestream = variant === 'pre-stream';

  return (
    <TRPCProvider>
      <div className="grid grid-cols-3 gap-8 w-full pt-[96px] pb-[24px] px-[128px] z-20">
        <div className="flex flex-col justify-center relative">
          <div className="flex flex-1 items-center">
            <div className="flex flex-col space-y-2">
              <StreamDateTime
                className="text-4xl leading-none text-chungking-white"
                dateFormat="EEEE"
              />
              <StreamDateTime className="text-4xl leading-none text-chungking-white font-bold" />
            </div>
          </div>
          <div className="flex flex-col absolute bottom-6 left-0">
            {isPrestream ? (
              <StreamCountdown
                className="text-[216px] leading-none text-chungking-white font-bold tabular-nums helper-alternate-digits"
                timeFormat="mm"
              />
            ) : null}
          </div>
        </div>
        <div className="flex flex-col col-span-2 justify-center relative">
          <div className="flex flex-1 items-center">
            <StreamTitle headerText={headerText} />
          </div>
          <div className="flex flex-col absolute bottom-6 left-0">
            {isPrestream ? (
              <StreamCountdown
                className="text-[216px] leading-none text-chungking-white font-bold tabular-nums helper-alternate-digits"
                timeFormat="ss"
              />
            ) : null}
          </div>
        </div>
      </div>
    </TRPCProvider>
  );
}
