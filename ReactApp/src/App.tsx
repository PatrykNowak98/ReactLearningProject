import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let [alertVisible, setAlertvisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertvisibility(false)}>My Alert</Alert>
      )}
      <Button
        color="danger"
        onClick={() => {
          setAlertvisibility(true);
        }}
      >
        Button
      </Button>
    </div>
  );
}

export default App;
