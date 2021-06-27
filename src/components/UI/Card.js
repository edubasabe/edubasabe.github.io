import React from "react";
import {
  Heading,
  Box,
  Center,
  Image,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import { css } from "@emotion/react";
import { theme } from "@chakra-ui/react";

export default function Card({ title, link, image, height }) {
  const { colors } = theme;
  const cardStyles = css`
    background-color: ${colors.black};
    transition: all 400ms ease;

    .card__text-container {
      opacity: 0;
    }

    .card__image,
    .card__text-container {
      transition: all 400ms ease;
    }

    &:hover {
      cursor: pointer;
      .card__image {
        opacity: 0.3;
      }
      .card__text-container {
        opacity: 1;
      }
    }
  `;
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
        css={cardStyles}
      >
        <Image
          h={height}
          w={"full"}
          src={image}
          objectFit={"cover"}
          className="card__image"
        />

        <Box
          p={2}
          position="absolute"
          bottom="0"
          w="full"
          className="card__text-container"
        >
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
            <Text color={"whiteAlpha.800"}>{link}</Text>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}
