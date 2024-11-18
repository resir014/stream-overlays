import { TRPCProvider } from '~/@pre-stream/shared/components/trpc-provider';
import { useCurrentStream } from '~/@pre-stream/shared/utils/stream-schedule';

export interface StreamTitleProps {
  headerText: string;
}

function StreamTitleInner({ headerText }: StreamTitleProps) {
  const { currentStream } = useCurrentStream();

  return (
    <div className="flex flex-col space-y-2">
      <span className="text-4xl leading-none text-chungking-white">{headerText}</span>
      <span className="text-4xl leading-none text-chungking-white font-bold">
        {currentStream?.stream_name ?? 'No current stream.'}
      </span>
    </div>
  );
}

export function StreamTitle(props: StreamTitleProps) {
  return (
    <TRPCProvider>
      <StreamTitleInner {...props} />
    </TRPCProvider>
  );
}
