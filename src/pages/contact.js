import React from 'react'
import { Container, Heading, Flex } from '@chakra-ui/layout'
import { Box, FormControl, FormLabel, Input, FormHelperText, Textarea } from '@chakra-ui/react'
import Layout from '../components/Layout/Layout'
import PageHeading from '../components/UI/PageHeading/PageHeading'

const Contact = () => {
  return (
    <Layout>
      <Container maxW="container.xl" pt="4">
        <Flex direction="column" mb="12">
          <Heading as="h2">Let's get in touch</Heading>
          <Heading as="h3" size="md" fontWeight="normal">Have a question, need help, or interested in getting started in Web?</Heading>
        </Flex>
        <Box maxW="3xl" bgColor="white" p="10" rounded="md" boxShadow="md">
          <FormControl id="email" mb="6">
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="Your name" />
          </FormControl>
          <FormControl id="email" mb="6">
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Your email" />
          </FormControl>
          <Textarea placeholder="Your message" />
        </Box>
      </Container>
    </Layout>
  )
}

export default Contact
