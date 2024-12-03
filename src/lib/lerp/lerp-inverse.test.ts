import { describe, expect, test } from 'vitest';
import lerpInverse from './lerp-inverse';

describe('Test lerpInverse util', () => {
  test('returns the correct values', () => {
    expect(lerpInverse(1.5, 1, 2)).toEqual(0.5);
  });
});
