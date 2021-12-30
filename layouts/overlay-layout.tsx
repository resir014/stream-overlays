import * as React from 'react';
import { LayoutType } from '.';
import { GoogleFontsPrefetch } from '~/modules/webfonts/google-fonts-prefetch';

export const OverlayLayout: LayoutType = page => {
  return (
    <>
      <GoogleFontsPrefetch />
      <div className="flex flex-col w-full h-screen bg-transparent overflow-hidden">{page}</div>
    </>
  );
};
