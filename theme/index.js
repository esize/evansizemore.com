import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Spectral',
    body: 'Spectral',
  },
  styles: {
    global: {
      body: {
        bg: '#2A2558',
        color: 'white',
      },
    },
  },
  colors: {
    brand: {
      500: '#C43E49',
    },
  },
});

export default theme;
