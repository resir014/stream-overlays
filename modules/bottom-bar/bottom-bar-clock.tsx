import { format } from 'date-fns';
import * as React from 'react';
import { useClock } from '~/lib/hooks/use-clock';
import { useOnMount } from '~/lib/hooks/use-on-mount';

export function BottomBarClock() {
  const time = useClock();
  const [mounted, setMounted] = React.useState<boolean>(false);

  const clockSeparator = React.useMemo(() => {
    const ms = time.getMilliseconds();

    if (ms < 500) {
      return ':';
    }

    return ' ';
  }, [time]);

  useOnMount(() => {
    setMounted(true);
  });

  const renderClock = () => {
    if (mounted) {
      return (
        <span className="flex items-center text-chungking-white text-2xl leading-none font-mono font-bold">
          {format(time, 'HH')}
          {clockSeparator}
          {format(time, 'mm')}
        </span>
      );
    }

    return null;
  };

  return (
    <div className="flex items-center pl-4 text-right space-x-2">
      {renderClock()}
      <div className="inline-flex w-3 h-3 rounded-full bg-chungking-blue-500" aria-hidden />
    </div>
  );
}
