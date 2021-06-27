import { Container, Heading, Flex, Box } from "@chakra-ui/layout";
import {
  Text,
  Link,
  HStack,
  VStack,
  Icon,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import React, { Fragment } from "react";
import Layout from "../components/Layout/Layout";
import SKILLS from "../constants/skills";
import AboutImage from "../images/about-me.jpg";

const About = () => {
  const categories = Object.keys(SKILLS);

  return (
    <Layout>
      <Container maxW="container.xl" pt="4">
        <Flex
          padding={{ base: 4, md: 10 }}
          justify="space-between"
          alignItems="flex-start"
        >
          <Box maxW="2xl">
            <Heading as="h3" mb="2">
              Hi!{" "}
              <span role="img" aria-label="Hand shake">
                👋
              </span>{" "}
              I'm David Basabe
            </Heading>
            <Heading as="h4" mb="6" size="md">
              A self taught{" "}
              <Link
                color="blue.400"
                href="https://en.wikipedia.org/wiki/Front-end_web_development"
                isExternal
              >
                Front End Developer
              </Link>{" "}
              from Venezuela 🇻🇪
            </Heading>
            <Text color="gray.600">
              Web Developer with experience in application development and
              websites, working with agile methodologies, applying extensive
              knowledge in HTML, CSS, JavaScript, Vue, React, Angular and Node.
              MEVN Stack. <br /> <br />
            </Text>
            <Text color="gray.600" mb="8">
              Notions of UI and UX design. Using design and prototype tools such
              as Sketch, Figma, Invision. With the ability to implement
              solutions thinking about the maintainability and extensibility of
              the code, team work, ethical and professional.
            </Text>
            <Box backgroundColor="whiteAlpha.700" py="8" px="6" rounded="xl">
              <Heading as="h3" size="lg">
                Skills
              </Heading>
              <Text mb="4" color="gray.600">
                These are the things I know about or use on a daily basis.
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 5 }} spacing={6}>
                {categories.map((category) => (
                  <Fragment key={category}>
                    <VStack align={"start"}>
                      <Heading as="h4" size="sm">
                        {category}
                      </Heading>
                      {SKILLS[category].map((skill, idx) => (
                        <HStack key={idx}>
                          <Box color={"green.400"} px={1}>
                            <Icon as={CheckIcon} />
                          </Box>
                          <Text fontWeight={600} fontSize="sm">
                            {skill}
                          </Text>
                        </HStack>
                      ))}
                    </VStack>
                  </Fragment>
                ))}
              </SimpleGrid>
            </Box>
          </Box>
          <Box boxSize="sm">
            <Image
              src={AboutImage}
              alt="About me"
              rounded="md"
              boxShadow="lg"
            />
          </Box>
        </Flex>
      </Container>
    </Layout>
  );
};

export default About;
