import {
  Heading,
  Container,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Contact() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const toast = useToast();

  async function onSubmitForm(values) {
    let config = {
      method: 'post',
      url: `/api/contact`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    };

    try {
      const response = await axios(config);
      if (response.status == 200) {
        toast({
          title: 'Submitted!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        reset();
      }
    } catch (err) {}
  }

  return (
    <Container maxW='container.xl' mt={['14', '15', '48']}>
      <Heading as='h1' fontSize={['7xl', '7xl', '8xl']} mb={['5', '8', '10']}>
        Contact
      </Heading>

      <form onSubmit={handleSubmit(onSubmitForm)}>
        <FormControl isInvalid={errors.name} mb='5'>
          <FormLabel htmlFor='name' fontSize='lg' fontWeight='bold'>
            Name
          </FormLabel>
          <Input
            id='name'
            placeholder='Full Name'
            {...register('name', { required: 'You must enter your name' })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.email} mb='5'>
          <FormLabel htmlFor='email' fontSize='lg' fontWeight='bold'>
            Email
          </FormLabel>
          <Input
            id='email'
            placeholder='Email'
            {...register('email', {
              required: 'You must enter an email',
              minLength: {
                value: 8,
                message: 'This is not long enough to be an email',
              },
              maxLength: {
                value: 120,
                message: 'This is too long',
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'This needs to be a valid email address',
              },
            })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.message}>
          <FormLabel htmlFor='message' fontSize='lg' fontWeight='bold'>
            Message
          </FormLabel>
          <Textarea
            id='message'
            size='lg'
            placeholder='Write your message here...'
            {...register('message', {
              required: 'You must enter a message',
              maxLength: {
                value: 1000,
                message: "Your message can't be more than 1000 characters",
              },
              minLength: {
                value: 50,
                message: 'Your message must be longer than this!',
              },
            })}
          ></Textarea>
          <FormErrorMessage>
            {errors.message && errors.message.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          isLoading={isSubmitting}
          type='submit'
          fontSize='xl'
          fontWeight='bold'
          colorScheme='mojo'
          paddingX='10'
          paddingY='8'
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
