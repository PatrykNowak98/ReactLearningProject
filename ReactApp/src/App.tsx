// src/App.tsx
import "./App.css";
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList/ProductList";

function App() {
  const [category, setcategory] = useState("");
  useEffect(() => {});

  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => setcategory(event.target.value)}
      >
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      {<ProductList category={category} />}
    </div>
  );
}

export default App;
