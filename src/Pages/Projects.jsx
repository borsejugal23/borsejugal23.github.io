import { Box, Center, Heading, Show } from "@chakra-ui/react";
import React from "react";
import {
  MediumProjectCard,
  ProjectCards,
} from "../components/Projects/ProjectCards";

import petconnect_one from "../images/petconnect_one.png";
import petconnect_two  from "../images/petconnect_two.png";
import petconnect_three  from "../images/petconnect_three.png";
import petconnect_four  from "../images/petconnect_four.png";
import petconnect_five  from "../images/petconnect_five.png";

import career_one from "../images/career-1.png";
import career_two  from "../images/career-2.png";
import career_three  from "../images/career-3.png";
import career_four  from "../images/career-4.png";
import career_five  from "../images/career-5.png";

import Ajio_one from "../images/Ajio_one.png";
import Ajio_two  from "../images/Ajio_two.png";
import Ajio_three  from "../images/Ajio_three.png";
import Ajio_four  from "../images/Ajio_four.png";
import Ajio_five  from "../images/Ajio_five.png";

import shop_one from "../images/shop_one.png";
import shop_two  from "../images/shop_two.png";
import shop_three  from "../images/shop_three.png";
import shop_four  from "../images/shop_four.png";
import shop_five  from "../images/shop_five.png";


