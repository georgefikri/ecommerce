import { AppProps } from 'next/app';
import Head from 'next/head';
import '@styles/styles.css';
import { appName } from '@services';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Shop {appName()}</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
