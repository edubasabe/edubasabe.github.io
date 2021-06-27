import { Container, Heading } from "@chakra-ui/layout";
import React, { Fragment } from "react";
import Layout from "../components/Layout/Layout";
import PageHeading from "../components/UI/PageHeading/PageHeading";
import { graphql, useStaticQuery } from "gatsby";
import Card from "../components/UI/Card";
import { SimpleGrid } from "@chakra-ui/react";

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
            cover {
              file {
                url
              }
            }
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
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }}>
          {works.map((work) => (
            <Fragment key={work.node.id}>
              <Card
                title={work.node.name}
                link={work.node.url}
                image={work.node.cover?.file.url}
                height={"220px"}
              />
            </Fragment>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
