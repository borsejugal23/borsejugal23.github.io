import { Box, Center, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import SkillItem from "../components/Skills/SkillItem";
import javascript_logo from "../images/javascript_logo.png";
import html_logo from "../images/html_logo.png";
import git_logo from "../images/git_logo.png";
import react_logo from "../images/react_logo.png";
import node_logo from "../images/node_logo.png";
import typescript_logo from "../images/typescript_logo.png";
import redux_logo from "../images/redux_logo.png";
import mongoDB_logo from "../images/mongoDB_logo.png";
import n8n from "../images/n8n.io.png";
import tailwind from "../images/Tailwind CSS.png";
import MySQL from "../images/logo-mysql-26300.png";
import Ant from "../images/ant-design.svg";
const Skills = () => {
  let arr = [
    { src: javascript_logo, name: "Javascript" },
    { src: html_logo, name: "HTML" },
    { src: git_logo, name: "Git" },
    
    { src: react_logo, name: "React JS" },
    { src: node_logo, name: "Node" },
    { src: tailwind, name: "Tailwind" },

    { src: redux_logo, name: "Redux" },
    { src: typescript_logo, name: "TypeScript" },
    { src: mongoDB_logo, name: "Mongo DB" },

    { src: n8n , name: "n8n" },
    { src: Ant, name: "Ant Design" },
    { src: MySQL, name: "MySQL" },
    
  ];
  return (
    <Box id="skills">
      <Center mb={{ base: "20px", md: "40px" }}>
        <Heading>Skills</Heading>
      </Center>
      <Box minHeight={{ base: "70vh", md: "100vh" }}>
        <Center>
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(3, 1fr)",
            }}
            gap={{ base: 4, md: 6 }}
          >
            {arr.map((item, i) => {
              return <SkillItem key={i} logo={item} />;
            })}
          </Grid>
        </Center>
      </Box>
    </Box>
  );
};

export default Skills;
