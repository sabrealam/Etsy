import React from "react";
import {
  InputGroup,
  InputLeftElement,
  Stack,
  HStack,
  Text,
  Center,
  Grid,
  Box,
  Flex,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Input,
} from "@chakra-ui/react";
import Btn from "../Btn";
import GreenComponents from "../GreenComponents";
import Card from "../Card";
import AllRoute from "../AllRoute/AllRoute";
import Navbar from "../Navbar";
import GiftCard from "../SubParts/GiftCard";
import { ArrowForwardIcon, EmailIcon } from "@chakra-ui/icons";
import DiscoverCard from "../SubParts/DiscoverCard";
import { Link } from "react-router-dom";
import { Link2 } from "lucide-react";
import Footer from "../Footer";
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
      <Flex w={"90%"} margin={"auto"} mt={"20px"} overflow={"auto"} gap={5}>
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
        {
          <DiscoverCard
            title={"BatinHandiCrafts"}
            img={
              "https://i.etsystatic.com/18922075/r/il/a2f6fd/3007384323/il_340x270.3007384323_11i0.jpg"
            }
            img1={
              "https://i.etsystatic.com/isla/f6085f/68906882/isla_75x75.68906882_gpd0p58x.jpg?version=0"
            }
          />
          /* <DiscoverCard
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
        /> */
        }
      </Flex>

      <Box minH={"780px"} h={"auto"} bg={"#fffbd8"} mt={"100px"} p={"50px"}>
        <Text textAlign={"center"} fontSize={"40px"}>
          What is Etsy India?
        </Text>
        <Link to={"/story"}>
          <Text textAlign={"center"} textDecoration={"underline"}>
            Read our wonderfully weird story
          </Text>
        </Link>
        <Center
          // border={"1px solid black"}
          minH={"500px"}
          h={"auto"}
          w={"70%"}
          m={"auto"}
          mt={"60px"}
        >
          <Accordion w={"100%"}>
            <AccordionItem>
              <h2>
                <AccordionButton w={"100%"}>
                  <Box as="span" flex="1" textAlign="left">
                    <Text color={"blue"} fontSize={"20px"}>
                      Why choose Etsy?
                    </Text>
                    <Text mt={"10px"} fontWeight={"600"}>
                      {" "}
                      A community doing good...{" "}
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Etsy is where people come together to make, sell, buy, and
                collect unique items. We’re also a community pushing for
                positive change for small businesses, people, and the planet.
                Here are some of the ways we’re making a positive impact,
                together:
                <br />
                <br />
                Your purchases on Etsy in 2021 generated nearly $4 billion in
                income for small businesses. <br />
                <br /> We advocate for policy—at the global and local level—that
                benefits creative entrepreneurs and helps small businesses grow
                and thrive. <br />
                <br /> We are deepening our commitment to a sustainable future
                and are working towards a new goal to reach net zero emissions
                by 2030. <br />
                <br />
                <Text mt={"10px"} fontWeight={"600"}>
                  {" "}
                  Support independent creators{" "}
                </Text>
                Support independent creators There’s no Etsy warehouse—just
                millions of people selling the things they love. We make the
                whole process easy, helping you connect directly with talented
                artisans from across the world (including India) to find
                something extraordinary.
                <Text mt={"10px"} fontWeight={"600"}>
                  {" "}
                  Peace of mind{" "}
                </Text>
                Peace of mind With Etsy Purchase Protection, you can shop
                confidently, knowing if something goes wrong with your order,
                we’ve got your back for all eligible purchases. If you ever need
                assistance, we are always ready to step in for support.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton w={"100%"}>
                  <Box as="span" flex="1" textAlign="left">
                    <Text color={"blue"} fontSize={"20px"}>
                      What can you shop on Etsy?
                    </Text>
                    <Text mt={"10px"} fontWeight={"600"}>
                      {" "}
                      A community doing good...{" "}
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                The imagination of Etsy sellers can run far and wide, which
                makes our platform a home to more than 100 million active
                listings across home, style, and gifts. Some of our popular
                categories include:
                <br />
                <br />
                <Text mt={"10px"} fontWeight={"600"}>
                  {" "}
                  Home & Living:
                </Text>
                <Text>
                  Whether you’re setting up a new apartment or making small
                  upgrades for a home refresh, you’ll find everything you need
                  to make your home a reflection of your personality on Etsy.
                  From traditional elements like Jaipuri bedding, masala boxes,
                  and Madhubani paintings to modern essentials like sleek table
                  lamps, vibrant indoor planters, and decorative platters, Etsy
                  sellers have much to offer.
                </Text>
                <Text mt={"10px"} fontWeight={"600"}>
                  {" "}
                  Clothing:
                </Text>
                <Text>
                  Your unique fashion style deserves outfits that can match it.
                  Discover tie-dye kaftans, linen shirts, hand-painted sarees,
                  chikankari kurtis, ajrakh scarves and so much more—from small
                  sellers who understand your aesthetic just as much as your
                  comfort.
                </Text>
                <Text mt={"10px"} fontWeight={"600"}>
                  {" "}
                  Accessories:
                </Text>
                <Text>
                  The gajra for your friend’s haldi ceremony or the gemstone
                  ring that represents your zodiac—sometimes, the little things
                  can make the biggest impact. Etsy has it all and more! Explore
                  a range of beautiful fashion accessories and jewellery for all
                  the occasions you have planned.
                </Text>
                <Text mt={"10px"} fontWeight={"600"}>
                  {" "}
                  Gifts:
                </Text>
                <Text>
                  From birthdays and anniversaries to festivals and weddings,
                  we’ve got all the special moments in life covered. You’ll
                  easily find the perfect presents that not only match the
                  unique personalities of your loved ones perfectly but also
                  make them feel seen and cherished.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton w={"100%"}>
                  <Box as="span" flex="1" textAlign="left">
                    <Text color={"blue"} fontSize={"20px"}>
                      How to buy on Etsy?
                    </Text>
                    <Text mt={"10px"} fontWeight={"600"}>
                      {" "}
                      A community doing good...{" "}
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text>
                  If you’re looking for something specific, start by putting in
                  the keywords in our search and then using filters to narrow
                  down the results. You can even message the sellers with any
                  questions or requests you may have before placing an order
                  with them.
                  <br />
                  <br />
                  If you’re looking for inspiration, head on over to our
                  Editor’s Picks or look out for the latest updates on our
                  Journal to discover extraordinary items.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton w={"100%"}>
                  <Box as="span" flex="1" textAlign="left">
                    <Text color={"blue"} fontSize={"20px"}>
                      How to sell on Etsy?
                    </Text>
                    <Text mt={"10px"} fontWeight={"600"}>
                      {" "}
                      A community doing good...{" "}
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text>
                  You can sell handmade goods, vintage items, and craft supplies
                  on Etsy. With low fees, powerful tools, and support and
                  education, we help creative entrepreneurs start, manage, and
                  scale their businesses. Want to open a shop? All it takes is
                  Rs. 16* to start selling on Etsy.
                  <br />
                  <br />
                  *Listing fees are billed for 0.20 USD, so if your bank's
                  currency is not USD, the amount in your currency may vary
                  based on changes in the exchange rate.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Center>
      </Box>
      <Box bg={"#fffbd8"} h={"150px"}>
        <Text textAlign={"center"} fontSize={"25px"} fontWeight={"600"}>
          Have a question? Well, we’ve got some answers.
        </Text>
        <Box display={"flex"} justifyContent={"center"} mt={"20px"}>
          <Button>Go to Help Centre &emsp; {<Link2 />}</Button>
        </Box>
      </Box>
      <Box w={"100%"} h={"150px"} bg={"#ccebff"} p={"20px"}>
        <Text textAlign={"center"} fontSize={"20px"}>
          Yes! Send me exclusive offers, unique gift ideas, and personalised
          tips for shopping and selling on Etsy.
        </Text>
        <Stack
          m={"auto"}
          w={"500px"}
          display={"flex"}
          flexDirection={"row"}
          bg={"white"}
          borderRadius={"10px"}
          p={"10px"}
          mt={"15px"}
        >
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <EmailIcon color="gray.300" />
            </InputLeftElement>
            <Input type="tel" size="md" placeholder="Enter Your Email" />
          </InputGroup>
          <Button w={"150px"}>SubsCribe</Button>
        </Stack>
      </Box>

      <Footer />
    </div>
  );
}
