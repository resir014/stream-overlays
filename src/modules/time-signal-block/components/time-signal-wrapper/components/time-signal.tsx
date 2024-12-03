import { useEffect, useMemo, useRef } from 'react';
import { useClock } from '~/lib/hooks/use-clock';
import { useOverlayData } from '~/lib/trpc/notion';

export function TimeSignal() {
  const time = useClock();
  const { overlayData } = useOverlayData();
  const playButtonRef = useRef<HTMLButtonElement>(null);
  const audio = useMemo(() => new Audio('/static/audio/start-chime.ogg'), []);

  const startOfTimeSignal = useMemo(
    () => (overlayData?.timeSignal ? new Date(overlayData.timeSignal) : undefined),
    [overlayData?.timeSignal],
  );

  useEffect(() => {
    if (time.toISOString() === startOfTimeSignal?.toISOString()) {
      // Fake a click event on a hidden button which plays the audio file.
      playButtonRef.current?.click();
    }
  }, [startOfTimeSignal, time]);

  return (
    <button ref={playButtonRef} className="hidden" type="button" onClick={() => audio.play()}>
      Play
    </button>
  );
}
