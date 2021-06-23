import { Container, Heading, Flex, Box } from '@chakra-ui/layout'
import { Text, Link, HStack, VStack, Icon } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons';
import React, { Fragment } from 'react'
import Layout from '../components/Layout/Layout'
import SKILLS from '../constants/skills';

const Works = () => {
  const categories = Object.keys(SKILLS);
  return (
    <Layout>
      <Container maxW="container.xl" pt="4">
        <Flex padding="10">
          <Box maxW="3xl">
            <Heading 
              as="h6" 
              fontSize="sm" 
              textTransform="uppercase" 
              letterSpacing="wide" 
              color="blue.400">About</Heading>
            <Heading as="h3" mb="2">Hi! 👋 I'm David Basabe</Heading>
            <Heading as="h4" mb="2" size="md">A self taught <Link color="blue.400" href="https://en.wikipedia.org/wiki/Front-end_web_development" isExternal>Front End Developer</Link> from Venezuela 🇻🇪</Heading>
            <Text color="gray.600">
              Web Developer with experience in application development and websites, working with agile methodologies, applying extensive knowledge in HTML, CSS, JavaScript, Vue, React, Angular and Node. MEVN Stack. <br /> <br />
            </Text>
            <Text color="gray.600" mb="8">
              Notions of UI and UX design. Using design and prototype tools such as Sketch, Figma, Invision. With the ability to implement solutions thinking about the maintainability and extensibility of the code, team work, ethical and professional.
            </Text>
            <Box backgroundColor="white" py="8" px="6" rounded="xl" boxShadow="md">
              <Heading as="h3" size="lg">Skills</Heading>
              <Text mb="4" color="gray.600">These are the things I know about or use on a daily basis.</Text>
              <HStack align={'top'} justify="space-between">
              {categories.map(category => (
                <Fragment key={category}>
                  <VStack align={'start'}>
                  <Heading as="h4" size="md">{category}</Heading>
                    {
                      SKILLS[category].map((skill, idx) => (
                      <HStack key={idx}>
                        <Box color={'green.400'} px={2}>
                          <Icon as={CheckIcon} />
                        </Box>
                        <Text fontWeight={600}>{skill}</Text>
                      </HStack>
                      ))
                    }
                  </VStack>
                </Fragment>
              ))}
              </HStack>
            </Box>
          </Box>
          <Box>Image</Box>
        </Flex>
      </Container>
    </Layout>
  )
}

export default Works
