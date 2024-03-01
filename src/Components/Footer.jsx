import React from "react";
import {
  Box,
  HStack,
  Flex,
  VStack,
  Text,
  Tooltip,
  Button,
  Center,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { CiGlobe } from "react-icons/ci";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <Box w={"100%"} h={"90px"} bg={"#3b67d9"} p={"20px"}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <CiGlobe size={"50px"} color={"white"} />
          <Tooltip
            hasArrow
            label="Etsy’s 100% renewable electricity commitment includes the electricity used by the data centres that host Etsy.com, the Sell on Etsy app, and the Etsy app, as well as the electricity that powers Etsy’s global offices and employees working remotely from home in the US."
            bg="gray.300"
            color="black"
            placement="top"
          >
            <Text
              textDecoration={"underline"}
              textDecorationStyle={"dashed"}
              textUnderlineOffset={"5px"}
              color={"white"}
              fontSize={"20px"}
              ml={"30px"}
              cursor={"alias"}
            >
              {" "}
              Etsy is powered by 100% renewable electricity.{" "}
            </Text>
          </Tooltip>
        </Flex>
      </Box>

      <Flex w={"100%"} h={"350px"} bg={"#3140af"} pl={"50px"}>
        <Box
          w={"35%"}
          bg={"#122868"}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          gap={"20px"}
          alignItems={"center"}
        >
          <Box
            w={"80px"}
            h={"80px"}
            bg={"#f1641e"}
            display={"grid"}
            placeItems={"center"}
            fontSize={"40px"}
            color={"white"}
            borderRadius={"15px"}
          >
            Etsy
          </Box>
          <Button>Download the Etsy App</Button>
        </Box>
        {/* <VStack> */}
        <List spacing={3} w={"15%"} p={"30px"} color={"white"}>
          <ListItem fontSize={"20px"}> Shop </ListItem>
          <ListItem fontSize={"13px"}> GiftCard </ListItem>
          <ListItem fontSize={"13px"}> Etsy Registry </ListItem>
          <ListItem fontSize={"13px"}> SiteMap </ListItem>
          <ListItem fontSize={"13px"}> Etsy Blog </ListItem>
          <ListItem fontSize={"13px"}> Etsy United Kingdom </ListItem>
          <ListItem fontSize={"13px"}> Etsy Germany </ListItem>
          <ListItem fontSize={"13px"}> Etsy canada </ListItem>
        </List>
        <List spacing={3} w={"15%"} p={"30px"} color={"white"}>
          <ListItem fontSize={"20px"}> Sell </ListItem>
          <ListItem fontSize={"13px"}> Sell on Etsy </ListItem>
          <ListItem fontSize={"13px"}> Teams </ListItem>
          <ListItem fontSize={"13px"}> Forums </ListItem>
          <ListItem fontSize={"13px"}> Affiliate & Creators </ListItem>
        </List>
        <List spacing={3} w={"15%"} p={"30px"} color={"white"}>
          <ListItem fontSize={"20px"}> About </ListItem>
          <ListItem fontSize={"13px"}> Etsy, Inc </ListItem>
          <ListItem fontSize={"13px"}> Plicies </ListItem>
          <ListItem fontSize={"13px"}> Investors </ListItem>
          <ListItem fontSize={"13px"}> Press </ListItem>
          <ListItem fontSize={"13px"}> Carreer </ListItem>
          <ListItem fontSize={"13px"}> Legal Imprint </ListItem>
        </List>
        <List spacing={3} w={"20%"} p={"30px"} color={"white"}>
          <ListItem fontSize={"20px"}> Help </ListItem>
          <ListItem fontSize={"13px"}> Help Center </ListItem>
          <ListItem fontSize={"13px"}> Privacy Settings </ListItem>
          <HStack justifyContent={"space-between"}>
            <FaInstagram size={25} />
            <FaFacebook size={25} />
            <FaPinterest size={25} />
            <FaTwitter size={25} />
            <FaYoutube size={25} />
          </HStack>
        </List>
        {/* </VStack> */}
      </Flex>
      <Flex
        h={"100px"}
        bg={"black"}
        w={"100%"}
        alignItems={"center"}
        pl={"100px"}
        pr={"100px"}
        justifyContent={"space-between"}
      >
        <Button
          bg={"none"}
          color={"white"}
          _hover={{ color: "black", bg: "white" }}
        >
          INDIA &emsp;|&emsp; ENGLISH &emsp;|&emsp; ₹ INR
        </Button>
        <HStack>
          <UnorderedList
            color={"white"}
            listStyleType={"none"}
            display={"flex"}
            gap={"25px"}
          >
            <Link>
              <ListItem
                _hover={{ textDecoration: "underline", cursor: "pointer" }}
              >
                © 2024 Etsy, Inc.
              </ListItem>
            </Link>
            <ListItem
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Terms Of Use
            </ListItem>
            <ListItem
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Privary
            </ListItem>
            <ListItem
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Intrest-based ad
            </ListItem>
            <ListItem
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Local Shop
            </ListItem>
            <ListItem
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Region
            </ListItem>
          </UnorderedList>
        </HStack>
      </Flex>
    </>
  );
}
