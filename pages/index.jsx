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
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Box overflow='hidden'>
      <Container maxW='container.xl' mt={['14', '15', '48']}>
        <Flex direction={['column', 'column', 'row']}>
          <Box flex='1'>
            <Heading
              as='h1'
              fontSize={['7xl', '7xl', '8xl']}
              mb={['5', '8', '10']}
            >
              Hi, I'm Evan!
            </Heading>

            <Text fontSize={['4xl', '4xl', '5xl']} mb='8'>
              I’ll help you take control of your online presence.
            </Text>
            <Flex justifyContent={['center', 'center', 'left']}>
              <Link href='/contact'>
                <Button
                  fontSize='xl'
                  fontWeight='bold'
                  bgColor='brand.500'
                  paddingX='10'
                  paddingY='8'
                >
                  Let's Talk
                </Button>
              </Link>
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
      <Box backgroundColor='#1B1739' width='100vw' mt='20' pt='20'>
        <Container maxW='container.xl'>
          <Flex direction={['column', 'column', 'row']}>
            <Box mr={['10', '10', '20']} ml={['10', '10', '0']}>
              <Heading
                as='h2'
                textDecoration='underline'
                textDecorationColor='brand.500'
                fontSize='5xl'
              >
                You need a digital brand.
              </Heading>

              <UnorderedList mt='12'>
                <ListItem fontSize='2xl'>
                  Have you Googled your name lately? The search results for your
                  name are more important than ever when it comes to being cast,
                  since the pandemic has made directors hyperfocused on your
                  digital presence.
                </ListItem>
                <ListItem fontSize='2xl'>
                  In masterclasses, Broadway stars often preach the importance
                  of defining your digital brand, since it is vital to your
                  success as a performer.
                </ListItem>
                <ListItem fontSize='2xl'>
                  Owning your home on the internet allows you to have complete
                  control over all aspects of your brand, making you appear like
                  the professional you are.
                </ListItem>
                <ListItem fontSize='2xl'>
                  Directors are inevitably going to search you up. Do you want
                  the first thing they see to be your childhood YouTube channel?
                  Digital branding ensures that they only see the best of you.
                </ListItem>
              </UnorderedList>
            </Box>
            <Box
              ml={['10', '10', '20']}
              mr={['10', '10', '0']}
              mt={['10', '10', '0']}
            >
              <Heading
                as='h2'
                textDecoration='underline'
                textDecorationColor='brand.500'
                fontSize='5xl'
              >
                Why work with me?
              </Heading>

              <UnorderedList mt='12'>
                <ListItem fontSize='2xl'>
                  As a former actor myself, I’ve had the privilege of working
                  with both Broadway stars and successful casting directors in
                  my role as a member of the leadership team for the Florida
                  State Thespian Festival.
                </ListItem>
                <ListItem fontSize='2xl'>
                  Through my experience with them, I know what casting directors
                  are looking for in an actor. Digital presence is a make or
                  break factor when it comes to getting your dream roles.
                </ListItem>
                <ListItem fontSize='2xl'>
                  Combined with 10 years of technological expertise, this
                  insider knowledge allows me to build a digital presence that
                  will book you roles.
                </ListItem>
              </UnorderedList>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
