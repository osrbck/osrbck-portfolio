import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "MVP on Saas",
    description:
      "Functional landing page, we have developed a SAAS product that we hope wil strengthen the recruitment process 🔥️",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "House Rent Contract Automation System",
    description:
      "This project is about rental contract automation. It is prepared for real estate companies. Company employees can view customers (both homeowners and tenants), houses and contracts data.",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Steve the Snake",
    description:
       "Implemented Snake Game, added dynamic animations to the game using improvised algorithms.",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Undergraduate Thesis - Autonomous Bottle Sorter",
    description:
      "This was a group project of my university's Capstone Project course. Main purpose of this course is to complete given task from ground up as a team in one term.",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#512DA8"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={10}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
