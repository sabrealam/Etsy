import React from "react";
import {
  HStack,
  Text,
  Center,
  Grid,
  Box,
  Flex,
  Button,
} from "@chakra-ui/react";
import Btn from "../Btn";
import GreenComponents from "../GreenComponents";
import Card from "../Card";
import AllRoute from "../AllRoute/AllRoute";
import Navbar from "../Navbar";
import GiftCard from "../SubParts/GiftCard";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import DiscoverCard from "../SubParts/DiscoverCard";
export default function Home() {
  return (
    <div>
      <Navbar />
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

      <Box
        h={"400px"}
        w={"90%"}
        margin={"auto"}
        mt={"100px"}
        // border={"1px solid black"}
      >
        <Text fontSize={"25px"} fontWeight={"bold"}>
          {" "}
          Shop our popular gift categories
        </Text>
        <br />
        <Box display="flex" gap={5}>
          <GiftCard
            img="https://i.etsystatic.com/5122975/r/il/761bc7/1717689165/il_340x270.1717689165_bpsl.jpg"
            title="Anniversary gifts"
          />
          <GiftCard
            img="https://i.etsystatic.com/18922075/r/il/a2f6fd/3007384323/il_340x270.3007384323_11i0.jpg"
            title="Gifts for him"
          />
          <GiftCard
            img="https://i.etsystatic.com/18922075/r/il/f7c3c7/5450501524/il_340x270.5450501524_ni0j.jpg"
            title="Gifts for her"
          />
          <GiftCard
            img="https://i.etsystatic.com/28532188/r/il/8ee76f/3761891932/il_340x270.3761891932_feh5.jpg"
            title="Personilized gifts ideas"
          />
          <GiftCard
            img="https://i.etsystatic.com/6841042/r/il/7fb2c1/3884869020/il_340x270.3884869020_b90j.jpg"
            title="Wedding Gifts"
          />
        </Box>
      </Box>

      <Text ml={"80px"} mt={"150px"}>
        Local finds? Etsy has it.
      </Text>
      <Flex
        justifyContent={"space-between"}
        w={"90%"}
        margin={"auto"}
        mt={"40px"}
        fontSize={"25px"}
        fontWeight={"bold"}
      >
        <Text>Discover shops in India</Text>
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="teal"
          variant="outline"
        >
          Shop from local makers
        </Button>
      </Flex>
      <Flex
        w={"90%"}
        margin={"auto"}
        mt={"20px"}
        overflow={"auto"}
        border={"1px solid black"}
        gap={5}
      >
        <DiscoverCard
          title={"JasCreations"}
          img={
            "https://i.etsystatic.com/31592924/r/il/cf4fd2/4409466765/il_570xN.4409466765_d7iu.jpg"
          }
          img1={
            "https://i.etsystatic.com/isla/84e378/51252553/isla_75x75.51252553_9rh29xln.jpg?version=0"
          }
        />
        <DiscoverCard
          title={"ThreadsOfIndiaArt"}
          img={
            "https://i.etsystatic.com/39411096/r/il/79ee63/5038959003/il_570xN.5038959003_186v.jpg"
          }
          img1={
            "https://i.etsystatic.com/isla/dc6d7d/59529690/isla_75x75.59529690_9pk9e0ay.jpg?version=0"
          }
        />
        <DiscoverCard
          title={"The Studio"}
          img={
            "https://i.etsystatic.com/31736977/r/il/63fee8/3350077703/il_570xN.3350077703_km0n.jpg"
          }
          img1={
            "https://i.etsystatic.com/isla/e6c420/52976859/isla_75x75.52976859_3rcgcgao.jpg?version=0"
          }
        />
        <DiscoverCard
          title={"Gifts for him"}
          img={
            "https://i.etsystatic.com/17321595/r/il/75bdc3/4769667837/il_570xN.4769667837_ia7r.jpg"
          }
        />
        <DiscoverCard
          title={"BatinHandiCrafts"}
          img={
            "https://i.etsystatic.com/18922075/r/il/a2f6fd/3007384323/il_340x270.3007384323_11i0.jpg"
          }
          img1={
            "https://i.etsystatic.com/isla/f6085f/68906882/isla_75x75.68906882_gpd0p58x.jpg?version=0"
          }
        />
        <DiscoverCard
          title={"NinoshkaIndia"}
          img={
            "https://i.etsystatic.com/18954143/r/il/c1bccf/2243342703/il_570xN.2243342703_nln7.jpg"
          }
          img1={
            "https://i.etsystatic.com/isla/5177cf/43996537/isla_75x75.43996537_kee80ujd.jpg?version=0"
          }
        />
        <DiscoverCard
          title={"ShivaniPatelArt"}
          img={
            "https://i.etsystatic.com/29508955/r/il/731acf/3678894850/il_570xN.3678894850_s8ht.jpg"
          }
          img1={
            "https://i.etsystatic.com/isla/c806bc/66661726/isla_75x75.66661726_ku88a0wc.jpg?version=0"
          }
        />
      </Flex>

      <Box h={"700px"} bg={"tomato"}></Box>
    </div>
  );
}
