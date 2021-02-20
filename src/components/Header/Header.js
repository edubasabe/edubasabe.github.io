import React from 'react'
// import PropTypes from 'prop-types'
import { Heading } from '@chakra-ui/layout'
import { Flex } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import { ListItem } from '@chakra-ui/layout'
import { List } from '@chakra-ui/layout'

function Header(props) {
  return (
    <div>
      <Box bg="gray.100" p="2">
        <Flex
          maxWidth="container.xl"
          justifyContent="start"
          align="center"
          mx="auto"
          as="nav"
        >
          <Heading as="h1" size="md" mr="2">
            @edubasabe
          </Heading>
          <Heading as="h2" size="sm">
            Senior FrontEnd Engineer
          </Heading>

          <List ml="auto" d="flex">
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Flex>
      </Box>
    </div>
  );
}

// Header.propTypes = {

// }

export default Header

