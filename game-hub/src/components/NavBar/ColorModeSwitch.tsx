import { HStack, Switch, Text } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch.Root
        checked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorPalette={"cyan"}
      >
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label />
      </Switch.Root>
      <Text>{colorMode === "dark" ? "Dark Mode" : "Light Mode"}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
