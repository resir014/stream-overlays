import * as React from 'react';
import Head from 'next/head';

import { NextAppProps } from '~/interfaces/next';

import '~/styles/fonts';
import '~/styles/globals.css';

export default function MyApp({ Component, pageProps }: NextAppProps): JSX.Element {
  const getLayout = Component.layout ?? ((children: JSX.Element) => children);
  const page = getLayout(<Component {...pageProps} />);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {page}
    </>
  );
}
