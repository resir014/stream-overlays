export function isValidHex(color: unknown): boolean {
  if (typeof color === 'string') {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
  }

  return false;
}

export function resolveHexColor(color?: string) {
  if (!color) {
    return undefined;
  }

  const normalisedHexColor = color.startsWith('#') ? color : `#${color}`;

  if (isValidHex(normalisedHexColor)) {
    return normalisedHexColor;
  }

  return undefined;
}
