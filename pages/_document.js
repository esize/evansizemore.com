import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='preload'
            href='../fonts/spectral-v7-latin500.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='../fonts/spectral-v7-latin700.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
