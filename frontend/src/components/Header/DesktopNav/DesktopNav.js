import React from "react";
import {
  Box,
  Stack,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
} from "@chakra-ui/react";

import NAV_ITEMS from "../../../constants/navItems";
import DesktopSubNav from "./DesktopSubNav/DesktopSubNav";

const DesktopNav = () => {
  const popoverTextColor = useColorModeValue("gray.600", "gray.200");
  const popoverTextColorHover = {
    textDecoration: "none",
    color: useColorModeValue("gray.800", "white"),
  };

  const popoverBg = useColorModeValue("white", "gray.800");
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={popoverTextColor}
                _hover={popoverTextColorHover}
                borderRadius={"lg"}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverBg}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

export default DesktopNav;
