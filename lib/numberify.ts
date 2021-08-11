/**
 * Converts a string-like value to a number.
 *
 * @param maybeString A string or an array of string
 */
export function numberify(maybeString?: string | string[]) {
  if (maybeString) {
    if (Array.isArray(maybeString)) {
      const [num] = maybeString;
      return Number(num);
    }

    return Number(maybeString);
  }

  return undefined;
}
