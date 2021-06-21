import { Container, Heading, Flex, Box } from '@chakra-ui/layout'
import { Text, Link, HStack, VStack, Icon } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons';
import React from 'react'
import Layout from '../components/Layout/Layout'
import SKILLS from '../constants/skills';

const Works = () => {
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
            <Text color="gray.600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorem praesentium assumenda dignissimos tempora nesciunt aut omnis sequi dicta debitis quasi, rerum facere est obcaecati. Dolorum et assumenda eum asperiores?</Text>

            <Box>
              <Heading as="h3">Skills</Heading>
              <Heading as="h4" size="md">Languages</Heading>
              {SKILLS.map((skill) => (
                <HStack key={skill.id} align={'top'}>
                  <Box color={'green.400'} px={2}>
                    <Icon as={CheckIcon} />
                  </Box>
                  <VStack align={'start'}>
                    <Text fontWeight={600}>{skill.name}</Text>
                  </VStack>
                </HStack>)
              )}
            </Box>
          </Box>
          <Box>Image</Box>
        </Flex>
      </Container>
    </Layout>
  )
}

export default Works
