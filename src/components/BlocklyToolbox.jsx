import React from "react";
import { Box } from "@chakra-ui/react";

const BlocklyToolbox = () => {
  return (
    <Box bg="gray.100" p={4}>
      {}
      <Box mb={2}>Move Forward</Box>
      <Box mb={2}>Move Backward</Box>
      <Box mb={2}>Turn Left</Box>
      <Box mb={2}>Turn Right</Box>
    </Box>
  );
};

export default BlocklyToolbox;
