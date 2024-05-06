/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';

export function useOnMount(callback: React.EffectCallback) {
  React.useEffect(callback, []);
}
