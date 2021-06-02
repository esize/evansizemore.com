import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Spacer,
  Container,
  Center,
  Circle,
} from '@chakra-ui/react';

import Image from 'next/image';

export default function Home() {
  return (
    <Container maxW='container.xl' mt={['14', '15', '48']}>
      <Flex direction={['column', 'column', 'row']}>
        <Box flex='1'>
          <Heading
            as='h1'
            fontSize={['7xl', '7xl', '8xl']}
            mb={['5', '8', '10']}
          >
            Hi, I'm Evan
          </Heading>

          <Text fontSize={['4xl', '4xl', '5xl']} mb='8'>
            I’ll help you take control of your online presence.
          </Text>
          <Flex justifyContent={['center', 'center', 'left']}>
            <Button
              fontSize='xl'
              fontWeight='bold'
              bgColor='brand.500'
              paddingX='10'
              paddingY='8'
            >
              Let's Talk
            </Button>
          </Flex>
        </Box>
        <Center
          ml={['20', '20', '10']}
          mr={['20', '20', '0']}
          mt={['16', '16', '0']}
        >
          <Image
            src='/evan.jpg'
            width={350}
            height={350}
            className='roundedImage'
          />
        </Center>
      </Flex>
    </Container>
  );
}
