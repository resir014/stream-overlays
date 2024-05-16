import { type PropsWithChildren } from 'react';
import { GoogleFontsPrefetch } from '~/modules/webfonts/google-fonts-prefetch';

export function OverlayLayout({ children }: PropsWithChildren) {
  return (
    <>
      <GoogleFontsPrefetch />
      <div className="flex flex-col w-full h-screen bg-transparent overflow-hidden">{children}</div>
    </>
  );
}
