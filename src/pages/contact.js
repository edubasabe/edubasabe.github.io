import React from "react";
import { Container, Heading, Flex } from "@chakra-ui/layout";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  Button,
} from "@chakra-ui/react";
import Layout from "../components/Layout/Layout";

import ContactImage from "../images/contact.jpg";

const Contact = () => {
  return (
    <Layout backgroundImage={ContactImage}>
      <Container maxW="container.xl" pt="4">
        <Flex direction="column" mb="12">
          <Heading as="h2" mb="2">
            Let's get in touch
          </Heading>
          <Heading as="h3" size="md" fontWeight="normal">
            Have a question, need help, or interested in getting started in Web?
          </Heading>
        </Flex>
        <Flex>
          <Box maxW="xl" bgColor="white" p="10" rounded="md" boxShadow="md">
            <FormControl id="name" mb="6">
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="Your name" />
            </FormControl>
            <FormControl id="email" mb="6">
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Your email" />
            </FormControl>
            <Text mb="2" fontWeight="medium">
              Message
            </Text>
            <Textarea placeholder="Your message" mb="4" />
            <Button>Send message</Button>
          </Box>
        </Flex>
      </Container>
    </Layout>
  );
};

export default Contact;
