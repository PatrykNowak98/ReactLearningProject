import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} height="100%" px={4}>
      <Image src={logo} height="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
