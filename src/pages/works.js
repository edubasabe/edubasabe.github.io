import { Container, Heading, Flex } from '@chakra-ui/layout'
import React from 'react'
import Layout from '../components/Layout/Layout'
import PageHeading from '../components/UI/PageHeading/PageHeading'

const Works = () => {
  return (
    <Layout>
      <Container maxW="container.xl" pt="4">
        <PageHeading>
          <Heading>Works</Heading>
        </PageHeading>
      </Container>
    </Layout>
  )
}

export default Works
