import { useRouter } from 'next/router';
import * as React from 'react';
import { OverlayLayout } from '~/layouts/overlay-layout';
import { createNextPage } from '~/lib/create-next-page';
import { useOnMount } from '~/lib/hooks/use-on-mount';
import { parseString } from '~/lib/query-parser';
import { StudioClockInterface } from '~/modules/studio-clock/studio-clock-interface';

function StudioClockPage() {
  const router = useRouter();
  const [isClockRendered, setIsClockRendered] = React.useState(false);

  useOnMount(() => {
    setIsClockRendered(true);
  });

  const clockProps = React.useMemo(
    () => ({
      uiFont: parseString(router.query.uiFont) ?? undefined,
      watchFaceFont: parseString(router.query.watchFaceFont) ?? undefined,
      watchFaceColor: parseString(router.query.watchFaceColor) ?? undefined,
    }),
    [router.query],
  );

  return <div>{isClockRendered && <StudioClockInterface {...clockProps} />}</div>;
}

export default createNextPage(StudioClockPage, {
  layout: OverlayLayout,
});
