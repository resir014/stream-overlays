import * as React from 'react';
import { useClock } from '~/lib/hooks/use-clock';
import { useOverlayData } from '../overlay-data/use-overlay-data';

export interface TimeSignalWrapperProps {
  startH: number;
  startM: number;
}

export default function TimeSignalWrapper() {
  const time = useClock();
  const { overlayData } = useOverlayData();
  const playButtonRef = React.useRef<HTMLButtonElement>(null);
  const audio = React.useMemo(() => new Audio('/static/audio/start-chime.ogg'), []);

  const startOfTimeSignal = React.useMemo(
    () => (overlayData?.timeSignal ? new Date(overlayData.timeSignal) : undefined),
    [overlayData?.timeSignal],
  );

  React.useEffect(() => {
    if (time.toISOString() === startOfTimeSignal?.toISOString()) {
      // Fake a click event on a hidden button which plays the audio file.
      playButtonRef.current?.click();
    }
  }, [startOfTimeSignal, time]);

  return (
    <div className="flex flex-col justify-end w-full h-full min-h-screen">
      <button ref={playButtonRef} className="hidden" type="button" onClick={() => audio.play()}>
        Play
      </button>
    </div>
  );
}
