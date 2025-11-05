import { produce } from "immer";
import "./App.css";
import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Adam" } });
  };

  return (
    <div>
      {game.player.name}
      <button onClick={handleClick}>ChangeName</button>
    </div>
  );
}

export default App;
