import { createStyleString } from '@capsizecss/core';
import fontMetrics from '@capsizecss/metrics/inter';
import { format } from 'date-fns';
import * as React from 'react';
import { useClock } from '~/lib/hooks/use-clock';
import { useOnMount } from '~/lib/hooks/use-on-mount';

const styles = createStyleString('capsized-text', {
  capHeight: 18,
  lineGap: 0,
  fontMetrics,
});

export function BottomBarClock() {
  const time = useClock();
  const [mounted, setMounted] = React.useState<boolean>(false);

  useOnMount(() => {
    setMounted(true);
  });

  const renderClock = () => {
    if (mounted) {
      return (
        <div className="flex items-center justify-center w-[96px] h-[32px] py-1 text-chungking-black bg-chungking-white rounded-xl leading-none font-bold">
          <span className="capsized-text">{format(time, 'HH:mm')}</span>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="flex items-center pl-4 text-right space-x-2">
      {renderClock()}
      <style jsx>{`
        ${styles}
      `}</style>
    </div>
  );
}
