import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Osman";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading, and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#243854"
  >
    <VStack spacing={4} alignItems="center">
      {/* Avatar component */}
      <Avatar size="2xl" src="https://media.licdn.com/dms/image/D4D03AQG-fJeZUZVYRg/profile-displayphoto-shrink_800_800/0/1677355514327?e=1706745600&v=beta&t=AmZ7XJk9CvLsgu1RzZ-8dh6j20IHbTDYR4VLdFrLU58" />

      {/* Greeting and bio components */}
      <Heading as="h1" size="2xl" color="tomato">
        {greeting}
      </Heading>
      <Heading as="h2" size="lg" color="white">
        {bio1}
      </Heading>
      <Heading as="h2" size="md" color="white">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
