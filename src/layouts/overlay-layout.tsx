import * as React from 'react';
import { GoogleFontsPrefetch } from '~/modules/webfonts/google-fonts-prefetch';

export function OverlayLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <GoogleFontsPrefetch />
      <div className="flex flex-col w-full h-screen bg-transparent overflow-hidden">{children}</div>
    </>
  );
}
