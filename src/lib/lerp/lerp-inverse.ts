/**
 * Returns the delta of a number between two other numbers.
 */
export default function lerpInverse(value: number, start: number, end: number): number {
  return start === end ? 0 : (value - start) / (end - start); // prevent division by 0
}
