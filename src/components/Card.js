import React from "react";
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      borderRadius="lg"
      overflow="hidden"
      borderWidth="1px"
      borderColor="gray.200"
      p={4}
      spacing={4}
      backgroundColor="white"
    >
      {/* Image */}
      <Image src={imageSrc} alt={title} />

      {/* Title and Description */}
      <VStack alignItems="start" spacing={2}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text>{description}</Text>
      </VStack>

      {/* Read More Link */}
      <HStack justifyContent="flex-end" w="100%">
        <Text color="blue.500" fontWeight="bold" fontSize="sm">
          Read More
        </Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
