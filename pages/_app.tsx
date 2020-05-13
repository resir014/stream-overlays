import * as React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import 'typeface-inter'
import 'typeface-crimson-text'
import 'typeface-work-sans'
import 'normalize.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
