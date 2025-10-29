import ListGroup from "./components/ListGroup/ListGroup";
import "./App.css";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectitem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectitem}
      />
    </div>
  );
}

export default App;
