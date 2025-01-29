import { describe, expect, test } from 'vitest';
import { isValidHex } from './colors';

describe('Test color utils', () => {
  describe('isValidHex', () => {
    test('correctly returns true or false based on hex validity', () => {
      expect(isValidHex('#33b5e5')).toBe(true);
      expect(isValidHex('#FA0')).toBe(true);
      expect(isValidHex('#fabb')).toBe(false);
      expect(isValidHex('#FAANG1')).toBe(false);
      expect(isValidHex('33b5e5')).toBe(false);
      expect(isValidHex('green')).toBe(false);
    });
  });
});
