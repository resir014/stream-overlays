function isValidHex(color: unknown): boolean {
  if (typeof color === 'string') {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
  }

  return false;
}

export default isValidHex;
