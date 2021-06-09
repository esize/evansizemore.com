import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Spacer,
  Text,
} from '@chakra-ui/layout';

const AngledContainer = () => {
  return (
    <Box backgroundColor='#963038' borderTop='8px #963038 solid' pb='36'>
      <Container maxW='container.xl'>
        <Flex>
          <Spacer></Spacer>
          <Heading
            fontSize='6xl'
            maxW='container.md'
            as='h2'
            textAlign='right'
            fontWeight='700'
            mb='20'
          >
            <i>
              Can’t anyone <br />
              build a website these days?
            </i>
          </Heading>
        </Flex>
        <Text fontSize='2xl' mb='10'>
          Website creation tools like WordPress, Squarspace, and Wix have made
          creating a website for your brand easier than ever before. So why pay
          someone to make a website from scratch?
        </Text>
        <Text fontSize='2xl' mb='10'>
          A custom built personal website allows you to truly express your brand
          in a way that wouldn’t be possible with these pre-built solutions.
          With my help, you will be able to create a unique site that will set
          you apart, and automatically wow directors. A custom built website is
          more customizable, faster, and looks completely unique, unlike the
          pre-built template options.
        </Text>
        <Text fontSize='2xl' mb='10'>
          But it’s not just the website. My experience creating digital brands
          allows me to assist you with content creation, website design, and
          Social Media: skills that would take you years to develop on your own.
          In particular, my knowledge of Search Engine Optimization (SEO) will
          help you control how your name shows up in search engines like Google.
        </Text>
        <Text fontSize='2xl' pb='10'>
          Anyone can build a website. But your digital presence deserves to be
          built by an expert.
        </Text>
      </Container>
    </Box>
  );
};

export default AngledContainer;
