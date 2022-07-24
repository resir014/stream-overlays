import { withTRPC } from '@trpc/next';
import * as React from 'react';
import Head from 'next/head';

import { NextAppProps } from '~/interfaces/next';

import '~/styles/fonts';
import '~/styles/globals.css';
import { AppRouter } from '~/server/router';

// https://github.com/nexxeln/trpc-nextjs/blob/ca61d28d8e5350f172d3952bfa6093b06da9e4b9/src/pages/_app.tsx#L11-L17
function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return '';
  }

  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }

  return `http://localhost:${process.env.PORT ?? 3000}`;
}

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

export default withTRPC<AppRouter>({
  config() {
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      url,
    };
  },
  ssr: false,
})(MyApp);
