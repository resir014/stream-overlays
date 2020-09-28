import * as React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { CacheProvider, Global } from '@emotion/core'
import { cache } from 'emotion'

import { Theme, GlobalStyles } from '~/components/chungking-core'
import OverlayGlobal from '~/styles/OverlayGlobal'

import 'typeface-inter'
import 'typeface-crimson-text'
import 'typeface-roboto-mono'
import 'normalize.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Theme>
        <Global styles={GlobalStyles} />
        <Global styles={OverlayGlobal} />
        <Component {...pageProps} />
      </Theme>
    </CacheProvider>
  )
}
