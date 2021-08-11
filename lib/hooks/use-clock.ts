import * as React from 'react';

export function useClock() {
  const raf = React.useRef<number>();
  const [time, setTime] = React.useState<Date>(new Date());

  React.useEffect(() => {
    const tick = () => {
      setTime(new Date());
      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);

    return () => {
      if (raf.current) {
        cancelAnimationFrame(raf.current);
      }
    };
  }, []);

  return time;
}
