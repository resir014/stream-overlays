/* eslint-disable react/no-danger */
import * as React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import emotionCache from '~/utils/emotionCache';

// eslint-disable-next-line @typescript-eslint/unbound-method
const { extractCritical } = createEmotionServer(emotionCache);

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const { css, ids } = extractCritical(initialProps.html);
    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <style
          key="emotion-css"
          data-emotion-css={ids.join(' ')}
          dangerouslySetInnerHTML={{ __html: css }}
        />,
      ],
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
