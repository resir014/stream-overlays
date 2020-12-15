import * as React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { CacheProvider, Global } from '@emotion/react'

import { ChungkingProvider } from '@resir014/chungking-react'
import OverlayGlobal from '~/styles/OverlayGlobal'
import emotionCache from '~/utils/emotionCache'

import 'typeface-inter'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ChungkingProvider>
        <Global styles={OverlayGlobal} />
        <Component {...pageProps} />
      </ChungkingProvider>
    </CacheProvider>
  )
}
