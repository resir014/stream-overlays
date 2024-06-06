import { useRouter } from 'next/router';
import { Suspense, useMemo } from 'react';
import { OverlayLayout } from '~/layouts/overlay-layout';
import { parseString } from '~/lib/query-parser';
import { StudioClockInterface } from '~/modules/studio-clock/studio-clock-interface';

export default function NYEClockPage() {
  const router = useRouter();

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
      <div>
        <Suspense>
          <StudioClockInterface {...clockProps} />
        </Suspense>
      </div>
    </OverlayLayout>
  );
}
