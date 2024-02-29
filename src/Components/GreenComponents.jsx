import React from "react";
import { Box, Text, Center, HStack } from "@chakra-ui/react";
import CirculerContainer from "./CirculerContainer";
export default function GreenComponents() {
  return (
    <Box h={"170px"} w={"100%"} bg={"#024927"} p={"20px"}>
      <Text textAlign={"center"} fontSize={"35px"} color={"white"}>
        Make it personal – shop custom gifts, decor, and on-sale finds now!{" "}
      </Text>
      <Center>
        <HStack mt={"20px"} spacing={10} >
          <CirculerContainer
            title={"Personalised Gifts"}
            img={
              "https://i.etsystatic.com/23244419/r/il/256acb/5460344806/il_300x300.5460344806_3962.jpg"
            }
          />
          <CirculerContainer
            title={"Wall Art"}
            img={
              "https://i.etsystatic.com/13937228/r/il/2aa962/5720982228/il_300x300.5720982228_3xm5.jpg"
            }
          />
          <CirculerContainer
            title={"Bedding & Blankets"}
            img={
              "https://i.etsystatic.com/11651126/c/1999/1999/0/858/il/b8040d/4026650319/il_300x300.4026650319_bhl2.jpg"
            }
          />
          <CirculerContainer
            title={"Jewellery"}
            img={
              "https://i.etsystatic.com/9266327/c/2000/2000/0/0/il/fc0035/5390294661/il_300x300.5390294661_ewbc.jpg"
            }
          />
          <CirculerContainer
            title={"Tees & Jumpers  "}
            img={
              "https://i.etsystatic.com/9353657/r/il/ccdf94/3423095141/il_300x300.3423095141_khth.jpg"
            }
          />
          <CirculerContainer
            title={"On Sale "}
            img={
              "https://i.etsystatic.com/17665462/c/1941/1941/40/330/il/88b0e6/3970877247/il_300x300.3970877247_n9na.jpg"
            }
          />
        </HStack>
      </Center>
    </Box>
  );
}
