import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <title>Beomgu&apos;s Portfolio</title>
      <meta name="description" content="Beomgu's Portfolio"></meta>

      {/* Open Graph (OG) Tags */}
      <meta property="og:title" content="Beomgu's Portfolio" />
      <meta property="og:description" content="This is Beomgu's Portfolio using Next.js 15" />
      <meta property="og:image" content="https://beomgu-portfolio.vercel.app/preview.png" />
      <meta property="og:url" content="https://beomgu-portfolio.vercel.app/" />
      <meta property="og:type" content="website" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Beomgu's Portfolio" />
      <meta name="twitter:description" content="This is Beomgu's Portfolio using Next.js 15" />
      <meta name="twitter:image" content="https://beomgu-portfolio.vercel.app/preview.png" />

      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
