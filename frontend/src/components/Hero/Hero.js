import React from "react";
import { navigate } from "gatsby-link";
import {
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import coverImage from "../../images/cover.jpeg";
import Typed from "react-typed";

export default function SplitScreen() {
  function goContactPage() {
    navigate("/contact");
  }
  return (
    <Stack minH={"30vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Typed
              strings={[
                "FrontEnd Developer",
                "Full Stack Developer",
                "UI Designer",
                "FrontEnd Engineer",
              ]}
              typeSpeed={50}
              loop={true}
            />
            {/* <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              FrontEnd Engineer
            </Text> */}
            <br />{" "}
            {/* <Text color={"blue.400"} as={"span"}>
              Senior
            </Text>{" "} */}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            More than 4 years of experience building digital products for very
            important companies.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              onClick={goContactPage}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Contact me
            </Button>
            <Button>
              <Link href="/works">Latest Works</Link>
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image alt={"Login Image"} objectFit={"cover"} src={coverImage} />
      </Flex>
    </Stack>
  );
}
