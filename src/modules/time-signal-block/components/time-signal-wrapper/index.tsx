import { TRPCProvider } from '~/lib/trpc/trpc-provider';
import { TimeSignal } from './components/time-signal';

export default function TimeSignalWrapper() {
  return (
    <TRPCProvider>
      <div className="flex flex-col justify-end w-full h-full min-h-screen">
        <TimeSignal />
      </div>
    </TRPCProvider>
  );
}
