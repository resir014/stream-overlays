/**
 * Returns a value between two numbers at the given delta.
 * e.g. `lerp(1, 2, 0.5) === 1.5`
 *
 * @param start Start value.
 * @param end End value.
 * @param delta The percentage position between start value and end value.
 */
export default function lerp(start: number, end: number, delta: number): number {
  return end + (start - end) * delta;
}
