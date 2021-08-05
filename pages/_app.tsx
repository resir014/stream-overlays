import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';

import { ChungkingProvider } from '@resir014/chungking-react';
import emotionCache from '~/utils/emotionCache';

import '~/styles/fonts';
import '~/styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ChungkingProvider disableResetCSS disableInjection>
        <Component {...pageProps} />
      </ChungkingProvider>
    </CacheProvider>
  );
}
