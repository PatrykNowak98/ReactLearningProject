import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo/logo.webp";

const NavBar = () => {
  return (
    <HStack height="100%" px={4}>
      <Image src={logo} height="60px" />
      <Text fontWeight="bold">Menu</Text>
    </HStack>
  );
};

export default NavBar;
