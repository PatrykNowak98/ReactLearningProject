import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard/GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={10}>
        {games.length > 0
          ? games.map((game) => <GameCard key={game.id} game={game} />)
          : !error && <li>Loading games…</li>}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
