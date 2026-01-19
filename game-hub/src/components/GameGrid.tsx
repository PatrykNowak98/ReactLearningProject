import useGames from "@/hooks/useGames";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.length > 0
          ? games.map((game) => <li key={game.id}>{game.name}</li>)
          : !error && <li>Loading games…</li>}
      </ul>
    </>
  );
};

export default GameGrid;
