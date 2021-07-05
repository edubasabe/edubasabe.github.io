import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import NAV_ITEMS from "../../constants/navItems";
import DesktopNav from "./DesktopNav/DesktopNav";
import styled from "@emotion/styled";
export default function WithSubnavigation() {
  const Dot = styled.span`
    background-color: #4299e1;
    height: 6px;
    width: 6px;
    display: block;
    border-radius: 6px;
    position: absolute;
    top: 5px;
    right: -5px;
  `;
  const { isOpen, onToggle } = useDisclosure();
  const navbarBg = useColorModeValue("whiteAlpha.100", "gray.800");
  const navbarColor = useColorModeValue("gray.600", "white");
  const navbarBorderColor = useColorModeValue("gray.200", "gray.900");
  const navItemColor = useColorModeValue("gray.800", "white");
  return (
    <Box borderStyle={"solid"} borderColor={navbarBorderColor}>
      <Flex
        bg={navbarBg}
        color={navbarColor}
        minH={"60px"}
        maxW="container.xl"
        margin="0 auto"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          mr="auto"
          display={{ base: "inline-flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 8, md: "center" }}
          justify={{ base: "center", md: "center" }}
          align="center"
        >
          <Link
            href="/"
            textAlign={{ base: "center", md: "left" }}
            fontWeight="bold"
            fontFamily={"heading"}
            fontSize={["xl"]}
            color={navItemColor}
            position="relative"
          >
            ebasabe
            <Dot />
          </Link>

          <Flex display={{ base: "none", md: "flex" }} flex={{ md: 1 }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        {/* <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Sign In
          </Button>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}>
            Sign Up
          </Button>
        </Stack> */}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
