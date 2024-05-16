import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { OverlayLayout } from '~/layouts/overlay-layout';
import { useOnMount } from '~/lib/hooks/use-on-mount';
import { parseString } from '~/lib/query-parser';
import { StudioClockInterface } from '~/modules/studio-clock/studio-clock-interface';

export default function StudioClockPage() {
  const router = useRouter();
  const [isClockRendered, setIsClockRendered] = useState(false);

  useOnMount(() => {
    setIsClockRendered(true);
  });

  const clockProps = useMemo(
    () => ({
      uiFont: parseString(router.query.uiFont) ?? undefined,
      watchFaceFont: parseString(router.query.watchFaceFont) ?? undefined,
      watchFaceColor: parseString(router.query.watchFaceColor) ?? undefined,
    }),
    [router.query],
  );

  return (
    <OverlayLayout>
      <div>{isClockRendered ? <StudioClockInterface {...clockProps} /> : null}</div>
    </OverlayLayout>
  );
}
