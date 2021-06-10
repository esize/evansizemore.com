import {
  Heading,
  Container,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Textarea,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Contact() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmitForm(values) {
    let config = {
      method: 'post',
      url: 'http://localhost:3000/api/contact',
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    };

    try {
      const response = await axios(config);
      console.log(response);
      if (response.status == 200) {
        reset();
        toast(
          'success',
          'Thank you for contacting us, we will be in touch soon.'
        );
      }
    } catch (err) {}
  }

  return (
    <Container maxW='container.xl' mt={['14', '15', '48']}>
      <Heading as='h1' fontSize={['7xl', '7xl', '8xl']} mb={['5', '8', '10']}>
        Contact
      </Heading>

      <form onSubmit={handleSubmit(onSubmitForm)}>
        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor='name'>Name</FormLabel>
          <Input
            id='name'
            placeholder='Full Name'
            {...register('name', { required: 'You must enter your name' })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.email}>
          <FormLabel htmlFor='email'>Email</FormLabel>
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
          <FormLabel htmlFor='message'>Message</FormLabel>
          <Textarea
            id='message'
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
          bgColor='brand.500'
          paddingX='10'
          paddingY='8'
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
