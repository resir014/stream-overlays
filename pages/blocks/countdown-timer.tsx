import { useRouter } from 'next/router';
import * as React from 'react';
import Countdown from 'react-countdown';
import { OverlayLayout } from '~/layouts/overlay-layout';
import { createNextPage } from '~/lib/create-next-page';
import { useOnMount } from '~/lib/hooks/use-on-mount';
import { parseNumber } from '~/lib/query-parser';

function CountdownTimerPage() {
  const router = useRouter();
  const [isCountdownRendered, setIsCountdownRendered] = React.useState(false);

  useOnMount(() => {
    setIsCountdownRendered(true);
  });

  const minutes = React.useMemo(
    () => (parseNumber(router.query.minutes) ?? 1) * 60 * 1000,
    [router.query],
  );

  return (
    <div>
      {isCountdownRendered ? (
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
      ) : null}
    </div>
  );
}

export default createNextPage(CountdownTimerPage, {
  layout: OverlayLayout,
});
