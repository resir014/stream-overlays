/**
 * Helper function to clamp a value between a min-max range.
 */
export default function clamp(value: number, min: number, max: number): number {
  if (value > max) return max;
  if (value < min) return min;
  return value;
}
