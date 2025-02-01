import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Component {...pageProps} />;
  }

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
