import React from "react";
import {Box, Flex} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#512DA8">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="space-around"
          alignItems="center"
          maxWidth="1024px"
          height={32}
        >
          <p>Osman • © 2023</p>
          <p><a href="https://www.buymeacoffee.com/osrbck"> <img align="right" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="osrbck" /></a></p>

        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
