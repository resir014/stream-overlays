import { withTRPC } from '@trpc/next';
import * as React from 'react';
import Head from 'next/head';

import { NextAppProps } from '~/interfaces/next';

import '~/styles/fonts';
import '~/styles/globals.css';
import { AppRouter } from '~/server/router';

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
    // The `NEXT_PUBLIC_SITE_URL` variable is overwritten in `.env.development` and
    // `.env.production`, as well as in production through Vercel's Environment Variables settings.
    // https://github.com/vercel/next.js/discussions/16429#discussioncomment-1302156
    const url = process.env.NEXT_PUBLIC_SITE_URL
      ? `${process.env.NEXT_PUBLIC_SITE_URL}/api/trpc`
      : 'http://localhost:3000/api/trpc';

    return {
      url,
    };
  },
})(MyApp);
