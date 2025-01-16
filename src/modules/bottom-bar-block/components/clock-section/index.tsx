'use client';

import { createStyleObject } from '@capsizecss/core';
import fontMetrics from '@capsizecss/metrics/inter';
import { format } from 'date-fns';
import { useClock } from '~/lib/hooks/use-clock';

const styles = createStyleObject({
  capHeight: 18,
  lineGap: 0,
  fontMetrics,
});

export function BottomBarClock() {
  const time = useClock();

  return (
    <div className="flex h-[32px] w-[96px] items-center justify-center rounded-full bg-chungking-white py-1 font-bold leading-none text-chungking-black">
      <span style={styles}>{format(time, 'HH:mm')}</span>
    </div>
  );
}
