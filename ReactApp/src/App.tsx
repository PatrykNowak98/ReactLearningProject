import { produce } from "immer";
import "./App.css";
import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Salami"] });
  };

  return (
    <div>
      {pizza.name}
      {pizza.toppings}
      <button onClick={handleClick}>Add Topping</button>
    </div>
  );
}

export default App;
