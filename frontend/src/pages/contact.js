import React from "react";
import { Container, Heading, Flex } from "@chakra-ui/layout";
import Layout from "../components/Layout/Layout";
import ContactImage from "../images/contact.jpg";
import ContactForm from "../components/ContactForm/ContactForm";
import { Image } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Layout>
      <Container maxW="container.xl" pt="4">
        <Flex direction="column" mb="12">
          <Heading as="h2" mb="2">
            Let's get in touch
          </Heading>
          <Heading as="h3" size="md" fontWeight="normal">
            Have a question, need help, or interested in getting started in Web?
          </Heading>
        </Flex>
        <Flex mb="6" justifyContent="center">
          <ContactForm />
          <Flex>
            <Image
              src={ContactImage}
              maxW={["lg", "2xl"]}
              display={{ base: "none", lg: "block" }}
              ml="6"
              rounded="lg"
              boxShadow="md"
            />
          </Flex>
        </Flex>
      </Container>
    </Layout>
  );
};

export default Contact;
