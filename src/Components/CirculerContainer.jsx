import React from "react";
import { Box, Text, VStack, HStack, Image } from "@chakra-ui/react";
export default function CirculerContainer({ title, img }) {
  return (
    <VStack >
      <Image
        _hover={{ transform: "scale(1.1)" }}
        transition={"1s"}
        borderRadius="full"
        boxSize="120px"
        src={img}
        alt="Dan Abramov"
      />

      <Text >{title}</Text>
    </VStack>
  );
}
