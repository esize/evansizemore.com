import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';

import theme from '../theme';

import '../theme/round.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </ChakraProvider>
  );
}
export default MyApp;
