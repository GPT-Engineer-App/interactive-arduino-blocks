import React from "react";
import { Box } from "@chakra-ui/react";

const BlocklyToolbox = () => {
  return (
    <xml id="toolbox">
      <block type="move_forward"></block>
      <block type="move_backward"></block>
      <block type="turn_left"></block>
      <block type="turn_right"></block>
    </xml>
  );
};

export default BlocklyToolbox;
