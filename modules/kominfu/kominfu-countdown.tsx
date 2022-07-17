import * as React from 'react';

export default function KominfuCountdown() {
  const [timeRemaining, setTimeRemaining] = React.useState('...');
  const intervalRef = React.useRef<NodeJS.Timer | null>(null);

  const padNumbers = (num: number) => {
    return num.toString().padStart(2, '0');
  };

  React.useEffect(() => {
    const countdownDate = new Date('Jul 21, 2022 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeRemaining(
        `${padNumbers(days)}:${padNumbers(hours)}:${padNumbers(minutes)}:${padNumbers(seconds)}`,
      );
    }, 1000);

    intervalRef.current = interval;

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <span className="font-bold text-7xl leading-none text-chungking-white text-opacity-25 tabular-nums helper-alternate-digits">
      {timeRemaining}
    </span>
  );
}
