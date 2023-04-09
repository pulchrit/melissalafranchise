import Head from 'next/head';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Layout from '../components/layout';
import '../styles/globals.scss';

// Prevent fontawesome from adding <style> element to <head>
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Melissa Lafranchise</title>
        <meta
          name="description"
          content="Education, experience, and portfolio for Melissa Lafranchise"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
