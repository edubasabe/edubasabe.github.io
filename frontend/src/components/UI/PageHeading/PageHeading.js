import React from 'react';
import { Box } from "@chakra-ui/layout";

export default function PageHeading(props) {
  return (
    <Box my="4" mb="6">
      {props.children}
    </Box>
  );
}
