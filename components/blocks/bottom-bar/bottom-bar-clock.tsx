import { format } from 'date-fns';
import * as React from 'react';
import useClock from '~/utils/useClock';
import useOnMount from '~/lib/hooks/use-on-mount';

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
        <span className="block text-chungking-white text-2xl leading-none font-semibold font-mono">
          {format(time, 'HH')}
          {clockSeparator}
          {format(time, 'mm')}
        </span>
      );
    }

    return null;
  };

  return (
    <div className="block px-4 text-right border-r-2 border-chungking-blue-500">
      {renderClock()}
    </div>
  );
}
