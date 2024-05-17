'use client';

import { useRouter } from 'next/router';
import { Suspense, useMemo } from 'react';
import Countdown from 'react-countdown';
import { OverlayLayout } from '~/layouts/overlay-layout';
import { parseNumber } from '~/lib/query-parser';

export default function CountdownTimerPage() {
  const router = useRouter();

  const minutes = useMemo(
    () => (parseNumber(router.query.minutes) ?? 1) * 60 * 1000,
    [router.query],
  );

  return (
    <OverlayLayout>
      <div>
        <Suspense>
          <Countdown
            date={Date.now() + minutes}
            precision={3}
            renderer={props => (
              <p className="block text-4xl font-bold text-white">
                {props.minutes.toString().padStart(2, '0')}:
                {props.seconds.toString().padStart(2, '0')}
              </p>
            )}
          />
        </Suspense>
      </div>
    </OverlayLayout>
  );
}
