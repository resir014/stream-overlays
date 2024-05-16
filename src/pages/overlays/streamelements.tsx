import dynamic from 'next/dynamic';
import { OverlayLayout } from '~/layouts/overlay-layout';

const StreamElementsAlerts = dynamic(
  () => import('~/modules/alerts/streamelements-alerts').then(mod => mod.StreamElementsAlerts),
  { ssr: false },
);

export default function StreamElementsOverlayPage() {
  return (
    <OverlayLayout>
      <StreamElementsAlerts />
    </OverlayLayout>
  );
}
