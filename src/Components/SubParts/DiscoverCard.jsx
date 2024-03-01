import { Box, Image, Flex } from "@chakra-ui/react";
import { CiHeart } from "react-icons/ci";
export default function DiscoverCard({ title, img ,img1 }) {
  return (
    <Box
      maxW="400px"
      h={"450px"}
      borderWidth="1px"
      w={"280px"}
      borderRadius="lg"
      //   overflow="auto"
      position={"relative"}
    >
      <Image
        src={img}
        alt={"img"}
        h={"340px"}
        borderRadius={"10px"}
        borderBottomRadius={"0px"}
      />
      <Box position={"absolute"} top={"10px"} right={"10px"}>
        <CiHeart size={"25px"} color={"white"} cursor={"pointer"} />
      </Box>
      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
          textAlign={"center"}
        >
          <Flex alignItems={"center"} justifyContent={"space-around"}>
            <Image
              borderRadius="full"
              boxSize="50px"
              src={img1}
              alt="Dan Abramov"
            />
            {title}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
