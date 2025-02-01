import '@/styles/globals.css';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Beomgu&apos;s Portfolio</title>
        <meta name="description" content="Beomgu's Portfolio"></meta>
      </Head>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
