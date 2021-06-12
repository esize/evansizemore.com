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
    mojo: {
      DEFAULT: '#C43E49',
      50: '#FAEEEF',
      100: '#F4DADC',
      200: '#E8B3B7',
      300: '#DC8C93',
      400: '#D0656E',
      500: '#C43E49',
      600: '#9F3039',
      700: '#77252B',
      800: '#50191D',
      900: '#290D0F',
    },
  },
});

export default theme;
