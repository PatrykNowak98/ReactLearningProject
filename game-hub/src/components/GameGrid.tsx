import { useEffect, useState } from "react";
import apiClient from "@/services/api-client";

interface Game {
  id: number;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGameResponse>("/games")
      .then((res) => {
        if (res.data?.results) {
          setGames(res.data.results);
        } else {
          setError("No results found");
        }
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {games.length > 0 ? (
        games.map((game) => <li key={game.id}>{game.name}</li>)
      ) : (
        <li>Loading games…</li>
      )}
    </ul>
  );
};

export default GameGrid;
