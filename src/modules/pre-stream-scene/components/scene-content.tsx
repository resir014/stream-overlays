import { StreamCountdown } from './stream-countdown';
import { StreamDateTime } from './stream-date-time';
import { StreamTitle } from './stream-title';
import { type PreStreamVariants } from '~/@pre-stream/shared/types';
import { TRPCProvider } from '~/lib/trpc/trpc-provider';

export interface SceneContentProps {
  headerText: string;
  variant?: PreStreamVariants;
}

export function SceneContent({ headerText, variant }: SceneContentProps) {
  const isPrestream = variant === 'pre-stream';

  return (
    <TRPCProvider>
      <div className="z-20 grid w-full grid-cols-3 gap-8 px-[128px] pb-[24px] pt-[96px]">
        <div className="relative flex flex-col justify-center">
          <div className="flex flex-1 items-center">
            <div className="flex flex-col space-y-2">
              <StreamDateTime
                className="text-4xl leading-none text-chungking-white"
                dateFormat="EEEE"
              />
              <StreamDateTime className="text-4xl font-bold leading-none text-chungking-white" />
            </div>
          </div>
          <div className="absolute bottom-6 left-0 flex flex-col">
            {isPrestream ? (
              <StreamCountdown
                className="helper-alternate-digits text-[216px] font-bold tabular-nums leading-none text-chungking-white"
                timeFormat="mm"
              />
            ) : null}
          </div>
        </div>
        <div className="relative col-span-2 flex flex-col justify-center">
          <div className="flex flex-1 items-center">
            <StreamTitle headerText={headerText} />
          </div>
          <div className="absolute bottom-6 left-0 flex flex-col">
            {isPrestream ? (
              <StreamCountdown
                className="helper-alternate-digits text-[216px] font-bold tabular-nums leading-none text-chungking-white"
                timeFormat="ss"
              />
            ) : null}
          </div>
        </div>
      </div>
    </TRPCProvider>
  );
}
