import React from 'react';
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Flex } from "@chakra-ui/layout";
import Header from '../Header/Header';
import Footer from '../Footer/Footer'


export default function Layout(props) {
  const layoutBgColor = useColorModeValue("gray.100", "gray.800");
  return (
    <>
      <Header />
      <Flex as="main" minHeight="calc(100vh - 124px)" backgroundColor={layoutBgColor}>
        {props.children}
      </Flex>
      <Footer />
    </>
  );
}
