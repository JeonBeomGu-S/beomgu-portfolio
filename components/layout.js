import Head from 'next/head';
import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Beomgu&apos;s Portfolio</title>
        <meta name="description" content="Beomgu's Portfolio"></meta>
      </Head>
      <div className="bg-primary">
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
}
