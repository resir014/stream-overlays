import { useRouter } from 'next/router';
import * as React from 'react';
import { OverlayLayout } from '~/layouts/overlay-layout';
import { createNextPage } from '~/lib/create-next-page';
import { useOnMount } from '~/lib/hooks/use-on-mount';
import { parseString } from '~/lib/query-parser';
import { NYEClockInterface } from '~/modules/nye/nye-clock-interface';

function NYEClockPage() {
  const router = useRouter();
  const [isClockRendered, setIsClockRendered] = React.useState(false);

  useOnMount(() => {
    setIsClockRendered(true);
  });

  const font = React.useMemo(
    () => parseString(router.query.fonts) ?? undefined,
    [router.query.fonts],
  );

  return <div>{isClockRendered && <NYEClockInterface fontFamily={font} />}</div>;
}

export default createNextPage(NYEClockPage, {
  layout: OverlayLayout,
});
