import 'css/tailwind.css';
import 'css/fonts.css';

import type { AppProps } from 'next/app';

import Footer from '@/components/footer';
import Navigation from '@/components/navigation';
import Container from '@/layouts/container';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </>
  );
}

export default MyApp;
