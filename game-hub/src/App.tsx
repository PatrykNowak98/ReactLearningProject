import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar/navbar";
import GameGrid from "./components/GameGrid";

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

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
