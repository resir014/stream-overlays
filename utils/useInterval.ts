import * as React from 'react';

type SimpleCallback = () => void;

/**
 * `useInterval()` hook stolen from Dan's blog:
 * https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */
export default function useInterval(callback: SimpleCallback, delay = 1000) {
  const savedCallback = React.useRef<SimpleCallback>();

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
