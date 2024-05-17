import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import profile from "../images/jugal.img.jpg";
import * as Scroll from "react-scroll";

const About = () => {
  const { colorMode } = useColorMode();

  return (
    <Box id="about" className="about section" py={{ base: "10vh", md: "20vh" }}>
      <Center mb={8}>
        <Heading fontSize={{ base: "2xl", md: "4xl" }}>About Me</Heading>
      </Center>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 8, md: 16 }}
        justify="center"
        align="center"
        mb={{ base: 16, md: 32 }}
      >
        <Image
          src={profile}
          alt="profile"
          h={{ base: "300px", md: "400px" }}
          w={{ base: "200px", md: "300px" }}
          objectFit="cover"
          borderRadius="full"
          // boxShadow="2xl"
          className="home-img"
          bgColor={"none"}
        />
        <Box
          w={{ base: "80%", md: "50%" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Heading fontSize={{ base: "md", md: "2xl" }} mb={4}>
            Hello, my name is Jugal Borse
          </Heading>
          <Text
            fontSize={{ base: "sm", md: "lg" }}
            mb={8}
            id={"user-detail-intro"}
          >
            An enthusiastic Web Developer having experience of 1200+ hours of
            coding and building websites with MERN stack and various
            webtechnologies like HTML,React,Redux,CSS,Javascript and Nodejs, express
            Problem- solving mindset and the ability to perform well in
            collaboration.Looking forward to utilizing current skillset and
            experience to build a world-class website to achieve organizational
            goals.
          </Text>
          <Scroll.Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <Button
              size="sm"
              w={{ base: "100%", md: "auto" }}
              p="8"
              borderRadius="10px"
              fontSize={{ base: "sm", md: "lg" }}
              bgGradient={
                colorMode === "light"
                  ? "#f88c6d"
                  : "none"
              }
              bgColor={colorMode === "dark" ? "red" : "#f88c6d"}
              _hover={{
                color: colorMode === "light" ? "white" : "black",
                cursor: "pointer",
              }}
            >
              Contact Me
            </Button>
          </Scroll.Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default About;
