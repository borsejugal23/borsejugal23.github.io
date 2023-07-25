import { Box, Center, Heading, Show } from "@chakra-ui/react";
import React from "react";
import {
  MediumProjectCard,
  ProjectCards,
} from "../components/Projects/ProjectCards";

import busykids_one from "../images/busykids_one.png";
import busykids_two  from "../images/busykids_two.png";
import busykids_three  from "../images/busykids_three.png";
import busykids_four  from "../images/busykids_four.png";
import busykids_five  from "../images/busykids_five.png";


import food_one from "../images/food_one.png";
import food_two  from "../images/food_two.png";
import food_three  from "../images/food_three.png";
import food_four  from "../images/food_four.png";

import shop_one from "../images/shop_one.png";
import shop_two  from "../images/shop_two.png";
import shop_three  from "../images/shop_three.png";
import shop_four  from "../images/shop_four.png";


const Projects = () => {
  const busykids = [
 busykids_one ,
 busykids_two,
 busykids_three  ,
 busykids_four ,
 busykids_five ,

  ];

  const foodifinder=[
    food_one ,
    food_two,
    food_three  ,
    food_four ,
    ]

    const shop=[
      shop_one ,
      shop_two,
      shop_three  ,
      shop_four ,
      ]
  return (
    <Box
      pl={{
        base: "5",
        sm: "5",
        md: "5",
        lg: "10",
        xl: "10",
        "2xl": "10",
      }}
      pr={{
        base: "5",
        sm: "5",
        md: "5",
        lg: "10",
        xl: "10",
        "2xl": "10",
      }}
      id="projects"
    >
      <Center>
        <Heading mb={"40px"}>Projects</Heading>
      </Center>

      <ProjectCards
        direction={"row-reverse"}
        deployedLink={"https://energized-baseball-7687.vercel.app/"}
        image={busykids}
        title={"Busy Kids"}
        subTitle={"virtual bank"}
        GithubLink={"https://github.com/RoshanAAS/energized-baseball-7687"}
        features={[
          "Signup and login The platform provides a user-friendly signup ",
          "Searching filtring Functionality Users can search for specific Teacher",
          "Real-time payment integration using Razer Pay.",
          "Firebase Authentication is utilized for user authentication and authorization",
        ]}
        description={
          "Busy Kids is a virtual bank for kids, where you can teach them about the value of money in a safe environment. Kids will learn how to budget, save up for goals and spend responsibly using our cool easy-to-use app and website, while teachers have control over the students accounts and activities."
        }
        techStack={["React.js","Chakra UI", "FireBase", "Redux"]}
      />
      <Show breakpoint="(max-width: 993px)">
        <MediumProjectCard
          image={busykids}
          deployedLink={"https://energized-baseball-7687.vercel.app/"}
          GithubLink={"https://github.com/RoshanAAS/energized-baseball-7687"}
          title={"Busy Kids"}
          subTitle={"virtual bank"}
          description={
            "Busy Kids is a virtual bank for kids, where you can teach them about the value of money in a safe environment. Kids will learn how to budget, save up for goals and spend responsibly using our cool easy-to-use app and website, while teachers have control over the students accounts and activities."
          }
          techStack={["React.js","Chakra UI", "FireBase", "Redux"]}
        />
      </Show>














      <ProjectCards
        direction={"row-reverse"}
        deployedLink={"https://dark-van-7997-foodie-finder-abdul.netlify.app/"}
        image={foodifinder}
        title={"Foodie Finder"}
        subTitle={"Food delivery"}
        GithubLink={"https://github.com/Mahendra-mohane/dark-van-7997"}
        features={[
          "Signup and login The platform provides a user-friendly signup ",
          "Searching filtring Functionality Users can search for specific Food",
        ]}
        description={
           "Chick-fil-a is a convenient and easy-to-use website that allows customers to order food from their favorite restaurants."
        }
        techStack={["HTML","CSS", "Javascript"]}
      />
      <Show breakpoint="(max-width: 993px)">
        <MediumProjectCard
          image={foodifinder}
          deployedLink={"https://dark-van-7997-foodie-finder-abdul.netlify.app/"}
          GithubLink={"https://github.com/Mahendra-mohane/dark-van-7997"}
          title={"Food delivery"}
          subTitle={"Food"}
          description={
            "Busy Kids is a virtual bank for kids, where you can teach them about the value of money in a safe environment. Kids will learn how to budget, save up for goals and spend responsibly using our cool easy-to-use app and website, while teachers have control over the students accounts and activities."
          }
          techStack={["HTML","CSS", "Javascript"]}
        />
      </Show>






      <ProjectCards
        direction={"row-reverse"}
        deployedLink={"https://spotty-butter-9254.netlify.app/"}
        image={shop}
        title={"ShopClues"}
        subTitle={"e-commerce"}
        GithubLink={"https://github.com/ShubhangiSisodia/Shopclues-Clone"}
        features={[
          "Signup and login The platform provides a user-friendly signup ",
          "Searching filtring Functionality Users can search for specific Product",
          "Add to cart Functionality Users can add product in cart.",
         
        ]}
        description={
          "The website features numerous categories, including mobiles and tablets, electronics, fashion and accessories, home and kitchen, automotive, sports and fitness, books, toys and baby care, and more. Customers can explore these categories and find products of their choice"
        }
        techStack={["HTML","CSS", "Javascript"]}
      />
      <Show breakpoint="(max-width: 993px)">
        <MediumProjectCard
          image={shop}
          deployedLink={"https://spotty-butter-9254.netlify.app/"}
          GithubLink={"https://github.com/ShubhangiSisodia/Shopclues-Clone"}
          title={"ShopClues"}
          subTitle={"e-commerce"}
          description={
            "The website features numerous categories, including mobiles and tablets, electronics, fashion and accessories, home and kitchen, automotive, sports and fitness, books, toys and baby care, and more. Customers can explore these categories and find products of their choice"
          }
          techStack={["HTML","CSS", "Javascript"]}
        />
      </Show>






      {/* <ProjectCards
        direction={"row-reverse"}
        deployedLink={"https://energized-baseball-7687.vercel.app/"}
        image={busykids}
        title={"Busy Kids"}
        subTitle={"virtual bank"}
        GithubLink={"https://github.com/RoshanAAS/energized-baseball-7687"}
        features={[
          "Signup and login The platform provides a user-friendly signup ",
          "Searching filtring Functionality Users can search for specific Teacher",
          "Real-time payment integration using Razer Pay.",
          "Firebase Authentication is utilized for user authentication and authorization",
        ]}
        description={
          "Busy Kids is a virtual bank for kids, where you can teach them about the value of money in a safe environment. Kids will learn how to budget, save up for goals and spend responsibly using our cool easy-to-use app and website, while teachers have control over the students accounts and activities."
        }
        techStack={["React.js","Chakra UI", "FireBase", "Redux"]}
      />
      <Show breakpoint="(max-width: 993px)">
        <MediumProjectCard
          image={busykids}
          deployedLink={"https://energized-baseball-7687.vercel.app/"}
          GithubLink={"https://github.com/RoshanAAS/energized-baseball-7687"}
          title={"Busy Kids"}
          subTitle={"virtual bank"}
          description={
            "Busy Kids is a virtual bank for kids, where you can teach them about the value of money in a safe environment. Kids will learn how to budget, save up for goals and spend responsibly using our cool easy-to-use app and website, while teachers have control over the students accounts and activities."
          }
          techStack={["React.js","Chakra UI", "FireBase", "Redux"]}
        />
      </Show> */}
    </Box>
  );
};

export default Projects;
