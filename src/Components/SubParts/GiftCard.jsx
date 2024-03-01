import { Box, Image } from "@chakra-ui/react";

export default function GiftCard({ title, img }) {
  return (
    <Box
      maxW="300px"
      h={"280px"}
      borderWidth="1px"
      w={"250px"}
      borderRadius="lg"
      overflow="hidden"
      p={"10px"}
    >
      <Image src={img} alt={"img"} h={"200px"} borderRadius={"10px"} />

      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
          textAlign={"center"}
        >
          {title}
        </Box>
      </Box>
    </Box>
  );
}
