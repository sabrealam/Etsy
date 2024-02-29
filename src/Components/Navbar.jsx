import React from "react";
import {
  Center,
  Box,
  Flex,
  Spacer,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Stack,
  Button,
  HStack,
} from "@chakra-ui/react";
import {
  AddIcon,
  RepeatIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  NotAllowedIcon,
  Icon,
} from "@chakra-ui/icons";
import { IconButton, Input } from "@chakra-ui/react";
import { MdShoppingCart } from "react-icons/md";
import { FaHourglassStart, FaRegCircle, FaRegHeart } from "react-icons/fa";
import Btn from "./Btn";
import Home from "./Pages/Home";
export default function Navbar() {
  return (
    <>
      <Flex
        //   border={"1px solid black"}
        alignItems={"center"}
        w={"100%"}
        h={"60px"}
        pl={"70px"}
        pr={"70px"}
        fontSize={"40px"}
      >
        <Text color={"tomato"}>Etsy</Text>
        {/* <Spacer /> */}
        <Menu position={"relative"}>
          <MenuButton
            w={"70px"}
            h={"30px"}
            position={"absolute"}
            //   top={"20px"}
            left={"180px"}
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          ></MenuButton>

          <MenuList
            w={"300px"}
            h={"500px"}
            overflowY={"scroll"}
            fontSize={"17px"}
          >
            <MenuItem>Accessories</MenuItem>
            <MenuItem>Art And Collection</MenuItem>
            <MenuItem>Baby</MenuItem>
            <MenuItem>Bags And Purse</MenuItem>
            <MenuItem>Bath & Beauty</MenuItem>
            <MenuItem>Books & Films</MenuItem>
            <MenuItem>Clothing</MenuItem>
            <MenuItem>Craft</MenuItem>
            <MenuItem>Electronics</MenuItem>
            <MenuItem>Gift</MenuItem>
            <MenuItem>Home & Living</MenuItem>
            <MenuItem>Jewellary</MenuItem>
            <MenuItem>Shoes</MenuItem>
            <MenuItem>Toys</MenuItem>
            <MenuItem>Wedding</MenuItem>
          </MenuList>
        </Menu>
        <Spacer />
        <Stack direction={"row"}>
          <Input placeholder="Search" size="md" w={"650px"} />
          <Button>Go</Button>
        </Stack>
        <Spacer />
        <Button colorScheme="none" color={"black"} _hover={{ bg: "gray.300 " }}>
          {" "}
          Sign in{" "}
        </Button>
        <Spacer />
        <HStack spacing={8} cursor={"pointer"}>
          <Icon as={FaRegCircle} w={"25px"} h={"25px"} />
          <Icon as={FaRegHeart} w={"25px"} h={"25px"} />
          <Icon as={MdShoppingCart} w={"25px"} h={"25px"} />
        </HStack>
      </Flex>
      {/* <HStack h={"70px"} mt={"10px"} spacing={10} justifyContent={"center"}>
        <Btn name={"Shop Deals"} />
        <Btn name={"Home Favorite"} />
        <Btn name={"Fashion Find"} />
        <Btn name={"Gift Guides"} />
        <Btn name={"Ragistry"} />
      </HStack> */}
      {/* <Home /> */}
    </>
  );
}
