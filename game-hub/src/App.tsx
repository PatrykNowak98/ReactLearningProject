import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar/navbar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      gridTemplateRows="80px 1fr"
      gridTemplateColumns={{ base: "1fr", lg: "200px 1fr" }}
      height="100vh"
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="aside" display={{ base: "none", lg: "block" }}>
        Aside
      </GridItem>

      <GridItem area="main">Main</GridItem>
    </Grid>
  );
}

export default App;
