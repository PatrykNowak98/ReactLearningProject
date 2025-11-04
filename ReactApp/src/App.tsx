import Like from "./components/Like/Like";
import "./App.css";

function App() {
  return (
    <div>
      <Like onClick={() => console.log("clicked!")} />
    </div>
  );
}

export default App;