const Projects = () => {

  const petconnect=[
    petconnect_one ,
    petconnect_two,
   petconnect_three  ,
   petconnect_four ,
   petconnect_five

  ];
  const career = [
 career_one ,
 career_two,
 career_three  ,
 career_four ,
 career_five ,

  ];

  const Ajioifinder=[
    Ajio_one ,
    Ajio_two,
    Ajio_three  ,
    Ajio_four ,
    Ajio_five,
    ]

    const shop=[
      shop_one ,
      shop_two,
      shop_three  ,
      shop_four ,
      shop_five
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
        deployedLink={"https://pets-connect.vercel.app/"}
        image={petconnect}
        title={"Petfinder"}
        subTitle={"Pet Adopt"}
        GithubLink={"https://github.com/borsejugal23/Pet_Connect"}
        features={[
          "The platform provides a user-friendly signup",
          "sharing valuable information about pets habits and care",
          "User can adopt pet animals like dogs and cats",
          "Admin has access to Approve user adopt request and handle the database"
        ]}
        description={
          "The main goal of Petfinder is to help connect adoptable pets with potential adopters. It serves as a centralized database for animal shelters, rescue organizations, and individuals to list and promote pets that are available for adoption. By facilitating these connections, Petfinder aims to increase the chances of pets finding loving and permanent homes."
        }
        techStack={["React.js", "Redux","Chakra UI", "MongoDB"]}
      />
      <Show breakpoint="(max-width: 993px)">
        <MediumProjectCard
          image={petconnect}
          deployedLink={"https://pets-connect.vercel.app/"}
          GithubLink={"https://github.com/borsejugal23/Pet_Connect"}
          title={"Petfinder"}
          subTitle={"Pet Adopt"}
          description={
            "The main goal of Petfinder is to help connect adoptable pets with potential adopters. It serves as a centralized database for animal shelters, rescue organizations, and individuals to list and promote pets that are available for adoption. By facilitating these connections, Petfinder aims to increase the chances of pets finding loving and permanent homes."
          }
          techStack={["React.js", "Redux","Chakra UI", "MongoDB"]}
        />
      </Show>



      <ProjectCards
        direction={"row-reverse"}
        deployedLink={"https://careermantra.netlify.app/"}
        image={career}
        title={"Career-Mantra"}
        subTitle={"Education Platform"}
        GithubLink={"https://github.com/borsejugal23/CareerMantra"}
        features={[
          "The platform provides a user-friendly signup",
          "Searching filtring Functionality Users can filter for specific Colleges/Universities",
          "User can get complete information of Colleges/Universities",
          "Admin has access to update and delete the database"
        ]}
        description={
          "Find World's Top Colleges/Universities suitable for you | Get Admission in Top Universities in Abroad | Get up to 100% Scholarship in Top Colleges/Universities."
        }
        techStack={["React.js", "Redux","Chakra UI", "JavaScript"]}
      />
      <Show breakpoint="(max-width: 993px)">
        <MediumProjectCard
          image={career}
          deployedLink={"https://careermantra.netlify.app/"}
          GithubLink={"https://github.com/borsejugal23/CareerMantra"}
          title={"Career-Mantra"}
          subTitle={"Education Platform"}
          description={
            "Find World's Top Colleges/Universities suitable for you | Get Admission in Top Universities in Abroad | Get up to 100% Scholarship in Top Colleges/Universities."
          }
          techStack={["React.js", "Redux","Chakra UI", "JavaScript"]}
        />
      </Show>














      <ProjectCards
        direction={"row-reverse"}
        deployedLink={"https://ajio-com.vercel.app/"}
        image={Ajioifinder}
        title={"Ajio"}
        subTitle={"e-commerce"}
        GithubLink={"https://github.com/borsejugal23/Ajio.com"}
        features={[
          "The platform provides a user-friendly signup ",
          "Searching filtring Functionality Users can search for specific Product",
          "Complete product details page, showing various sizes and different categories",
          "cart page that will change dynamically according to the products available on cart",
          "Checkout page which calculates the shipping prices dynamically",
        ]}
        description={
           "Grab Your Favourite Styles Ranging from Clothing, Footwear And Accessories, Now at Ajio. Refresh Your Style With Latest Brands At Best Price From AJIO Only For You. Shop Now! Premium Brands. Claim Reliance One Points. Easy Returns. For Every Occasion."
        }
        techStack={["HTML","CSS", "Javascript","React.js"]}
      />
      <Show breakpoint="(max-width: 993px)">
        <MediumProjectCard
          image={Ajioifinder}
          deployedLink={"https://ajio-com.vercel.app/"}
          GithubLink={"https://github.com/borsejugal23/Ajio.com"}
          title={"Ajio"}
          subTitle={"e-commerce"}
          description={
            "Grab Your Favourite Styles Ranging from Clothing, Footwear And Accessories, Now at Ajio. Refresh Your Style With Latest Brands At Best Price From AJIO Only For You. Shop Now! Premium Brands. Claim Reliance One Points. Easy Returns. For Every Occasion."
          }
          techStack={["HTML","CSS", "Javascript","React.js"]}
        />
      </Show>






      <ProjectCards
        direction={"row-reverse"}
        deployedLink={"https://clothie.netlify.app/"}
        image={shop}
        title={"Clothie's"}
        subTitle={"e-commerce"}
        GithubLink={"https://github.com/borsejugal23/Clothies"}
        features={[
          "The platform provides a user-friendly signup ",
          "Complete product details page, showing various sizes and different categories",
          "cart page that will change dynamically according to the products available on cart",
          "Checkout page which calculates the shipping prices dynamically",
         
        ]}
        description={
          "Our goal is to make shopping for children's apparel and care items hassle-free and enjoyable, offering a wide selection of trendy clothes and practical products that cater to the unique needs of both parents and their precious children."
        }
        techStack={["HTML","CSS", "Javascript"]}
      />
      <Show breakpoint="(max-width: 993px)">
        <MediumProjectCard
          image={shop}
          deployedLink={"https://clothie.netlify.app/"}
          GithubLink={"https://github.com/borsejugal23/Clothies"}
          title={"Clothie's"}
          subTitle={"e-commerce"}
          description={
            "Our goal is to make shopping for children's apparel and care items hassle-free and enjoyable, offering a wide selection of trendy clothes and practical products that cater to the unique needs of both parents and their precious children."
          }
          techStack={["HTML","CSS", "Javascript"]}
        />
      </Show>






      {/* <ProjectCards
        direction={"row-reverse"}
        deployedLink={"https://energized-baseball-7687.vercel.app/"}
        image={career}
        title={"Busy Kids"}
        subTitle={"virtual bank"}
        GithubLink={"https://github.com/RoshanAAS/energized-baseball-7687"}
        features={[
          "The platform provides a user-friendly signup ",
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
          image={career}
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
