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
    <Container maxW='container.xl' mt='48'>
      <Flex direction={['column', 'column', 'row']}>
        <Box>
          <Heading as='h1' size='4xl' mb='10'>
            Hi, I'm Evan
          </Heading>

          <Text fontSize='5xl' mb='8'>
            I’ll help you take control of your online presence.
          </Text>

          <Button
            fontSize='xl'
            fontWeight='bold'
            bgColor='brand.500'
            paddingX='10'
            paddingY='8'
          >
            Let's Talk
          </Button>
        </Box>
        <Spacer />
        <Box>
          <Center>
            {/* <Image
              src='/evan.jpg'
              boxSize={[180, 200, 300, 350]}
              borderRadius='full'
              fit='cover'
            ></Image> */}
            <Box
              position='relative'
              width='fit-content'
              height='fit-content'
              borderRadius='full'
              overflow='hidden'
            >
              <Image
                src='/evan.jpg'
                width={350}
                height={350}
                objectFit='cover'
              />
            </Box>
          </Center>
        </Box>
      </Flex>
    </Container>
  );
}
