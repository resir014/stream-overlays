import { describe, expect, test } from 'vitest';
import lerp from './lerp';

describe('Test lerp util', () => {
  test('returns the correct values', () => {
    expect(lerp(1, 2, 0.5)).toEqual(1.5);
  });
});
