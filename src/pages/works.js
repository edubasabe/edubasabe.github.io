import { Container, Heading } from "@chakra-ui/layout";
import React, { Fragment } from "react";
import Layout from "../components/Layout/Layout";
import PageHeading from "../components/UI/PageHeading/PageHeading";
import { graphql, useStaticQuery } from "gatsby";
import Card from "../components/UI/Card";
import { HStack } from "@chakra-ui/react";

const Works = () => {
  const {
    allContentfulWebsites: { edges: works },
  } = useStaticQuery(graphql`
    query MyQuery {
      allContentfulWebsites {
        edges {
          node {
            id
            name
            url
          }
        }
      }
    }
  `);

  console.log("works", works);
  return (
    <Layout>
      <Container maxW="container.xl" pt="4">
        <PageHeading>
          <Heading>Works</Heading>
        </PageHeading>
        <HStack>
          {works.map((work) => (
            <Fragment key={work.node.id}>
              <Card title={work.node.name} link={work.node.url} />
            </Fragment>
          ))}
        </HStack>
      </Container>
    </Layout>
  );
};

export default Works;
