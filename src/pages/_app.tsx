import * as React from 'react';
import Head from 'next/head';

import { trpc } from '~/lib/trpc';
import { NextAppProps } from '~/interfaces/next';

import '~/styles/fonts';
import '~/styles/globals.css';

function MyApp({ Component, pageProps }: NextAppProps): JSX.Element {
  const getLayout = Component.layout ?? ((children: JSX.Element) => children);
  const page = getLayout(<Component {...pageProps} />);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {page}
    </>
  );
}

export default trpc.withTRPC(MyApp);
