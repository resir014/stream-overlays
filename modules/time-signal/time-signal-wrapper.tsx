import * as React from 'react';
import { useClock } from '~/lib/hooks/use-clock';

export interface TimeSignalWrapperProps {
  startH: number;
  startM: number;
}

const TimeSignalWrapper: React.FC<TimeSignalWrapperProps> = ({ startH, startM }) => {
  const time = useClock();
  const playButtonRef = React.useRef<HTMLButtonElement>(null);
  const audio = React.useMemo(() => new Audio('/static/audio/timesignal.ogg'), []);

  const [hours, minutes, seconds] = [time.getHours(), time.getMinutes(), time.getSeconds()];

  React.useEffect(() => {
    // If top of the hour (m === 0):
    // - use previous hour, else keep current hour
    // - use minute 59, else m - 1
    if (
      hours === (startM === 0 ? startH - 1 : startH) &&
      minutes === (startM === 0 ? 59 : startM - 1) &&
      seconds === 55
    ) {
      // Fake a click event on a hidden button which plays the audio file.
      playButtonRef.current?.click();
    }
  }, [hours, minutes, seconds, startH, startM]);

  return (
    <div className="flex flex-col justify-end w-full h-full min-h-screen">
      <button ref={playButtonRef} className="hidden" type="button" onClick={() => audio.play()}>
        Play
      </button>
    </div>
  );
};

export default TimeSignalWrapper;
