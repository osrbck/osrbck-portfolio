import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Osman";
const bio1 = "Full-Stack Developer, IT";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading, and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#18181b"
    >
    <VStack spacing={4} alignItems="center">
      {/* Avatar component */}
      <Avatar size={"2xl"} src="https://avatars.githubusercontent.com/u/84333662?v=4" />
      {/* Greeting and bio components */}
      <Heading as="h1" size="2xl" color="tomato">
        {greeting}
      </Heading>
      <Heading as="h2" size="md" color="white">
        {bio1}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
