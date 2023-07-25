import { Box, Flex, useColorMode,Text } from "@chakra-ui/react";
import React from "react";
import DefaultNavbar from "./Navbar/DefaultNavbar";
import MobileNavbar from "./Navbar/MobileNavbar";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { colorMode } = useColorMode();

  return (
    <Box
      zIndex={5}
      // border={"1px solid black"}
      position={"sticky"}
      top={0}
      bgColor={colorMode === "light" ? "#f7f7f7" : "black"}
    >
      <Flex
        h={"70px"}
        justifyContent={"space-between"}
        pl={["2", "2", "10"]}
        // border={"1px solid red"}
        alignItems={"center"}
      >
        <NavLink to={"https://borsejugal23.github.io"}>
          <Text fontSize='4xl'>Jugal</Text>
        </NavLink>

        <DefaultNavbar />
        <MobileNavbar />
      </Flex>
    </Box>
  );
}

export default Navbar;
