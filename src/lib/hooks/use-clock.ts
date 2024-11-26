/* eslint-disable @typescript-eslint/no-unsafe-call */
import { getDate, getHours, getMinutes, getMonth, getSeconds, getYear } from 'date-fns';
import { dequal } from 'dequal';
import { createWithEqualityFn as create } from 'zustand/traditional';

export interface DateMap {
  year: number;
  monthIndex: number;
  day: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function createDateMap(date: Date): DateMap {
  return {
    year: getYear(date),
    // by default getMonth() is zero-indexed
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth
    monthIndex: getMonth(date),
    day: getDate(date),
    hours: getHours(date),
    minutes: getMinutes(date),
    seconds: getSeconds(date),
  };
}

function createDateObjectFromMap({
  year,
  monthIndex,
  day,
  hours,
  minutes,
  seconds,
}: DateMap): Date {
  return new Date(year, monthIndex, day, hours, minutes, seconds);
}

export const useClockStore = create<DateMap>(() => {
  const date = new Date();
  return createDateMap(date);
});

export function useClock() {
  const time = useClockStore(
    state => createDateObjectFromMap(state),
    (prevState, newState) => dequal(prevState, newState),
  );
  return time;
}

if (typeof window !== 'undefined') {
  const tick = () => {
    const date = new Date();
    useClockStore.setState(createDateMap(date));

    requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}
