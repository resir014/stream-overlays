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
    <div className="flex items-center justify-center w-[96px] h-[32px] py-1 text-chungking-black bg-chungking-white rounded-full leading-none font-bold">
      <span style={styles}>{format(time, 'HH:mm')}</span>
    </div>
  );
}
