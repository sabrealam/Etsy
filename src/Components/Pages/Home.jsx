import React from "react";
import { HStack, Text, Center, Grid } from "@chakra-ui/react";
import Btn from "../Btn";
import GreenComponents from "../GreenComponents";
import Card from "../Card";
export default function Home() {
  return (
    <div>
      <HStack h={"70px"} mt={"10px"} spacing={10} justifyContent={"center"}>
        <Btn name={"Shop Deals"} />
        <Btn name={"Home Favorite"} />
        <Btn name={"Fashion Find"} />
        <Btn name={"Gift Guides"} />
        <Btn name={"Ragistry"} />
      </HStack>
      <GreenComponents />
      <Text mt={"150px"} textAlign={"center"} fontSize={"40px"}>
        Shop by Category
      </Text>
      <Center mt={"50px"}>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <Card
            title={"Jewellary"}
            img={
              "https://i.etsystatic.com/7770785/r/il/c2ca12/4170703056/il_680x540.4170703056_6bd5.jpg"
            }
          />
          <Card
            title={"Home & Living"}
            img={
              "https://i.etsystatic.com/14304132/c/645/512/77/358/il/f819eb/3087535516/il_680x540.3087535516_9vr4.jpg"
            }
          />
          <Card
            title={"Art & Collections"}
            img={
              "https://i.etsystatic.com/24971419/r/il/1902d6/2507719880/il_680x540.2507719880_5x9l.jpg"
            }
          />
          <Card
            title={"Accessories"}
            img={
              "https://i.etsystatic.com/14367613/r/il/31778d/4901714835/il_680x540.4901714835_87vm.jpg"
            }
          />
          <Card
            title={"Clothing"}
            img={
              "https://i.etsystatic.com/8154976/c/1996/1586/0/477/il/b528a4/5578130110/il_680x540.5578130110_esfy.jpg"
            }
          />
          <Card
            title={"Baby"}
            img={
              "https://i.etsystatic.com/27025196/c/2025/1611/0/0/il/d7ed4a/4993068433/il_680x540.4993068433_99hf.jpg"
            }
          />
          <Card
            title={"Wedding"}
            img={
              "https://i.etsystatic.com/14409281/c/1588/1262/0/800/il/82cc22/3652976053/il_680x540.3652976053_tvid.jpg"
            }
          />
          <Card
            title={"Bag & Purse"}
            img={
              "https://i.etsystatic.com/13162057/c/1535/1220/196/190/il/c3eadd/3484895493/il_680x540.3484895493_4a7j.jpg"
            }
          />
          <Card
            title={"Electronics"}
            img={
              "https://i.etsystatic.com/26182332/r/il/15ac96/3528769661/il_680x540.3528769661_fi5m.jpg"
            }
          />
          <Card
            title={"Bath & Beauty"}
            img={
              "https://i.etsystatic.com/15246890/r/il/9ff9cc/5775499946/il_680x540.5775499946_is52.jpg"
            }
          />
        </Grid>
      </Center>




    </div>
  );
}
