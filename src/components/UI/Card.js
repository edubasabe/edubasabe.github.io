import React from "react";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Card({ title, link }) {
  return (
    <Center py={6}>
      <Box
        maxW={"270px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
        position="relative"
      >
        <Image
          h={"120px"}
          w={"full"}
          src={
            "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          }
          objectFit={"cover"}
        />

        <Box p={2} position="absolute" bottom="0" w="full">
          <Stack spacing={0} align={"left"} mb={2}>
            <Heading
              fontSize={"lg"}
              fontWeight="bold"
              color="white"
              fontFamily={"body"}
              textAlign="left"
            >
              {title}
            </Heading>
            <Text color={"gray.500"}>{link}</Text>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}
