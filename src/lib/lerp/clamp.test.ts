import { describe, expect, test } from 'vitest';
import clamp from './clamp';

describe('Test clamp util', () => {
  test('returns the correct values', () => {
    expect(clamp(1.1, 0, 1)).toEqual(1);
    expect(clamp(-0.2, 0, 1)).toEqual(0);
    expect(clamp(0.5, 0, 1)).toEqual(0.5);
  });
});
