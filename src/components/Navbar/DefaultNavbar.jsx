import { Box, Button, Flex, Hide, useColorMode } from "@chakra-ui/react";
import { TfiDownload } from "react-icons/tfi";
import ColorModeToggle from "../Darkmode";
import resume from '../../images/Jugal-Borse-Resume.pdf'
// eslint-disable-next-line no-unused-vars
import styes from "./Navbar.css";
import * as Scroll from "react-scroll";


function DefaultNavbar() {
  const { colorMode } = useColorMode();
  return (
    <Hide breakpoint="(max-width: 770px)">
      <Flex
        justifyContent={"space-evenly"}
        alignItems={"center"}
        w={{
          md: "48em",
          lg: "58em",
          xl: "68em",
          "2xl": "60%",
        }}
        id="nav-menu"
        // border={"1px solid blue"}
      >
        {/* Home */}
        <Scroll.Link
          // activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="nav-link home hover-underline-animation"
        >
          <Button
            _hover={{ color: colorMode === "light" ?"#f88c6d" : "red" }}
            bgColor={colorMode === "light" ? "#f7f7f7" : "black"}
            fontSize={["xs", "sm", "lg", "xl"]}
          >
            Home
          </Button>
        </Scroll.Link>
        {/* About */}
        <Scroll.Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="nav-link about hover-underline-animation"
        >
          <Button
            _hover={{ color: colorMode === "light" ? "#f88c6d" : "red" }}
            bgColor={colorMode === "light" ? "#f7f7f7" : "black"}
            fontSize={["xs", "sm", "lg", "xl"]}
          >
            About
          </Button>
        </Scroll.Link>
        {/* Skills */}
        <Scroll.Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="nav-link skills hover-underline-animation"
        >
          <Button
            _hover={{
              color: colorMode === "light" ? "#f88c6d" : "red",
              cursor: "pointer",
            }}
            bgColor={colorMode === "light" ? "#f7f7f7" : "black"}
            fontSize={["xs", "sm", "lg", "xl"]}
          >
            Skills
          </Button>
        </Scroll.Link>
        {/* Projects */}
        <Scroll.Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="nav-link projects hover-underline-animation"
        >
          <Button
            _hover={{
              color: colorMode === "light" ? "#f88c6d" : "red",
              cursor: "pointer",
            }}
            bgColor={colorMode === "light" ? "#f7f7f7" : "black"}
            fontSize={["xs", "sm", "lg", "xl"]}
          >
            Projects
          </Button>
        </Scroll.Link>
        {/* Contact */}
        <Scroll.Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="nav-link contact hover-underline-animation"
        >
          <Button
            _hover={{
              color: colorMode === "light" ? "#f88c6d" : "red",
              cursor: "pointer",
            }}
            bgColor={colorMode === "light" ? "#f7f7f7" : "black"}
            fontSize={["xs", "sm", "lg", "xl"]}
          >
            Contact
          </Button>
        </Scroll.Link>
        {/* Resume */}
        <a
          id="resume-link-1"
          className="nav-link resume"
          href={resume}
          download=""
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/11_9JcqDJg3JXzK0qwzkjLg9hHGWROwUM/view?usp=sharing"
            );
          }}
        >
          <Button
            id="resume-button-1"
            // download=""
            _hover={{
              color: colorMode === "light" ? "black" : "white",
              cursor: "pointer",
            }}
            bgGradient={
              colorMode === "light"
                ? "#f88c6d"
                : "none"
            }
            color={colorMode === "light" ? "white" : "black"}
            bgColor={colorMode === "dark" ? "red" : "#f88c6d"}
            borderRadius={"10px"}
            fontSize={["xs", "sm", "lg", "xl"]}
          >
            Resume
            <Box as={"span"} ml={"1"} fontSize={["xs", "sm", "lg", "xl"]}>
              {<TfiDownload />}
            </Box>
          </Button>
        </a>
        <ColorModeToggle />
      </Flex>
    </Hide>
  );
}
export default DefaultNavbar;
