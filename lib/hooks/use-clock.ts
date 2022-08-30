import { dequal } from 'dequal';
import create from 'zustand';

export interface DateMap {
  year: number;
  month: number;
  day: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function leftPad(maybeNumber: unknown, maxLength = 2) {
  if (typeof maybeNumber !== 'number') {
    return Number(maybeNumber).toString().padStart(maxLength, '0');
  }

  return maybeNumber.toString().padStart(2, '0');
}

function createDateMap(date: Date): DateMap {
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
}

function createDateObjectFromMap({ year, month, day, hours, minutes, seconds }: DateMap): Date {
  const isoDate = `${year}-${leftPad(month)}-${leftPad(day)}`;
  const isoTime = `${leftPad(hours)}:${leftPad(minutes)}:${leftPad(seconds)}+07:00`;
  return new Date(`${isoDate}T${isoTime}`);
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
