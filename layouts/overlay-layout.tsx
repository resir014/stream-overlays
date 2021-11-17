import * as React from 'react';
import { LayoutType } from '.';

export const OverlayLayout: LayoutType = page => {
  return <div className="flex flex-col w-full h-screen bg-transparent overflow-hidden">{page}</div>;
};
