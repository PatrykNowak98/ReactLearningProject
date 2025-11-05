import "./App.css";
import { useState } from "react";
import NavBar from "./components/Navbar/NavBar";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartItems, setCartItems] = useState([
    "Product 1",
    "Product 2",
    "Product 3",
  ]);

  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
}

export default App;
