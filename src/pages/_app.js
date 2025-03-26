import { AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import FloatingIcons from '../components/FloatingIcons';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <FloatingIcons />
      <AnimatePresence mode="wait">
        <PageTransition key={router.route}>
          <Component {...pageProps} />
        </PageTransition>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
