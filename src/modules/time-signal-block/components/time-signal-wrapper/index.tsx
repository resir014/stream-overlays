import { TimeSignal } from './components/time-signal';
import { TRPCProvider } from '~/lib/trpc/trpc-provider';

export default function TimeSignalWrapper() {
  return (
    <TRPCProvider>
      <div className="flex h-full min-h-screen w-full flex-col justify-end">
        <TimeSignal />
      </div>
    </TRPCProvider>
  );
}
