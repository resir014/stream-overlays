'use client';

import Countdown from 'react-countdown';

export interface CountdownTimerProps {
  minutes: number;
}

export function CountdownTimer({ minutes }: CountdownTimerProps) {
  return (
    <Countdown
      date={Date.now() + minutes}
      precision={3}
      renderer={(props) => (
        <p className="block text-4xl font-bold text-white">
          {props.minutes.toString().padStart(2, '0')}:{props.seconds.toString().padStart(2, '0')}
        </p>
      )}
    />
  );
}
