import React from "react";
import { Button } from "@chakra-ui/react";
export default function Btn({ name }) {
  return (
    <div>
      <Button
        colorScheme="none"
        fontSize={"14px"}
        color={"black"}
        _hover={{ bg: "gray.300 " }}
        onClick={()=>alert("Testing")}
      >
        {name}
      </Button>
    </div>
  );
}
